import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  HomeStackNavigatorParamList,
  HomeScreenNavigationProp,
  DetailsScreenNavigationProp,
} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ItenaryItem from './components/ItenaryItem';

const Tab = createBottomTabNavigator<HomeStackNavigatorParamList>();

function DetailsScreen(props: DetailsScreenNavigationProp) {
  const handleNavigate = () => props.navigation.navigate('Home');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen Ner</Text>
      <Button onPress={handleNavigate} title="Navigate To Home" />
    </View>
  );
}

function HomeScreen(props: HomeScreenNavigationProp) {
  const handleNavigate = () => props.navigation.navigate('Details');
  return (
    <View style={{flex: 1, marginTop: 30}}>
      <ItenaryItem />
    </View>
  );
}

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
