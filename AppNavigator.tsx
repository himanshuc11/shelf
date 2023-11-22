import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackNavigatorParamList, HomeScreenNavigationProp} from './types';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

function DetailsScreen(props: HomeScreenNavigationProp) {
  const handleNavigate = () => props.navigate('Details');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen Ner</Text>
      <Button onPress={handleNavigate} title="Navigate To Details" />
    </View>
  );
}

function HomeScreen(props: HomeScreenNavigationProp) {
  const handleNavigate = () => props.navigate('Home');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen Ner</Text>
      <Button onPress={handleNavigate} title="Navigate To Home" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* @ts-ignore */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* @ts-ignore */}
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
