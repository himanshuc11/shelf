import {PermissionsAndroid, Platform} from 'react-native';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {isAfter, isBefore, differenceInMinutes} from 'date-fns';
import {firebase} from '@react-native-firebase/messaging';
import {ITEMS} from './constants';
import {format, sub, add} from 'date-fns';
import COLORS from '../themes/colors';
import type {GuideTab, Itenary} from '../types';

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

function getTimelineStyles(
  currentDate: Date,
  currentItemStartDate: Date,
  nextItemStartDate: Date,
) {
  let circleStyles = {};
  if (isBefore(currentItemStartDate, currentDate)) {
    circleStyles = {
      backgroundColor: COLORS.FOCUS_BLUE,
    };
  }

  let filledStyle = {};
  let unfilledStyle = {};

  // current time is before start date of the item => Itenary Item hasn't started
  if (isBefore(currentDate, currentItemStartDate)) {
    unfilledStyle = {
      height: '100%',
    };
    filledStyle = {
      height: '0%',
    };
    return {
      circleStyles,
      unfilledStyle,
      filledStyle,
    };
  }

  // current time is after start date of the item => Itenary Item has been completed
  if (isAfter(currentDate, nextItemStartDate)) {
    filledStyle = {
      height: '100%',
    };
    unfilledStyle = {
      height: '0%',
    };

    return {
      circleStyles,
      filledStyle,
      unfilledStyle,
    };
  }

  // Itenary Item is in progress, Hence compute lengths to color
  if (
    isAfter(currentDate, currentItemStartDate) &&
    isBefore(currentDate, nextItemStartDate)
  ) {
    const totalLength = differenceInMinutes(
      nextItemStartDate,
      currentItemStartDate,
    );
    const filledLength = differenceInMinutes(currentDate, currentItemStartDate);
    const filledPercentage = (filledLength * 100) / totalLength;
    const unfilledPercentage = 100 - filledPercentage;

    filledStyle = {
      height: `${filledPercentage}%`,
    };
    unfilledStyle = {
      height: `${unfilledPercentage}%`,
    };
  }

  return {
    filledStyle,
    unfilledStyle,
    circleStyles,
  };
}

function generateList(date: string): Itenary[] {
  return ITEMS.map(item => {
    return {...item, date: `${date}${item.date}`};
  });
}

function generateDummyData() {
  const DATE_FORMAT = 'yyyy-LL-dd';

  const today = format(new Date(), DATE_FORMAT);
  const yesterday = format(
    sub(new Date(), {
      days: 1,
    }),
    DATE_FORMAT,
  );
  const tommorow = format(
    add(new Date(), {
      days: 1,
    }),
    DATE_FORMAT,
  );

  const yesterdayItems = generateList(yesterday);
  const todayItems = generateList(today);
  const tommorowItems = generateList(tommorow);

  return {
    yesterdayItems,
    todayItems,
    tommorowItems,
  };
}

export {
  requestNotificationPermissionAndroid,
  getFirebaseTokenAsync,
  getDayText,
  getTimelineStyles,
  generateDummyData,
};
