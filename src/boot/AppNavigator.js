import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/Home";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);
export default createAppContainer(AppNavigator);
