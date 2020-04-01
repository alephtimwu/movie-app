import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
// import { CrpAll } from '__mocks__';
import UseAppContext from '../../../store/index';
import FavButton from '../index';

describe('FavButton page =>', () => {
  let tree = null;

  beforeEach(() => {
    tree = render(<FavButton />);
  });

  test('FavButton should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  // test('Click on footer back', () => {
  //   const { getAllByText } = tree;
  //   const [back] = getAllByText('Back to Dashboard');
  //   fireEvent.click(back);
  // });
  // test('Click on Have us contact you', () => {
  //   const { getAllByText } = tree;
  //   const [contact] = getAllByText('Have us contact you');
  //   fireEvent.click(contact);
  // });
  // test('Click on retake', () => {
  //   const { getAllByText } = tree;
  //   const [retake] = getAllByText('retake');
  //   fireEvent.click(retake);
  // });
});
