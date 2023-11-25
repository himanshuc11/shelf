import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {getDayText} from '../utils/helper';
import COLORS from '../themes/colors';
import type {GuideTab} from '../types';

type Props = {
  day: GuideTab;
  handleTabPress: (guide: GuideTab) => void;
  isFocussed: boolean;
};

function GuideTabItem({day, handleTabPress, isFocussed}: Props) {
  const dateText = getDayText(day);
  const headerText = day.charAt(0) + day.slice(1).toLowerCase();

  const borderStyles = {
    borderColor: isFocussed ? COLORS.FOCUS_BLUE : COLORS.WHITE,
  };

  return (
    <TouchableOpacity onPress={() => handleTabPress(day)} style={styles.tab}>
      <View style={[styles.textContainer, borderStyles]}>
        <Text style={styles.headerText}>{headerText}</Text>
        <Text style={styles.subTitleText}>{dateText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GuideTabItem;
