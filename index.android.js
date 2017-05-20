/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Calculator from './src/Calculator';
import Setting from './src/Setting';

const MyCalculator = StackNavigator({
  Main: { screen: Calculator },
  Setting: { screen: Setting },
});

AppRegistry.registerComponent('Calculator', () => MyCalculator);
