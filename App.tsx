import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackNavigatorParamList, HomeScreenNavigationProp} from './types';
import {
  getFirebaseTokenAsync,
  requestNotificationPermissionAndroid,
} from './utils/helper';
import ItenaryItem from './components/ItenaryItem';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

function DetailsScreen(props: HomeScreenNavigationProp) {
  const navigation = useNavigation();
  // @ts-ignore
  const handleNavigate = () => navigation.navigate('Home');

  console.log(props);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen Ner</Text>
      <Button onPress={handleNavigate} title="Navigate To Home" />
    </View>
  );
}

function HomeScreen(props: HomeScreenNavigationProp) {
  const navigation = useNavigation();

  React.useEffect(() => {
    const token = async () => {
      await requestNotificationPermissionAndroid();
      const res = await getFirebaseTokenAsync();
      console.log(res);
    };
    token();
  }, []);

  // @ts-ignore
  const handleNavigate = () => navigation.navigate('Details');
  return (
    <View style={{flex: 1, marginTop: 30}}>
      <ItenaryItem color="yellow" />
      <ItenaryItem color="red" />
      <ItenaryItem color="green" />
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
