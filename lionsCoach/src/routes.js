import {
  createAppContainer,
  createStackNavigator,
  SwitchNavigator,
  createSwitchNavigator
} from "react-navigation";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createSwitchNavigator({
    Profile: Profile
  })
);

export default Routes;
