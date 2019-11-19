import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import PhotoSection from './src/components/photo-section'
// import PhotoFeed from "./src/components/photo-feed";
// import DataFacebook from "./src/components/dataFacebook"

export default function App() {
  return (
    <View style={styles.container}>
      <Header title = 'Photos'/>
      <PhotoSection/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
