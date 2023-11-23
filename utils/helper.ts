import {PermissionsAndroid} from 'react-native';
import {Alert} from 'react-native';
import {firebase} from '@react-native-firebase/messaging';

async function requestNotificationPermissionAndroid() {
  try {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    console.log(PermissionsAndroid);
    await getFirebaseTokenAsync();
  } catch (err) {
    Alert.alert('Permission Denied');
  }
}

async function getFirebaseTokenAsync() {
  const fcmToken = await firebase.messaging().getToken();
  return fcmToken;
}

export {requestNotificationPermissionAndroid, getFirebaseTokenAsync};
