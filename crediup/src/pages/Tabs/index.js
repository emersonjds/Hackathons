import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Extract from './Extract';
import Profile from './Profile';

const HomeStack = createStackNavigator({
  Home,
});

const ExtractStack = createStackNavigator({
  Extract,
});

const ProfileExtract = createStackNavigator({
  Profile,
});

const Tabs = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title: 'HOME',
      tabBarIcon: () => <IconMaterialCommunity name="home-outline" size={21} color="#7A7A7A" />,
    },
  },
  Extract: {
    screen: ExtractStack,
    navigationOptions: {
      title: 'EXTRATO',
      tabBarIcon: () => <Icon name="file-text-o" size={21} color="#7A7A7A" />,
    },
  },
  Profile: {
    screen: ProfileExtract,
    navigationOptions: {
      title: 'PERFIL',
      tabBarIcon: () => <IconMaterialCommunity name="face-profile" size={21} color="#7A7A7A" />,
    },
  },
});
export default Tabs;
