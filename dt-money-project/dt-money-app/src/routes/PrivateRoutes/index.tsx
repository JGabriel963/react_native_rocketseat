import { Home } from "@/screens/Home";
import { createStackNavigator } from "@react-navigation/stack";

export type PrivateStackParamsList = {
  Home: undefined;
};

export function PrivateRoutes() {
  const PrivateStack = createStackNavigator<PrivateStackParamsList>();
  return (
    <PrivateStack.Navigator>
      <PrivateStack.Screen name="Home" component={Home} />
    </PrivateStack.Navigator>
  );
}
