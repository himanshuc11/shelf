import {useEffect, useState} from 'react';
import {
  requestNotificationPermissionAndroid,
  getFirebaseTokenAsync,
} from '../utils/helper';

function useNotificationToken() {
  const [token, setToken] = useState<null | string>(null);
  useEffect(() => {
    const token = async () => {
      await requestNotificationPermissionAndroid();
      const res = await getFirebaseTokenAsync();
      setToken(res);
    };
    token();
  }, []);
  return token;
}

export default useNotificationToken;
