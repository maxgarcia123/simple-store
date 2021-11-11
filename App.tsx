/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from './src/styles/theme';
import Store from './src/store/index';
import Routes from './src/routes';

const App = () => (
  <NavigationContainer>
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  </NavigationContainer>
);

export default App;
