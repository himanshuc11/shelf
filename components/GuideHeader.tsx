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
  headerText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 28,
    color: COLORS.BLACK,
  },
  subTitleText: {
    fontFamily: 'Poppins-Regulars',
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.DARK_GRAY,
    marginTop: -2,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    height: '100%',
    borderBottomWidth: 3,
    borderColor: COLORS.FOCUS_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GuideHeader;
