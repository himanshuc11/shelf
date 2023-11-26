import {useEffect} from 'react';
import {
  requestNotificationPermissionAndroid,
  getFirebaseTokenAsync,
} from '../utils/helper';

function useNotificationToken() {
  useEffect(() => {
    const token = async () => {
      await requestNotificationPermissionAndroid();
      const res = await getFirebaseTokenAsync();
      // console.log(res);
    };
    token();
  }, []);
}

export default useNotificationToken;
