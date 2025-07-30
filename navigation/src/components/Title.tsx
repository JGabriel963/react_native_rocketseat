import { View, Text, TextProps } from "react-native";
import React from "react";

export function Title({ children, ...rest }: TextProps) {
  return (
    <Text style={{ fontSize: 22, fontWeight: 700 }} {...rest}>
      {children}
    </Text>
  );
}
