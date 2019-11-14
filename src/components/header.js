import React, { Component }from 'react';
import { View, Text, } from 'react-native';

export default class Header extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>hello header welcome to solve the world of testst</Text>
      </View>
    )
  }
}

const styles = {
  container:{
    background: '#f8f8f8  ',
    paddingTop: 100,
    alignItems: 'center',
  },
};