import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import { View } from "react-native";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

import Home from "../../pages/Signed/Home";
import Menu from "../../pages/Signed/Menu";
import ButtonBar from '../../components/ButtonBar';

const Tab = createBottomTabNavigator();

const optionsTabNavigator = {
  tabStyle: {
    backgroundColor: "#FFF",
  },
  showLabel: false,
 
};

const SignedRouter = () => {
  const theme = useContext(ThemeContext);
  return (
    <Tab.Navigator tabBarOptions={{ ...optionsTabNavigator }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <IconEntypo
              name="home"
              size={25}
              color={theme.colors.primary}
            />
          ),
        }}
        name="Home" 
        component={Home}
      />
       <Tab.Screen
        options={{
          tabBarIcon: () => (
            <View style={{transform: [{ rotateY: '180deg' }]}}>
              <IconMaterial
                name="message-text-outline"
                size={26}
                color={theme.colors.primary}
              />
            </View>
          ),
        }}
        name="Message" 
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <IconFont
              name="question-circle-o"
              size={28}
              color={theme.colors.primary}
            />
          ),
          tabBarButton: () => (<ButtonBar />)
        }}
        name="Interrogation2" 
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <IconFont
              name="question-circle-o"
              size={28}
              color={theme.colors.primary}
            />
          ),
        }}
        name="Interrogation" 
        component={Home}
      />
       <Tab.Screen
        options={{
          tabBarIcon: () => (
            <IconFont
              name="user-circle-o"
              size={25}
              color={theme.colors.primary}
            />
          ),
        }}
        name="Menu" 
        component={Menu}
      />
    </Tab.Navigator>
  );
};

export default SignedRouter;