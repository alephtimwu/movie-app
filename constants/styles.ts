import { StyleSheet, View, Text } from 'react-native';

export default StyleSheet.create({
  Flex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Flex1: {
    flex: 1
  },
  Flex2: {
    flex: 2
  },
  Flex3: {
    flex: 3
  },
  FlexLeft: {
    justifyContent: 'flex-start'
  },
  FlexRight: {
    justifyContent: 'flex-end'
  },
  FlexTop: {
    alignItems: 'flex-start'
  },
  FlexBottom: {
    alignItems: 'flex-end'
  }
});
