import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Home } from "./Home";
import { Team } from "./Team";
import { Substituition } from "./Substituition";
import { Escalation } from "./Escalation";
import { InGame } from "./InGame";
import { colors } from "../../styles";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";

const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: () => <IconFontAwesome name="home" size={21} color="#FFF" />
      }
    },
    Team: {
      screen: Team,
      navigationOptions: {
        tabBarIcon: () => (
          <IconMaterialCommunity name="soccer-field" size={21} color="#FFF" />
        )
      }
    },
    InGame: {
      screen: InGame,
      navigationOptions: {
        tabBarIcon: () => (
          <IconMaterialCommunity name="soccer-field" size={21} color="#FFF" />
        )
      }
    }
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
  },
  inGame: {
    screen: InGame,
    navigationOptions: {
      title: "MATCH"
    }
  }
});
export default Tabs;
