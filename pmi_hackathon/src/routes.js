import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Login from "./pages/Login";
import Enterprises from "./pages/Enterprises";
import AddConsume from "./pages/Enterprises/AddConsume";
import InfoEnterprise from "./pages/Enterprises/InfoEnterprise";
import Badges from "./pages/Enterprises/Badges";

const Routes = createAppContainer(
  createStackNavigator({
    Badges,
    Enterprises,
    Login,
    AddConsume,
    InfoEnterprise
  })
);

export default Routes;
