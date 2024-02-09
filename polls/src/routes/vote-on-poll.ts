import { z } from "zod";
import { randomUUID } from "node:crypto";
import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";

export async function voteOnPoll(app: FastifyInstance) {
  app.post("/polls/:pollId/votes", async (request, reply) => {
    const voteOnPollBody = z.object({
      pollOptionId: z.string().uuid(),
    });

    const voteOnPollParams = z.object({
      pollId: z.string().uuid(),
    });

    const { pollId } = voteOnPollParams.parse(request.params);
    const { pollOptionId } = voteOnPollBody.parse(request.body);

    let { sessionId } = request.cookies;

    if (sessionId) {
      const userPreviusVoteOnPoll = await prisma.vote.findUnique({
        where: {
          sessionId_pollId: {
            sessionId,
            pollId,
          },
        },
      });

      if (
        userPreviusVoteOnPoll &&
        userPreviusVoteOnPoll.pollOptionId !== pollOptionId
      ) {
        // Apagar o voto anterior
        // Criar um novo

        await prisma.vote.delete({
          where: {
            id: userPreviusVoteOnPoll.id,
          },
        });
      } else if (userPreviusVoteOnPoll) {
        return reply
          .status(400)
          .send({ message: "You already voted on this poll." });
      }
    }

    if (!sessionId) {
      sessionId = randomUUID();

      reply.setCookie("sessionId", sessionId, {
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
        signed: true,
        httpOnly: true, // Acessível somente pelo back-end
      });
    }

    await prisma.vote.create({
      data: {
        sessionId,
        pollId,
        pollOptionId,
      },
    });

    return reply.status(201).send();
  });
}
