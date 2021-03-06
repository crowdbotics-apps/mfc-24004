import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps195568Navigator from '../features/Maps195568/navigator';
import Additem195567Navigator from '../features/Additem195567/navigator';
import Maps195563Navigator from '../features/Maps195563/navigator';
import UserProfile195559Navigator from '../features/UserProfile195559/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps195568: { screen: Maps195568Navigator },
Additem195567: { screen: Additem195567Navigator },
Maps195563: { screen: Maps195563Navigator },
UserProfile195559: { screen: UserProfile195559Navigator },

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
