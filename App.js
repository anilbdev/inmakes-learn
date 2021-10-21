import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons'


import Login from './src/Login'
import Flexbox from './src/Flexbox'
import Home from './src/Drawer/Home'
import Profile from './src/Drawer/Profile'
import DrawerContent from "./src/Drawer/DrawerContent";
import AboutUs from "./src/Drawer/AboutUs";
import Settings from "./src/Drawer/Settings"
import Cart from "./src/Tab/Cart";
import Order from "./src/Tab/Order";
import Categoty from "./src/Tab/Category";
import Search from "./src/Tab/Search";
import { TabBarItem } from "react-native-tab-view";


const Stack =createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab =createMaterialTopTabNavigator()

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
        options={{headerShown:false}}
      />

      <Stack.Screen
        name='Drawer'
        component={MyDrawer}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='Tab'
        component={myTab}
        options={{headerShown:false}}
      />
    </Stack.Navigator>

  )
}

function MyDrawer(){
  return(
    <Drawer.Navigator
      drawerContent={(props)=> <DrawerContent {...props}/>}
    >
      <Drawer.Screen 
        name='Home'
        component={Home}
      />
      <Drawer.Screen
        name='Profile'
        component={Profile}
      />
      <Drawer.Screen
        name='AboutUs'
        component={AboutUs}
      />
      <Drawer.Screen
        name='Settings'
        component={Settings}
      />     
    </Drawer.Navigator>
  )
}

function myTab(){
  return(
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle:{fontSize:12},
      TabBarItemStyle:{width:100},
      tabBarStyle:{backgroundColor:'#fff'}
    }}
    >
      <Tab.Screen
        name='LieCycle'
        component={Cart}
        options={{
          tabBarActiveTintColor:'blue',
          tabBarInactiveTintColor:'grey',
          tabBarIcon:({focused})=> 
          focused ? <Icon name='shopping-cart' size={24} color='blue' /> : <Icon name='shopping-cart' size={24} color='grey'/>
        }}
      />
      <Tab.Screen
        name='Category'
        component={Categoty}
        options={{
          tabBarActiveTintColor:'blue',
          tabBarInactiveTintColor:'grey',
          tabBarIcon:({focused})=> 
          focused ? <Icon name='category' size={24} color='blue' /> : <Icon name='category' size={24} color='grey' />
        }}
      />
      <Tab.Screen
        name='Order'
        component={Order}
        options={{
          tabBarActiveTintColor:'blue',
          tabBarInactiveTintColor:'grey',
          tabBarIcon:({focused})=> 
          focused ? <Icon name='shopping-bag' size={24} color='blue' /> :<Icon name='shopping-bag' size={24} color='grey' />
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarActiveTintColor:'blue',
          tabBarInactiveTintColor:'grey',
          tabBarIcon:({focused})=> 
          focused ? <Icon name='search' size={24} color='blue' /> : <Icon name='search' size={24} color='grey' />
        }}
    />
    </Tab.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}