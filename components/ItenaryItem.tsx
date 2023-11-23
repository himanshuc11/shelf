import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
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

function ItenaryItem() {
  const currentItem = items[0];
  return (
    <SafeAreaView style={styles.itenaryContainer}>
      <TimelineCircle />
      <View style={styles.textContainer}>
        <Text>{currentItem.title}</Text>
        <Text>{currentItem.subTitle}</Text>
      </View>
      <View style={styles.rightAlign}>
        <View style={styles.imageContainer}>
          <Image source={currentItem.weather} style={styles.weather} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textContainer: {marginLeft: 24},
  rightAlign: {flex: 1, flexDirection: 'row', justifyContent: 'flex-end'},
  imageContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99999,
  },
  itenaryContainer: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 24,
    alignItems: 'center',
  },
  weather: {width: '100%', height: '100%'},
});

export default ItenaryItem;
