import * as React from 'react';
import TabBar from './components/TabBar';
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
      <Tab.Navigator screenOptions={{headerShown: false}} tabBar={TabBar}>
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
        <Tab.Screen
          name="Wallet"
          component={Screen.Wallet}
          options={{
            tabBarIcon: props => (
              <Icons.Wallet
                fill={props.focused ? COLORS.FOCUS_BLUE : COLORS.ICON_GRAY}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Guide"
          component={Screen.Guide}
          options={{
            tabBarIcon: props => (
              <Icons.Guide
                fill={props.focused ? COLORS.FOCUS_BLUE : COLORS.ICON_GRAY}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chart"
          component={Screen.Chart}
          options={{
            tabBarIcon: props => (
              <Icons.Chart
                fill={props.focused ? COLORS.FOCUS_BLUE : COLORS.ICON_GRAY}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
