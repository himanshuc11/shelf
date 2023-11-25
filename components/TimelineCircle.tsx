import {CIRCLE_RAIUS} from '../utils/constants';
import COLORS from '../themes/colors';
import {View, StyleSheet} from 'react-native';
import {isBefore} from 'date-fns';
import Location from '../themes/icons/Location';

type Props = {
  date: string;
};

function TimelineCircle({date}: Props) {
  const currentDate = new Date();

  return (
    <View style={styles.timelineContainer}>
      <View style={styles.circle}>
        <Location fill={COLORS.WHITE} />
      </View>
      <View style={styles.timeline}>
        <View style={[styles.timelineFilled]} />
        <View style={[styles.timelineUnfilled]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timelineContainer: {height: '100%'},
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineUnfilled: {
    backgroundColor: COLORS.GRAY,
    width: 2,
    flex: 1,
    flexDirection: 'column',
    right: CIRCLE_RAIUS / 2,
  },
  timelineFilled: {
    backgroundColor: COLORS.FOCUS_BLUE,
    width: 2,
    flex: 1,
    flexDirection: 'column',
    right: CIRCLE_RAIUS / 2,
  },
});

export default TimelineCircle;
