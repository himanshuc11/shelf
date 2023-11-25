import {CIRCLE_RAIUS} from '../utils/constants';
import COLORS from '../themes/colors';
import {View, StyleSheet} from 'react-native';
import {isAfter, isBefore, differenceInMinutes} from 'date-fns';
import Location from '../themes/icons/Location';
import {getTimelineStyles} from '../utils/helper';

type Props = {
  date: string;
  // If nextDate is undefined, this means this is the last Item
  nextDate: string | undefined;
};

function TimelineCircle({date, nextDate}: Props) {
  const currentDate = new Date();
  const currentItemStartDate = new Date(date);
  const nextItemStartDate = nextDate ? new Date(nextDate) : new Date();

  const {unfilledStyle, filledStyle, circleStyles} = getTimelineStyles(
    currentDate,
    currentItemStartDate,
    nextItemStartDate,
  );

  return (
    <View style={styles.timelineContainer}>
      <View style={[styles.circle, circleStyles]}>
        <Location fill={COLORS.WHITE} />
      </View>
      {nextDate ? (
        <View style={styles.timeline}>
          <View style={[styles.timelineFilled, filledStyle]} />
          <View style={[styles.timelineUnfilled, unfilledStyle]} />
        </View>
      ) : null}
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
    flexDirection: 'column',
    right: CIRCLE_RAIUS / 2,
  },
  timelineFilled: {
    backgroundColor: COLORS.FOCUS_BLUE,
    width: 2,
    flexDirection: 'column',
    right: CIRCLE_RAIUS / 2,
  },
});

export default TimelineCircle;
