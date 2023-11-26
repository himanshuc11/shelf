import * as React from 'react';
import TabBar from './components/TabBar';
import store from './redux/store';
import notifee, {EventType} from '@notifee/react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Screen from './screens';
import * as Icons from './themes/icons';
import COLORS from './themes/colors';
import useApplicationForegrounded from './hooks/useApplicationForegrounded';
import ScreenHeader from './components/ScreenHeader';
import type {HomeStackNavigatorParamList} from './types';
import type {NavigationContainerRef} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator<HomeStackNavigatorParamList>();

export default function App() {
  const navigationRef =
    React.useRef<NavigationContainerRef<HomeStackNavigatorParamList>>(null);

  // Handle Foreground notification
  React.useEffect(() => {
    notifee.onForegroundEvent(async ({type, detail}) => {
      const {notification} = detail;
      if (type === EventType.PRESS) {
        navigationRef.current?.navigate('Guide');
      }
    });
  });

  const handleTransitionBecauseOfNotification = async () => {
    const screen = await AsyncStorage.getItem('day');
    if (screen) {
      await AsyncStorage.removeItem('day');
      navigationRef.current?.navigate('Guide');
    }
  };

  useApplicationForegrounded(handleTransitionBecauseOfNotification);

  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          handleTransitionBecauseOfNotification();
        }}>
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
