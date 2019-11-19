import React, { Component}from 'react';
import { FlatList, Text, View  } from 'react-native';
import axios from 'axios';

export default class DataFacebook extends Component {

  state ={
    dataSource: [],
  };

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson.movies);
        this.setState({
          dataSource: responseJson.movies,
        });
      });
  }

  render(){
    return(
      <View>
        <Text>{this.state.dataSource}}</Text>

      </View>
    );
  }
}
