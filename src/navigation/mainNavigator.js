import Home from "../screens/Home";
import LinkingSelection from "../screens/LinkingSelection";
import Login from "../screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LinkingSelection" component={LinkingSelection} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
