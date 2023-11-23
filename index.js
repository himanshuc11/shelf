/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import notifee, { EventType } from '@notifee/react-native';

notifee.onBackgroundEvent(async ({ type, detail }) => {
  const { notification, pressAction } = detail;
  console.log(detail)
  // Check if the user pressed the "Mark as read" action
  // if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
  //   // Update external API
    

  //   // Remove the notification
  //   await notifee.cancelNotification(notification.id);
  // }
});

async function onMessageReceived(message) {
  
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
}

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);


  
AppRegistry.registerComponent(appName, () => App);
