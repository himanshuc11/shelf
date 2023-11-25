import {createSlice, createSelector} from '@reduxjs/toolkit';
import type {GuideTab} from '../types';

const initialState: GuideTab = 'TODAY';

const reducers = {
  updateTab: (state: GuideTab, action: GuideTab) => {
    // @ts-ignore
    state.guide = action.payload;
    // @ts-ignore
    return action.payload;
  },
};

const guideSlice = createSlice({
  name: 'guide',
  initialState,
  // @ts-ignore
  reducers,
});

export const {updateTab} = guideSlice.actions;
export default guideSlice.reducer;
