import { View, Text, Button } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";

export default function Transaction() {
  const params = useLocalSearchParams<{ id: string }>();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
      }}
    >
      <Text>ID: {params.id} </Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
