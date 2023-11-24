import {CIRCLE_RAIUS} from '../utils/constants';
import COLORS from '../themes/colors';
import {View, StyleSheet} from 'react-native';

function TimelineCircle() {
  return (
    <View style={{height: '100%'}}>
      <View style={styles.circle} />
      <View style={styles.timeline}>
        <View style={styles.timelineLine} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timeline: {
    flex: 1,
    alignItems: 'flex-end',
  },
  circle: {
    width: CIRCLE_RAIUS,
    height: CIRCLE_RAIUS,
    borderRadius: CIRCLE_RAIUS,
    borderColor: COLORS.GRAY,
    borderWidth: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  timelineLine: {
    backgroundColor: COLORS.GRAY,
    width: 1,
    flex: 1,
    flexDirection: 'column',
    right: CIRCLE_RAIUS / 2,
  },
});

export default TimelineCircle;
