import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Home } from "./Home";
import { Points } from "./Points";
import { Substituition } from "./Substituition";
import { Escalation } from "./Escalation";
import { colors } from "../../styles";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";

const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: () => (
          <IconFontAwesome name="home" size={21} color="#7A7A7A" />
        )
      }
    },
    Points: Points,
    Substituition: Substituition,
    Escalation: Escalation
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "rgb(66,36,96)",
        activeTintColor: colors.white,
        showLabel: false
      }
    }
  }
);

const Tabs = createStackNavigator({
  Home: {
    screen: BottomNavigator,
    navigationOptions: {
      title: "MyLyon",
      headerTintColor: "#ffffff",
      headerStyle: {
        backgroundColor: colors.dark_purple
      },
      headerTitleStyle: {
        fontSize: 18
      }
    }
  }
});
export default Tabs;
