import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title = 'Photos'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
