import React, { Component }from 'react';
import { View, StyleSheet, Text, } from 'react-native';

export default class Header extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>hello header welcome to solve the world of testst</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#',
  },

  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 5,
  },
};