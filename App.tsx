// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/page/HomeScreen';
import DetailsScreen from './src/page/DetailsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
      name="Home"
      options={{ 
        title: '首页',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
     }}
      component={HomeScreen}/>
      <Stack.Screen
      name="Details"
      options={{
        title: '详情',
        headerStyle: {
          backgroundColor: '#f7578797',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      component={DetailsScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;