import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Home } from "./Home";
import { Points } from "./Points";
import { Substituition } from "./Substituition";
import { Escalation } from "./Escalation";

const BottomNavigator = createBottomTabNavigator({
  Home: Home,
  Points: Points,
  Substituition: Substituition,
  Escalation: Escalation
});

const Tabs = createAppContainer(
  createStackNavigator({
    BottomNavigator
  })
);

export default Tabs;
