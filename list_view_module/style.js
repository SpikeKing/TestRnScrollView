'use strict'

var React = require('react-native');

var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  button: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },

  image: {
    flex: 1,
    height: 200,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FF1492',
  },

  blank: {
    width: 10,
  }
});

module.exports = styles;
