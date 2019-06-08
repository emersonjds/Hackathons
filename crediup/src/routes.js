import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Tabs from './pages/Tabs';

const Routes = createAppContainer(
  createStackNavigator(
    { Tabs, Login },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    },
  ),
);

export default Routes;
