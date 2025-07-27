import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
