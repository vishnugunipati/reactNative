import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import PhotoSection from './photo-section';

export default class PhotoFeed extends Component{

  state = {photos: []};

  componentDidMount(){
    return axios.get('http://127.0.0.1:3000/photos')
      .then(function (response) {
        this.setState({ photos: response.data })
      }).catch(function (error1) {
        console.log('while printing test game : ' + error1.message);
      });
  }

  getPhotos(){
    return this.state.photos.map(_photos => {

      return(
        <PhotoSection photo={_photos}/>
      );
    })
  }

  render(){
    return(
      <ScrollView>
        {/*{this.getPhotos()}*/}
        <Text>{this.getPhotos()}</Text>
      </ScrollView>
    );
  }
}