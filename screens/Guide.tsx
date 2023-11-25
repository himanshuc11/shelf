import {View, TouchableOpacity, Text} from 'react-native';
import ItenaryItem from '../components/ItenaryItem';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {HomeStackNavigatorParamList} from '../types';
import GuideHeader from '../components/GuideHeader';
import type {GuideTab} from '../types';

type GuideScreenNavigationProp = BottomTabScreenProps<
  HomeStackNavigatorParamList,
  'Guide'
>;

function Guide(props: GuideScreenNavigationProp) {
  return (
    <View style={{flex: 1, marginTop: 30}}>
      <GuideHeader />
      <ItenaryItem />
    </View>
  );
}

export default Guide;
