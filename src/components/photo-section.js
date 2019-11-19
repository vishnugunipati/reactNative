import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default class PhotoSection extends Component {

  constructor() {
    super();

    this.like = false;
    this.state = {heartIcon: 'ios-heart'}
  }

  toggleLike(){
    this.like = !this.like;
    if(this.like){
      this.setState({heartIcon: 'ios-heart'})
    }else{
      this.setState({heartIcon: 'ios-heart'});
    }
  }
  render(){
    return(
      <ScrollView style = {styles.container}>
        <View stle ={styles.thumbnailSection}>
          <Image
            style={styles.thumbnail}
            source={require('../../assets/prfIcon.png')}/>
          <View style = {styles.userContainer}>
            <Text style={ styles.username}>username</Text>
          </View>
        </View>

        <View>
          <Image
            style={{width:null, height: 230}}
            source={require('../../assets/back.jpg')}/>
        </View>

        <View style={styles.heartContainer}>
          <TouchableWithoutFeedback onPress={ this.toggleLike.bind(this)}>
            <Ionicons name={this.state.heartIcon} size={20}  />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.imageMata}>
          <Text style={styles.username}>userName</Text>
          <Text>Caption</Text>
        </View>

        <View stle ={styles.thumbnailSection}>
          <Image
            style={styles.thumbnail}
            source={require('../../assets/prfIcon.png')}/>
          <View style = {styles.userContainer}>
            <Text style={ styles.username}>username</Text>
          </View>
        </View>

        <View>
          <Image
            style={{width:null, height: 230}}
            source={require('../../assets/back.jpg')}/>
        </View>

        <View style={styles.heartContainer}>
          <TouchableWithoutFeedback onPress={ this.toggleLike.bind(this)}>
            <Ionicons name={this.state.heartIcon} size={20}  />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.imageMata}>
          <Text style={styles.username}>userName</Text>
          <Text>Caption</Text>
        </View>

        <View stle ={styles.thumbnailSection}>
          <Image
            style={styles.thumbnail}
            source={require('../../assets/prfIcon.png')}/>
          <View style = {styles.userContainer}>
            <Text style={ styles.username}>username</Text>
          </View>
        </View>

        <View>
          <Image
            style={{width:null, height: 230}}
            source={require('../../assets/back.jpg')}/>
        </View>

        <View style={styles.heartContainer}>
          <TouchableWithoutFeedback onPress={ this.toggleLike.bind(this)}>
            <Ionicons name={this.state.heartIcon} size={20}  />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.imageMata}>
          <Text style={styles.username}>userName</Text>
          <Text>Caption</Text>
        </View>
      </ScrollView>
    );
  }
};

const styles ={
  container: {
    margin:10,
  },

  thumbnailSection: {
    flexDirection: 'row',
    // padding: 5,
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
  },

  heartContainer:{
    paddingTop: 7,
    paddingBottom: 7,
  }
};