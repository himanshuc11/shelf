import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {HomeStackNavigatorParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Screen from './screens';
import * as Icons from './themes/icons';
import COLORS from './themes/colors';

const Tab = createBottomTabNavigator<HomeStackNavigatorParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={Screen.Home}
          options={{
            tabBarIcon: props => (
              <Icons.Home
                fill={props.focused ? COLORS.FOCUS_BLUE : COLORS.ICON_GRAY}
              />
            ),
          }}
        />
        <Tab.Screen name="Wallet" component={Screen.Wallet} />
        <Tab.Screen name="Guide" component={Screen.Guide} />
        <Tab.Screen name="Chart" component={Screen.Chart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
