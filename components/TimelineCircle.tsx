import {View, Text, StyleSheet} from 'react-native';
import COLORS from '../themes/colors';

const CIRCLE_RAIUS = 22;

type Props = {
  dateTime: string;
};

type LineProps = {
  color: string;
};

function Line(props: LineProps) {
  return (
    <View
      style={{
        backgroundColor: props.color,
        width: 1,
        flex: 1,
        zIndex: 0,
        flexDirection: 'column',
        right: CIRCLE_RAIUS / 2,
      }}
    />
  );
}

function TimelineCircle(props: Props) {
  return (
    <View style={styles.timeline}>
      <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        <Text style={styles.text}>00:00</Text>
        <View style={styles.circle} />
      </View>
      <Line color={COLORS.GRAY} />
    </View>
  );
}

const styles = StyleSheet.create({
  timeline: {
    height: '100%',
    alignItems: 'flex-end',
  },
  text: {marginRight: 6, fontSize: 18},
  circle: {
    width: CIRCLE_RAIUS,
    height: CIRCLE_RAIUS,
    borderRadius: CIRCLE_RAIUS,
    borderColor: COLORS.GRAY,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
  },
});

export default TimelineCircle;
