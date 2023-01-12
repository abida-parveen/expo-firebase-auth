import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";
import NoAuthNavigation from "./NoAuthNavigation";

const Auth = () => {
  return (
    <NavigationContainer>
      <NoAuthNavigation />
    </NavigationContainer>
  );
};

export default Auth;
