import React from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Account from './pages/Account';
import ProductDetails from './pages/ProductDetails';
import Favorites from './pages/Favorites';
import PaymentFinish from './pages/PaymentFinish';
import {createStackNavigator} from 'react-navigation-stack';

const CartStack = createStackNavigator({
  Cart: {screen: Cart},
});

const HomeScreen = createStackNavigator({
  Home: {screen: Home},
});

const AccountStack = createStackNavigator({
  Account: {screen: Account},
});

const DetailsProduct = createStackNavigator({
  ProductDetails: {screen: ProductDetails},
});

const FinishPayment = createStackNavigator({
  PaymentFinish: {screen: PaymentFinish},
});

const MyFavorites = createStackNavigator({
  MyFavorites: {screen: Favorites},
});

const MyAccount = createStackNavigator({
  MyAccount: {screen: Account},
});

const Tabs = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HOME',
      tabBarLabel: 'HOME',
      tabBarIcon: () => (
        <IconMaterialCommunity name="home-outline" size={21} color="#7A7A7A" />
      ),
    },
  },
  Cart: {
    screen: CartStack,
    navigationOptions: {
      title: 'CARRINHO',
      tabBarLabel: 'CARRINHO',
      tabBarIcon: () => (
        <IconMaterialCommunity name="cart" size={21} color="#7A7A7A" />
      ),
    },
  },
  Account: {
    screen: AccountStack,
    navigationOptions: {
      title: 'CONTA',
      tabBarLabel: 'CONTA',
      tabBarIcon: () => (
        <IconFontAwesome name="user" size={21} color="#7A7A7A" />
      ),
    },
  },
});

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      Tabs,
      DetailsProduct,
      FinishPayment,
      MyFavorites,
      MyAccount,
    },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    },
  ),
);

export default Routes;
