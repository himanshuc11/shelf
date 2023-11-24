import {View, Text, Image, StyleSheet} from 'react-native';
import TimelineCircle from './TimelineCircle';
import {sun, moon, cloud} from '../themes/images';
import COLORS from '../themes/colors';

const items = [
  {
    id: 1,
    title: 'Maldives',
    subTitle: 'Save the turtles',
    date: '2023-11-23T00:00:00.000Z',
    weather: sun,
  },
  {
    id: 2,
    title: 'Golden Beach',
    subTitle: 'Surfing on sea',
    date: '2023-11-23T00:00:00.000Z',
    weather: moon,
  },
  {
    id: 3,
    title: 'Coconut Grove',
    subTitle: 'BBQ party by the sea',
    date: '2023-11-23T00:00:00.000Z',
    weather: cloud,
  },
  {
    id: 4,
    title: 'Maldives Islands',
    subTitle: 'Sea blowing',
    date: '2023-11-23T00:00:00.000Z',
    weather: cloud,
  },
];

type Props = {};

function ItenaryItem(props: Props) {
  const currentItem = items[0];
  return (
    <View style={styles.itenaryContainer}>
      <Text style={styles.timeText}>00:00</Text>
      <TimelineCircle />
      <View style={styles.titleGroup}>
        <View style={styles.titleContainer}>
          <Text style={styles.place}>{currentItem.title}</Text>
          <Text style={styles.activity}>{currentItem.subTitle}</Text>
        </View>
        <View style={styles.rightAlign}>
          <View style={styles.imageContainer}>
            <Image source={currentItem.weather} style={styles.weather} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  place: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.BLACK,
    lineHeight: 24,
  },
  activity: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.DARK_GRAY,
    lineHeight: 24,
  },
  titleGroup: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  titleContainer: {marginLeft: 24, marginTop: -10},
  rightAlign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -10,
  },
  imageContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  itenaryContainer: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 24,
    height: 100,
  },
  weather: {width: '100%', height: '100%'},
  timeText: {
    marginRight: 6,
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.BLACK,
    lineHeight: 24,
  },
});

export default ItenaryItem;
