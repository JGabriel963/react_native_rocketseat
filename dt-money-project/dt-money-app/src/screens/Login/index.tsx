import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Button, TextInput } from "react-native";

export function Login() {
  const navigation =
    useNavigation<StackNavigationProp<PublicStackParamsList>>();
  return (
    <DismissKeyboardView>
      <Text>Login</Text>
      <TextInput className="bg-gray-500 w-full" />
    </DismissKeyboardView>
  );
}
