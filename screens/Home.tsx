import {View, StyleSheet, Text, Button} from 'react-native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {HomeStackNavigatorParamList} from '../types';
import COLORS from '../themes/colors';
import useNotificationToken from '../hooks/useNotificationToken';
import useTriggerNotification from '../hooks/useTriggerNotification';

type HomeScreenNavigationProp = BottomTabScreenProps<
  HomeStackNavigatorParamList,
  'Home'
>;

function Home(props: HomeScreenNavigationProp) {
  const token = useNotificationToken();
  const triggerNotification = useTriggerNotification(token);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Home Page</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonStyle}>
          <Button
            title="Yesterday Notification"
            onPress={() => triggerNotification('YESTERDAY')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title="Today Notification"
            onPress={() => triggerNotification('TODAY')}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title="Tomorrow Notification"
            onPress={() => triggerNotification('TOMORROW')}
          />
        </View>
      </View>
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
  buttonStyle: {
    marginTop: 8,
  },
  buttonContainer: {
    marginTop: 12,
  },
});

export default Home;
