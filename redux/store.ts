import {configureStore} from '@reduxjs/toolkit';
import guide from './guide';

const store = configureStore({
  reducer: {
    guide,
  },
});

export default store;
