/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Flexbox from './src/Flexbox';
import {name as appName} from './app.json';
import Webview from './src/Webview'
import LoginScreen from './src/Login2'
import RegisterScreen from './src/Register'
import Login from './src/Login'
AppRegistry.registerComponent(appName, () => Login);
