import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {HomeStackNavigatorParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';

const Tab = createBottomTabNavigator<HomeStackNavigatorParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
