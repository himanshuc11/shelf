import {GUIDE_TAB} from './utils/constants';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Wallet: undefined;
  Guide: undefined;
  Chart: undefined;
};

export type Itenary = {
  id: number;
  title: string;
  subTitle: string;
  date: string;
  weather: any;
};

export type GuideTab = (typeof GUIDE_TAB)[number];
