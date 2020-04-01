import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
// import { CrpAll } from '__mocks__';
import UseAppContext from '../../../store/index';
import SectionHeader from '../index';

describe('SectionHeader =>', () => {
  let tree = null;

  beforeEach(() => {
    tree = render(<SectionHeader>Test</SectionHeader>);
  });

  test('SectionHeader should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('SectionHeader should render correctly with custom more text', () => {
    const { getAllByText, rerender } = tree;
    rerender(<SectionHeader moreText="more">Test</SectionHeader>);
  });
});
