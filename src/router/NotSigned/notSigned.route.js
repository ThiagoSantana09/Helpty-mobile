import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../../pages/NotSigned/Home";
import Login from "../../pages/NotSigned/Login";
import Signup from "../../pages/NotSigned/Signup";

const Stack = createStackNavigator();

const NotSignedRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default NotSignedRouter;