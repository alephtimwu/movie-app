import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../constants/styles';
import { StyledHeading, StyledViewAll } from './style';

export default ({ children, moreText = 'View All' }) => {
  return (
    <View style={[globalStyles.Flex, globalStyles.FlexBottom]}>
      <View style={globalStyles.Flex1}>
        <StyledHeading>{children}</StyledHeading>
      </View>
      <View style={globalStyles.Flex1}>
        <StyledViewAll>{moreText}</StyledViewAll>
      </View>
    </View>
  );
};
