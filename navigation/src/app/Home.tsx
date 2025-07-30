import { View, Text } from "react-native";
import React from "react";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import ButtonIcon from "@/components/ButtonIcon";

export function Home() {
  return (
    <View
      style={{
        flex: 1,
        padding: 32,
      }}
    >
      <Header>
        <Title>Home</Title>
        <ButtonIcon name="add-circle" />
      </Header>
    </View>
  );
}
