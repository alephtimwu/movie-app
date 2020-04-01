import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
// import { CrpAll } from '__mocks__';
import mockMovie from '../../../constants/movies';
import CardMovie from '../index';

describe('CardMovie =>', () => {
  let tree = null;
  const handlePress = jest.fn();

  beforeEach(() => {
    tree = render(
      <CardMovie movie={mockMovie.mock[0]} onPress={handlePress} />
    );
  });

  test('CardMovie should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('CardMovie should render correctly with custom width height', () => {
    const { rerender, getByTestId } = tree;
    rerender(
      <CardMovie
        movie={mockMovie.mock[0]}
        onPress={handlePress}
        width={80}
        height={100}
      />
    );
    fireEvent.press(getByTestId('card-press'));
    expect(handlePress).toBeCalled();
  });
});
