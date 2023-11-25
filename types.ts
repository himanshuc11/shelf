import {GUIDE_TAB} from './utils/constants';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Wallet: undefined;
  Guide: undefined;
  Chart: undefined;
};

export type GuideTab = (typeof GUIDE_TAB)[number];
