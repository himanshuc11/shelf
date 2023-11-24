import {View, Text, StyleSheet} from 'react-native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {HomeStackNavigatorParamList} from '../types';
import COLORS from '../themes/colors';

type ChartScreenNavigationProp = BottomTabScreenProps<
  HomeStackNavigatorParamList,
  'Chart'
>;

function Chart(props: ChartScreenNavigationProp) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Chart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Poppins-Light',
    fontWeight: '400',
    fontSize: 36,
    lineHeight: 54,
    color: COLORS.ICON_GRAY,
  },
});

export default Chart;
