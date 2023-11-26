import {useEffect, useState} from 'react';
import {
  requestNotificationPermissionAndroid,
  getFirebaseTokenAsync,
} from '../utils/helper';

function useNotificationToken() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const token = async () => {
      await requestNotificationPermissionAndroid();
      const res = await getFirebaseTokenAsync();
    };
    token();
  }, []);
  return token;
}

export default useNotificationToken;
