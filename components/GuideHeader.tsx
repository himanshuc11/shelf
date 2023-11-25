import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {updateTab} from '../redux/guide';
import COLORS from '../themes/colors';
import GuideTabItem from './GuideTabItem';
import type {GuideTab} from '../types';

function GuideHeader() {
  const guide = useSelector<{guide: GuideTab}>(
    state => state.guide,
  ) as GuideTab;
  const dispatch = useDispatch();

  const handleTabPress = (guideTab: GuideTab) => {
    dispatch(updateTab(guideTab));
  };
  return (
    <View style={styles.guideTabContainer}>
      <GuideTabItem
        day={'YESTERDAY'}
        handleTabPress={handleTabPress}
        isFocussed={guide === 'YESTERDAY'}
      />
      <GuideTabItem
        day={'TODAY'}
        handleTabPress={handleTabPress}
        isFocussed={guide === 'TODAY'}
      />
      <GuideTabItem
        day={'TOMORROW'}
        handleTabPress={handleTabPress}
        isFocussed={guide === 'TOMORROW'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  guideTabContainer: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
    justifyContent: 'space-evenly',
    height: 80,
  },
});

export default GuideHeader;
