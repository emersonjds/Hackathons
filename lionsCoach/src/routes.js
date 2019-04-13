import { createAppContainer, createStackNavigator } from "react-navigation";
import Profile from "./pages/Profile";
import Tabs from "./pages/Tabs";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Profile,
      Tabs
    },
    {
      headerMode: "none",
      navigationOptions: {
        headerVisible: false
      }
    }
  )
);

export default Routes;
