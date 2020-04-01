import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { CrpAll } from '__mocks__';
import GlobalState from '../../../store';
import HomeScreen from '../index';

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

describe('HomeScreen =>', () => {
  let tree = null;
  const handlePress = jest.fn();

  beforeEach(() => {
    tree = render(
      <GlobalState.Provider>
        <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
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

  test('HomeScreen should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  //   test('HomeScreen should render correctly with custom width height', () => {
  //     const { rerender, getByTestId } = tree;
  //     rerender(
  //       <HomeScreen
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
