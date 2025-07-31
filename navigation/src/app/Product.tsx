import { View, Text } from "react-native";
import React from "react";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import ButtonIcon from "@/components/ButtonIcon";

import { BottomRoutesProps } from "@/routes/BottomRoutes";
// import { StackRoutesProps } from "@/routes/StackRoutes";
// import { useRoute } from "@react-navigation/native";

// type RouteParams = StackRoutesProps<"product">;

export function Product({ navigation, route }: BottomRoutesProps<"product">) {
  // const { params } = useRoute<RouteParams["route"]>();

  return (
    <View
      style={{
        flex: 1,
        padding: 32,
      }}
    >
      <Header>
        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />
        <Title>Product {route.params?.id} </Title>
        {/* <Title>Product {params?.id} </Title> */}
      </Header>
    </View>
  );
}
