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

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Cart: {
    screen: CartStack
  },
  Account: {
    screen: Account
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
