import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from './src/Login'
import Flexbox from './src/Flexbox'


const Stack =createStackNavigator()

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
      name='Login'
      component={Login}
      options={{headerShown:false}}
      />
      

      <Stack.Screen
      name='Flexbox'
      component = {Flexbox}
      options={{headerShown:false}}/>
    </Stack.Navigator>

  )
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}