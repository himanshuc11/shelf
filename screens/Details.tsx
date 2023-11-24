import {View, Text, Button} from 'react-native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {HomeStackNavigatorParamList} from '../types';

type DetailsScreenNavigationProp = BottomTabScreenProps<
  HomeStackNavigatorParamList,
  'Details'
>;

function Details(props: DetailsScreenNavigationProp) {
  const handleNavigate = () => props.navigation.navigate('Home');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen Ner</Text>
      <Button onPress={handleNavigate} title="Navigate To Home" />
    </View>
  );
}

export default Details;
