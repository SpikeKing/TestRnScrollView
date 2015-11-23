/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
} = React;

var RnListView = require('./list_view_module/index');
// var RnListView = require('./test');

AppRegistry.registerComponent('RnListView', () => RnListView);
