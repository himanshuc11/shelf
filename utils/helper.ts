import {PermissionsAndroid, Platform} from 'react-native';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {firebase} from '@react-native-firebase/messaging';
import {format, sub, add} from 'date-fns';
import {GuideTab} from '../types';

async function requestNotificationPermissionAndroid() {
  try {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      await getFirebaseTokenAsync();
    }
  } catch (err) {
    Alert.alert('Permission Denied');
  }
}

async function getFirebaseTokenAsync() {
  if (!messaging().isDeviceRegisteredForRemoteMessages) {
    await messaging().registerDeviceForRemoteMessages();
  }
  const fcmToken = await messaging().getToken(); // firebase.messaging()
  return fcmToken;
}

function getDayText(day: GuideTab) {
  const today = new Date();
  const formatting = 'dd MMM';

  let res = today;
  switch (true) {
    case day === 'YESTERDAY':
      const prevDay = sub(today, {
        days: 1,
      });
      res = prevDay;
      break;
    case day === 'TODAY':
      res = today;
      break;
    case day === 'TOMORROW':
      const nextDay = add(today, {
        days: 1,
      });
      res = nextDay;
      break;
  }

  return format(res, formatting);
}

export {
  requestNotificationPermissionAndroid,
  getFirebaseTokenAsync,
  getDayText,
};
