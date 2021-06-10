// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/page/HomeScreen';
import DetailsScreen from './src/page/DetailsScreen';
import SettingsScreen from './src/page/SettingsScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomePage" options={{title: '首页'}}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="首页" component={HomeScreen} />
              <Stack.Screen
                name="Settings"
                options={{title: '设置'}}
                component={SettingsScreen}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Details" options={{title: '详情'}}>
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Details"
                options={{title: '详情'}}
                component={DetailsScreen}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabApp;
