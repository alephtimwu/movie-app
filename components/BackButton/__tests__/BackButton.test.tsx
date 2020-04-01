import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
// import { CrpAll } from '__mocks__';
import UseAppContext from '../../../store/index';
import BackButton from '../index';

describe('BackButton page =>', () => {
  let tree = null;

  beforeEach(() => {
    tree = render(<BackButton />);
  });

  test('BackButton result page should render correctly', async () => {
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
