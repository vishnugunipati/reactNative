import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import PhotoSection from './src/components/photo-section'

export default function App() {
  return (
    <View style={styles.container}>
      <Header title = 'Photos'/>
      <PhotoSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
