import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { router } from "expo-router";
import { colors } from "@/theme";

type Props = {
  title: string;
  subtitle?: string;
  rigthButton?: {
    onPress: () => void;
    icon: keyof typeof MaterialIcons.glyphMap;
  };
};

export function PageHeader({ title, subtitle, rigthButton }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.black} />
        </TouchableOpacity>

        {rigthButton && (
          <TouchableOpacity onPress={rigthButton.onPress}>
            <MaterialIcons
              name={rigthButton.icon}
              size={24}
              color={colors.gray[500]}
            />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}> {title} </Text>
      {subtitle && <Text style={styles.subtitle}> {subtitle} </Text>}
    </View>
  );
}
