import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {HomeStackNavigatorParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import * as Icons from './themes/icons';
import COLORS from './themes/colors';

const Tab = createBottomTabNavigator<HomeStackNavigatorParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: props => (
              <Icons.Home
                fill={props.focused ? COLORS.FOCUS_BLUE : COLORS.ICON_GRAY}
              />
            ),
          }}
        />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
