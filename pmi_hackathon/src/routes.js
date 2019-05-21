import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Login from "./pages/Login";
import Enterprises from "./pages/Enterprises";
import AddConsume from "./pages/Enterprises/AddConsume";
import InfoEnterprise from "./pages/Enterprises/InfoEnterprise";

const Routes = createAppContainer(
  createStackNavigator({
    Enterprises,
    Login,
    AddConsume,
    InfoEnterprise
  })
);

export default Routes;
