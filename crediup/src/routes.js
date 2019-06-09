import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Tabs from './pages/Tabs';
import IntroSlider from './pages/IntroSlider';

const Routes = createAppContainer(
  createStackNavigator(
    { IntroSlider, Login, Tabs },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      },
    },
  ),
);

export default Routes;
