import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../../screens/no-auth/Signin";

const NoAuthNavigation = () => {
    const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="signin" component={Signin} />
      </Navigator>
    </NavigationContainer>
  );
}

export default NoAuthNavigation