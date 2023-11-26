/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidImportance, AndroidStyle, EventType, AndroidLaunchActivityFlag} from '@notifee/react-native';


notifee.onForegroundEvent(async ({ type, detail }) => {
  const { notification, pressAction } = detail;
  console.log(notification.type)
  // Check if the user pressed the "Mark as read" action
  if (type === EventType.ACTION_PRESS && pressAction.id === "yesterday") {

    // Remove the notification
    // await notifee.cancelNotification(notification.id);
  }
});

notifee.onBackgroundEvent(async ({ type, detail }) => {
  const { notification, pressAction } = detail;
  // Check if the user pressed the "Mark as read" action
  if (type === EventType.ACTION_PRESS && pressAction.id === "yesterday") {
    // Update external API
    

    // Remove the notification
    // await notifee.cancelNotification(notification.id);
  }
});

async function onMessageReceived(message) {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'custom',
      name: 'Custom Channel',
      importance: AndroidImportance.HIGH, 
    });

    // Display a notification
    await notifee.displayNotification({
      title: "FCM Push Notification",
      subtitle: "Check out action buttons",
      data: { ...message.data },
      android: {
        pressAction: {
          id: 'default',
          launchActivity: 'default',
          launchActivityFlags: [AndroidLaunchActivityFlag.SINGLE_TOP],
        },
        channelId,
        largeIcon: "https://i.imgflip.com/7l05nu.jpg",
      style: {
        type: AndroidStyle.BIGPICTURE,
        picture: "https://i.imgflip.com/7l05nu.jpg",
      },
      },
    })
}

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);


  
AppRegistry.registerComponent(appName, () => App);
