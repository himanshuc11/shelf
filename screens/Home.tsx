import {View, StyleSheet, Text} from 'react-native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {HomeStackNavigatorParamList} from '../types';
import COLORS from '../themes/colors';
import useNotificationToken from '../hooks/useNotificationToken';

type HomeScreenNavigationProp = BottomTabScreenProps<
  HomeStackNavigatorParamList,
  'Home'
>;

function Home(props: HomeScreenNavigationProp) {
  useNotificationToken();
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Home Page</Text>
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

export default Home;
