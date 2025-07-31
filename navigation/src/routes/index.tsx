import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoutes";
import { BottomRoutes } from "./BottomRoutes";
import { DrawerRoutes } from "./DrawerRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}
