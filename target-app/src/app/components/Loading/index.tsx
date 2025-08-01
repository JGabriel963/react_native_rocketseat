import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { colors } from "@/theme/colors";
import { sytles } from "./styles";

export default function Loading() {
  return (
    <ActivityIndicator color={colors.blue[500]} style={sytles.container} />
  );
}
