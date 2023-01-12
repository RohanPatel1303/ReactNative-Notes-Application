/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import StackScreen from './StackNavigator/StackScreen';
import RootNavigator from './RootNavigator/RootNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RootNavigator);
