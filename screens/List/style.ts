import styled, { css } from '@emotion/native';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';

export const Description = styled.Text({
  color: 'hotpink'
});

export const Container = styled.View`
  flex: 1;
  background-color: #1d1d27;
  border: none;
  border-color: transparent;
`;

export const StyledSearchBar = styled(SearchBar)``;

export const styles = StyleSheet.create({
  SafeHeader: {
    flex: 0,
    backgroundColor: '#1d1d27'
  },
  MarginLF: {
    marginLeft: 25,
    marginRight: 25
  },
  MarginT: {
    marginTop: 8
  },
  MarginB: { marginBottom: 8 },
  SearchIconWrapper: {
    marginRight: 20
  },
  InitialWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff'
  },
  InitialText: {
    color: '#1D1D27',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  SearchBar: {
    width: 375,
    backgroundColor: '#1d1d27',
    borderColor: '#1d1d27',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderWidth: 0,
    paddingLeft: 25,
    paddingRight: 25
  },
  ScrollView: {
    width: 375,
    backgroundColor: '#1D1D27',
    paddingBottom: 43
  },
  SectionHeaderWrapper: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 45,
    marginBottom: 28
  },
  ScrollViewWrapper: {
    paddingLeft: 24,
    paddingRight: 24
  },
  SliderWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
});
