import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/Home";
import AdminScreen from "../screens/Admin";
import SigninScreen from "../screens/Signin";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Admin: AdminScreen,
    Signin: SigninScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);
export default createAppContainer(AppNavigator);
