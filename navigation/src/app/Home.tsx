import { View, Text } from "react-native";
import React from "react";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import ButtonIcon from "@/components/ButtonIcon";
import { StatusBar } from "expo-status-bar";
// import { StackRoutesProps } from "@/routes/StackRoutes";
// import { BottomRoutesProps } from "@/routes/BottomRoutes";
import { DrawerRoutesProps } from "@/routes/DrawerRoutes";

export function Home({ navigation }: DrawerRoutesProps<"home">) {
  return (
    <View
      style={{
        flex: 1,
        padding: 32,
      }}
    >
      <Header>
        <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()} />
        <Title>Home</Title>
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate("product", { id: "7" })}
        />
      </Header>
    </View>
  );
}
