import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';

import Feed from './pages/Feed';
import New from './pages/New';

export default createAppContainer(
   createStackNavigator({
      Feed,
      New,
   }, {
      defaultNavigationOptions: {
         headerTitle: 'instarocket'
      }
   })
);