import {useRef, useState, useEffect} from 'react';
import {AppState} from 'react-native';

const useApplicationForegrounded = (callback: () => void) => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        // Application Foregrounded
        callback();
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);
};

export default useApplicationForegrounded;
