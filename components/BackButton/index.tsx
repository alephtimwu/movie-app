import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Back: {
    width: 20,
    height: 11,
    marginLeft: 25
  }
});

const BackButton = () => (
  <Image
    source={require('../../assets/icon-arrow-left.png')}
    style={styles.Back}
  />
);

export default BackButton;
