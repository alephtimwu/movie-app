import styled, { css } from '@emotion/native';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
// css`
//     border-radius: 10px;
// `

export const Description = styled.Text({
  color: 'hotpink'
});

export const Container = styled.View`
  flex: 1;
  background-color: #1d1d27;
`;

export const StyledSearchBar = styled(SearchBar)``;

export const styles = StyleSheet.create({
  SearchBar: {
    width: '100%'
  },
  ScrollView: {
    fontFamily: 'Montserrat',
    width: 375,
    backgroundColor: '#1D1D27'
  },
  SectionHeaderWrapper: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 48,
    marginBottom: 28
  },
  ScrollViewWrapper: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 43
  },
  SliderWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
});
