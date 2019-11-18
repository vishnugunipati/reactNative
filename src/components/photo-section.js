import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class PhotoSection extends Component {
  render(){
    return(
      <View style = {styles.container}>
        <View stle ={styles.thumbnailSection}>
          <Image
            style={styles.thumbnail}
            source={require('../../assets/prfIcon.png')}/>
          <View style = {styles.userContainer}>
            <Text>UserName</Text>
          </View>
        </View>

        <View>
          <Image
            style={{width:null, height: 400}}
            source={require('../../assets/back.jpg')}/>
        </View>

        <View>

        </View>

        <View style={styles.imageMata}>
          <Text style={styles.username}>UserName</Text>
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
    borderBottomWidth: 1,
  },

  thumbnail: {
    width:50,
    height:50,
    borderRadius:25
  },

  userContainer:{
    justifyContent: 'center',
    textAlign:'center',
    padding: 5
  },

  imageMata:{
    flexDirection: 'row',
    paddingRight: 5,
  },

  username: {
    fontWeight:'bold',
    paddingRight: 5
  }
};