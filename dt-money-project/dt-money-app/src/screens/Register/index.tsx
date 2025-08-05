import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export function Register() {
  const router = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-slate-300">
      <Text>Register</Text>
      <Button title="Go back" onPress={() => router.goBack()} />
    </View>
  );
}
