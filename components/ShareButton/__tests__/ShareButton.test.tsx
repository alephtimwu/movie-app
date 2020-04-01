import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
// import { CrpAll } from '__mocks__';
import UseAppContext from '../../../store/index';
import ShareButton from '../index';

describe('ShareButton =>', () => {
  let tree = null;

  beforeEach(() => {
    tree = render(<ShareButton />);
  });

  test('ShareButton should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  // test('Click on footer back', () => {
  //   const { getAllByText } = tree;
  //   const [back] = getAllByText('Back to Dashboard');
  //   fireEvent.click(back);
  // });
});
