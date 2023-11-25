import {View, FlatList} from 'react-native';
import {ITEMS} from '../utils/constants';
import ItenaryItem from '../components/ItenaryItem';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {HomeStackNavigatorParamList} from '../types';
import GuideHeader from '../components/GuideHeader';

type GuideScreenNavigationProp = BottomTabScreenProps<
  HomeStackNavigatorParamList,
  'Guide'
>;

function Guide(props: GuideScreenNavigationProp) {
  return (
    <View style={{flex: 1}}>
      <GuideHeader />
      <FlatList
        contentContainerStyle={{
          paddingTop: 32,
        }}
        data={ITEMS}
        renderItem={({item, index}) => (
          <ItenaryItem
            {...item}
            key={item.id}
            nextDate={ITEMS?.[index + 1]?.date}
          />
        )}
      />
    </View>
  );
}

export default Guide;
