import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { CrpAll } from '__mocks__';
import mockMovie from '../../../constants/movies';
import GlobalState from '../../../store';
import DetailScreen from '../index';

const Stack = createStackNavigator();

const theme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#1d1d27',
    card: 'rgb(255, 255, 255)',
    text: '#ffffff',
    border: 'rgb(199, 199, 204)'
  }
};

describe('DetailScreen =>', () => {
  let tree = null;
  const handlePress = jest.fn();

  beforeEach(() => {
    tree = render(
      <GlobalState.Provider>
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="Detail">
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              options={({ navigation, route }) => ({
                title: '',
                headerTransparent: true,
                headerStyle: {
                  backgroundColor: '#1D1D27',
                  borderWidth: 0,
                  borderColor: '#1D1D27'
                },
                headerTintColor: '#fff'
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalState.Provider>
    );
  });

  test('DetailScreen should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  //   test('DetailScreen should render correctly with custom width height', () => {
  //     const { rerender, getByTestId } = tree;
  //     rerender(
  //       <DetailScreen
  //         movie={mockMovie.mock[0]}
  //         onPress={handlePress}
  //         width={80}
  //         height={100}
  //       />
  //     );
  //     fireEvent.press(getByTestId('card-press'));
  //     expect(handlePress).toBeCalled();
  //   });
});
