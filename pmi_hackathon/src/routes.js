import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Login from "./pages/Login";
import Enterprises from "./pages/Enterprises";

const Routes = createAppContainer(
  createStackNavigator({
    Enterprises,
    Login
  })
);

export default Routes;
