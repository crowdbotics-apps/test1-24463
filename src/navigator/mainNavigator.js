import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList204091Navigator from '../features/NotificationList204091/navigator';
import Settings204090Navigator from '../features/Settings204090/navigator';
import Settings204082Navigator from '../features/Settings204082/navigator';
import UserProfile204080Navigator from '../features/UserProfile204080/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
