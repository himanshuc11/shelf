import {View} from 'react-native';
import ItenaryItem from '../components/ItenaryItem';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {HomeStackNavigatorParamList} from '../types';
import useNotificationToken from '../hooks/useNotificationToken';

type GuideScreenNavigationProp = BottomTabScreenProps<
  HomeStackNavigatorParamList,
  'Guide'
>;

function Guide(props: GuideScreenNavigationProp) {
  useNotificationToken();
  return (
    <View style={{flex: 1, marginTop: 30}}>
      <ItenaryItem />
    </View>
  );
}

export default Guide;
