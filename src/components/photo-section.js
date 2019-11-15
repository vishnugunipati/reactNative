import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

export default class PhotoSection extends Component {
  render(){
    return(
      <View style = {styles.container}>
        <View stle ={styles.thumbnailSection}>
          <Image
            style={styles.thumbnail}
            source={{uri:'https://img.icons8.com/doodle/48/000000/user.png'}}/>
          <View style = {styles.userContainer}>
            <Text>UserName</Text>
          </View>
        </View>
        <View>
          <Image
            source={{uri:'https://img.icons8.com/doodle/48/000000/user.png'}}/>
        </View>
        <View>
          <Button title ='like'/>
        </View>
        <View>
          <Text>UserName</Text>
          <Text>Caption</Text>
        </View>
      </View>
    );
  }
};

const styles ={
  container: {
    margin:10,
  },

  thumbnailSection: {
    flexDirection: 'row',
    padding: 5,
    borderBottomColor: '#dddd',
  },

  thumbnail: {
    width:50,
    height:50,
    borderRadius:25
  },

  userContainer:{
    justifyContent: 'center',
    padding: 5
  }
};