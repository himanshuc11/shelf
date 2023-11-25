import {View, Text, Image, StyleSheet} from 'react-native';
import TimelineCircle from './TimelineCircle';
import * as images from '../themes/images';
import {format} from 'date-fns';
import COLORS from '../themes/colors';

const items = [
  {
    id: 1,
    title: 'Maldives',
    subTitle: 'Save the turtles',
    date: '2023-11-22T18:30:00.000Z',
    weather: images.wind,
  },
  {
    id: 2,
    title: 'Golden Beach',
    subTitle: 'Surfing on sea',
    date: '2023-11-23T02:30:00.000Z',
    weather: images.thunder,
  },
  {
    id: 3,
    title: 'Coconut Grove',
    subTitle: 'BBQ party by the sea',
    date: '2023-11-23T10:30:00.000Z',
    weather: images.moon,
  },
  {
    id: 4,
    title: 'Maldives Islands',
    subTitle: 'Sea blowing',
    date: '2023-11-23T18:29:00.000Z',
    weather: images.rain,
  },
];

type Props = {};

function ItenaryItem(props: Props) {
  const currentItem = items[3];
  const date = new Date(currentItem.date);
  const dateText = format(date, 'HH:mm');

  return (
    <View style={styles.itenaryContainer}>
      <Text style={styles.timeText}>{dateText}</Text>
      <TimelineCircle date={currentItem.date} />
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
