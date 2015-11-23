'use strict';

var React = require('react-native');
var {
  ScrollView,
  StyleSheet,
  View,
  Image
} = React;

var TestModule = React.createClass({
  title: '<ScrollView>',
  description: 'To make content scrollable, wrap it within a <ScrollView> component',
  render: function() {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        onScroll={() => { console.log('onScroll!'); }}
        scrollEventThrottle={200}
        style={styles.scrollView}>
        {THUMBS.map(createThumbRow)}
      </ScrollView>
    );
  }
});

var Thumb = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    return (
      <View style={styles.button}>
        <Image style={styles.img} source={this.props.uri} />
      </View>
    );
  }
});

var THUMBS = [
  require('./list_view_module/images/total_girls.png'),
  require('./list_view_module/images/jessicajung.png'),
  require('./list_view_module/images/kimhyoyeon.png'),
  require('./list_view_module/images/seohyun.png'),
  require('./list_view_module/images/sooyoung.png'),
  require('./list_view_module/images/sunny.png'),
  require('./list_view_module/images/taeyeon.png'),
  require('./list_view_module/images/tiffany.png'),
  require('./list_view_module/images/yoona.png'),
  require('./list_view_module/images/yuri.png'),
];
// THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

var styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
  horizontalScrollView: {
    height: 120,
  },
  containerPage: {
    height: 50,
    width: 50,
    backgroundColor: '#527FE4',
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    width: 64,
    height: 64,
  }
});

module.exports = TestModule;
