import {View, FlatList} from 'react-native';
import {ITEMS} from '../utils/constants';
import ItenaryItem from '../components/ItenaryItem';
import GuideHeader from '../components/GuideHeader';
import {generateDummyData} from '../utils/helper';
import {useSelector, useDispatch} from 'react-redux';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {HomeStackNavigatorParamList} from '../types';
import type {GuideTab} from '../types';
import {useMemo} from 'react';

type GuideScreenNavigationProp = BottomTabScreenProps<
  HomeStackNavigatorParamList,
  'Guide'
>;

const items = generateDummyData();

function Guide(props: GuideScreenNavigationProp) {
  const guide = useSelector<{guide: GuideTab}>(
    state => state.guide,
  ) as GuideTab;

  const currentItems = useMemo(() => {
    switch (true) {
      case guide === 'YESTERDAY':
        return items.yesterdayItems;
      case guide === 'TODAY':
        return items.todayItems;
      case guide === 'TOMORROW':
        return items.tommorowItems;
      default:
        return items.todayItems;
    }
  }, [guide]);

  return (
    <View style={{flex: 1}}>
      <GuideHeader />
      <FlatList
        contentContainerStyle={{
          paddingTop: 32,
        }}
        data={currentItems}
        renderItem={({item, index}) => (
          <ItenaryItem
            {...item}
            key={item.id}
            nextDate={currentItems?.[index + 1]?.date}
          />
        )}
      />
    </View>
  );
}

export default Guide;
