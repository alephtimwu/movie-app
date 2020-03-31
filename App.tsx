import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import GlobalState from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './screens/List';
import DetailScreen from './screens/Detail';

const Stack = createStackNavigator();

function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      Montserrat: require('./assets/fonts/Montserrat-Regular.ttf')
    });
    setIsFontLoaded(true);
  };

  return isFontLoaded ? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={ListScreen}
          options={{
            headerStyle: {
              backgroundColor: '#1D1D27'
            },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: '',
            headerTransparent: true,
            headerStyle: {
              backgroundColor: '#1D1D27'
            },
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <></>
  );
}

export default () => {
  return (
    <GlobalState.Provider>
      <App />
    </GlobalState.Provider>
  );
};
