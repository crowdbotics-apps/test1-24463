import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile204120Navigator from '../features/UserProfile204120/navigator';
import Tutorial204119Navigator from '../features/Tutorial204119/navigator';
import NotificationList204091Navigator from '../features/NotificationList204091/navigator';
import Settings204090Navigator from '../features/Settings204090/navigator';
import Settings204082Navigator from '../features/Settings204082/navigator';
import UserProfile204080Navigator from '../features/UserProfile204080/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile204120: { screen: UserProfile204120Navigator },
Tutorial204119: { screen: Tutorial204119Navigator },
NotificationList204091: { screen: NotificationList204091Navigator },
Settings204090: { screen: Settings204090Navigator },
Settings204082: { screen: Settings204082Navigator },
UserProfile204080: { screen: UserProfile204080Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
