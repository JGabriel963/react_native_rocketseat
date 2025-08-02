import { View, Text, ColorValue } from "react-native";
import React from "react";
import { sytles } from "./styles";

export default function Separator({ color }: { color: ColorValue }) {
  return <View style={[sytles.container, { backgroundColor: color }]} />;
}
