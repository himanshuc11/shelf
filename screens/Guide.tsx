import {View, TouchableOpacity, Text} from 'react-native';
import ItenaryItem from '../components/ItenaryItem';
import {useSelector, useDispatch} from 'react-redux';
import {updateTab} from '../redux/guide';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {HomeStackNavigatorParamList} from '../types';
import type {GuideTab} from '../types';

type GuideScreenNavigationProp = BottomTabScreenProps<
  HomeStackNavigatorParamList,
  'Guide'
>;

function Guide(props: GuideScreenNavigationProp) {
  const guide = useSelector<{guide: string}>(state => state.guide);
  const dispatch = useDispatch();

  const handleTabPress = (guideTab: GuideTab) => {
    dispatch(updateTab(guideTab));
  };

  console.log(guide);

  return (
    <View style={{flex: 1, marginTop: 30}}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => handleTabPress('YESTERDAY')}>
          <Text>Yesterday</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('TODAY')}>
          <Text>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('TOMORROW')}>
          <Text>Tomorrow</Text>
        </TouchableOpacity>
      </View>
      <ItenaryItem />
    </View>
  );
}

export default Guide;
