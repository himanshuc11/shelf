import {View, Text} from 'react-native';

const items = [
  {
    id: 1,
    title: 'Maldives',
    subTitle: 'Save the turtles',
    date: '2023-11-23T00:00:00.000Z',
    weather: '',
  },
  {
    id: 2,
    title: 'Golden Beach',
    subTitle: 'Surfing on sea',
    date: '2023-11-23T00:00:00.000Z',
    weather: '',
  },
  {
    id: 3,
    title: 'Coconut Grove',
    subTitle: 'BBQ party by the sea',
    date: '2023-11-23T00:00:00.000Z',
    weather: '',
  },
  {
    id: 4,
    title: 'Maldives Islands',
    subTitle: 'Sea blowing',
    date: '2023-11-23T00:00:00.000Z',
    weather: '',
  },
];

function ItenaryItem() {
  const currentItem = items[0];
  return (
    <View>
      <Text>Yo</Text>
    </View>
  );
}

export default ItenaryItem;
