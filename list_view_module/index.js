'use strict'

var React = require('react-native');

var {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} = React

var styles = require('./style');

// 图片
var IMAGES = [
  require('./images/total_girls.png'),
  require('./images/jessicajung.png'),
  require('./images/kimhyoyeon.png'),
  require('./images/seohyun.png'),
  require('./images/sooyoung.png'),
  require('./images/sunny.png'),
  require('./images/taeyeon.png'),
  require('./images/tiffany.png'),
  require('./images/yoona.png'),
  require('./images/yuri.png'),
];

// 名字
var NAMES = [
  'Girls\' Generation',
  'Jessica Jung',
  'Kim Hyo Yeon',
  'Seo Hyun',
  'Soo Young',
  'Sunny',
  'Taeyeon',
  'Tiffany',
  'Yoona',
  'Yuri'
];

var Card = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },

  render: function() {
    return (
      <TouchableOpacity style={styles.button} onPress={() => ToastAndroid.show(NAMES[this.props.num].toString(), ToastAndroid.SHORT)}>
        <View style={styles.blank}/>
        <Image
          style={styles.image}
          resizeMode={'cover'}
          source={this.props.img}/>
        <View style={styles.blank}/>
      </TouchableOpacity>
    );
  }
});

var createCardRow = (img, i) => <Card img={img} key={i} num={i}/>;

var ListViewModule = React.createClass({
  render: function() {
    var verticalScrollView = (
      <ScrollView
        style={styles.container}>
        {IMAGES.map(createCardRow)}
      </ScrollView>
    );

    return verticalScrollView;
  }
});

module.exports = ListViewModule;
