import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  name: keyof typeof MaterialIcons.glyphMap;
};

export default function ButtonIcon({ name, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <MaterialIcons name={name} size={24} />
    </TouchableOpacity>
  );
}
