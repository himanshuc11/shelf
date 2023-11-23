import {PermissionsAndroid} from 'react-native';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {firebase} from '@react-native-firebase/messaging';

async function requestNotificationPermissionAndroid() {
  try {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    await getFirebaseTokenAsync();
  } catch (err) {
    Alert.alert('Permission Denied');
  }
}

async function getFirebaseTokenAsync() {
  if (!messaging().isDeviceRegisteredForRemoteMessages) {
    await messaging().registerDeviceForRemoteMessages();
  }
  const fcmToken = await firebase.messaging().getToken();
  return fcmToken;
}

export {requestNotificationPermissionAndroid, getFirebaseTokenAsync};
