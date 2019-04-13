import { createAppContainer, createStackNavigator } from "react-navigation";
import { Home } from "./Home";

const Tabs = createAppContainer(
  createStackNavigator({
    Home
  })
);

export default Tabs;
