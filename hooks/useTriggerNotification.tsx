import {Alert} from 'react-native';
import type {GuideTab} from '../types';

function useTriggerNotification(token: string | null) {
  const triggerNotification = async (day: GuideTab) => {
    const url = 'https://shelf-backend-378v.onrender.com/';
    const data = {
      token,
      day,
    };
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const jsonRes = (await response.json()) as {success: boolean; data: string};
    if (!jsonRes.success) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return triggerNotification;
}

export default useTriggerNotification;
