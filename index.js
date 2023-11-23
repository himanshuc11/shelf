/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidImportance, AndroidStyle} from '@notifee/react-native';


notifee.onBackgroundEvent(async ({ type, detail }) => {
  const { notification, pressAction } = detail;
  console.log(notification.data)
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
      id: 'custom',
      name: 'Custom Channel',
      importance: AndroidImportance.HIGH, 
    });

    // Display a notification
    await notifee.displayNotification({
      title: "Notifee",
      subtitle: "Check out action buttons",
      body: "Choose one of the matrix pills",
      data: { id: String(9) },
      android: {
        channelId,
        largeIcon: "https://i.imgflip.com/7l05nu.jpg",
      style: {
        type: AndroidStyle.BIGPICTURE,
        picture: "https://i.imgflip.com/7l05nu.jpg",
      },
        actions: [
          {
            pressAction: { id: "red" },
            title: "Red Pill",
            
          },
          { pressAction: { id: "blue" }, title: "Blue Pill" },
        ],
      },
    })
}

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);


  
AppRegistry.registerComponent(appName, () => App);
