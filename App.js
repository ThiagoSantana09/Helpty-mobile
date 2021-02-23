import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components";
import Toast from 'react-native-toast-message';

import theme from "./src/themes/theme";
import { AuthContextProvider } from "./src/hooks/AuthContext";

import Router from "./src/router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <StatusBar barStyle="light-content" translucent />
        <Router />
        <Toast ref={(ref) => Toast.setRef(ref)} />  
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
