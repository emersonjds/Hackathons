import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Account from "./pages/Account";

const CartStack = createStackNavigator({
  Cart: { screen: Cart }
});

const HomeScreen = createStackNavigator({
  Home: { screen: Home }
});

const AccountStack = createStackNavigator({
  Account: { screen: Account }
});

const Tabs = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Cart: {
    screen: CartStack
  },
  Account: {
    screen: AccountStack
  }
});

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
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
