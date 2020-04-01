import React from 'react';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';

const FavButton = () => (
  <View style={{ marginRight: 25 }}>
    <Icon type="font-awesome" name="heart" color="#fff" size={17}></Icon>
  </View>
);

export default FavButton;
