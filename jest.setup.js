jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-native-firebase/messaging', () => {
    return () => ({
      registerDeviceForRemoteMessages: jest.fn(() => Promise.resolve(true)),
      hasPermission: jest.fn(() => Promise.resolve(true)),
      subscribeToTopic: jest.fn(),
      unsubscribeFromTopic: jest.fn(),
      requestPermission: jest.fn(() => Promise.resolve(true)),
      getToken: jest.fn(() => Promise.resolve('myMockToken')),
      onMessage: jest.fn(),
      onNotificationOpenedApp: jest.fn(),
      getInitialNotification: jest.fn(() => Promise.resolve(false))
    })
  })

  jest.mock('@react-native-firebase/app', () => {
    return () => ({
      onNotification: jest.fn(),
      onNotificationDisplayed: jest.fn(),
      getToken: jest.fn(() => Promise.resolve('myMockToken')),
    })
  })