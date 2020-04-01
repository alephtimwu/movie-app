import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

const MyLoader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#fff" />
  </View>
);

export default MyLoader;
