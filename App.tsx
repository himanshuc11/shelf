import * as React from 'react';
import TabBar from './components/TabBar';
import store from './redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Screen from './screens';
import * as Icons from './themes/icons';
import COLORS from './themes/colors';
import ScreenHeader from './components/ScreenHeader';
import type {HomeStackNavigatorParamList} from './types';

const Tab = createBottomTabNavigator<HomeStackNavigatorParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{headerShown: false}}
          tabBar={TabBar}
          backBehavior="history">
          <Tab.Screen
            name="Home"
            component={Screen.Home}
            options={{
              tabBarTestID: 'Home',
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
              tabBarTestID: 'Wallet',
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
              tabBarTestID: 'Guide',
              tabBarIcon: props => (
                <Icons.Guide
                  fill={props.focused ? COLORS.FOCUS_BLUE : COLORS.ICON_GRAY}
                />
              ),
              title: 'Itinerary Form',
              headerShown: true,
              header: props => <ScreenHeader {...props} />,
            }}
          />
          <Tab.Screen
            name="Chart"
            component={Screen.Chart}
            options={{
              tabBarTestID: 'Chart',
              tabBarIcon: props => (
                <Icons.Chart
                  fill={props.focused ? COLORS.FOCUS_BLUE : COLORS.ICON_GRAY}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
