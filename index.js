/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import mainNavigation from './src/navigation/Navigation';

AppRegistry.registerComponent(appName, () => mainNavigation);
