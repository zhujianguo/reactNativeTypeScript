// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/page/HomeScreen';
import DetailsScreen from './src/page/DetailsScreen';
import ModalScreen from './src/page/ModalScreen';

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{title: '首页'}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Details"
        options={{title: '详情', headerBackTitle: ' '}}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen
          name="Main"
          component={Root}
          options={{headerShown: false}}
        />
        <RootStack.Screen name="MyModal" component={ModalScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
