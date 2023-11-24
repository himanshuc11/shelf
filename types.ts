import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Details: undefined;
};

export type HomeScreenNavigationProp = BottomTabScreenProps<
  HomeStackNavigatorParamList,
  'Home'
>;

export type DetailsScreenNavigationProp = BottomTabScreenProps<
  HomeStackNavigatorParamList,
  'Details'
>;
