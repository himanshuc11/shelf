import * as images from '../themes/images';
import type {Itenary} from '../types';

const CIRCLE_RAIUS = 22 as const;
const GUIDE_TAB = ['YESTERDAY', 'TODAY', 'TOMORROW'] as const;

const ITEMS: Itenary[] = [
  {
    id: 1,
    title: 'Maldives',
    subTitle: 'Save the turtles',
    date: '2023-11-24T18:30:00.000Z',
    weather: images.wind,
  },
  {
    id: 2,
    title: 'Golden Beach',
    subTitle: 'Surfing on sea',
    date: '2023-11-25T02:30:00.000Z',
    weather: images.thunder,
  },
  {
    id: 3,
    title: 'Coconut Grove',
    subTitle: 'BBQ party by the sea',
    date: '2023-11-25T10:30:00.000Z',
    weather: images.moon,
  },
  {
    id: 4,
    title: 'Maldives Islands',
    subTitle: 'Sea blowing',
    date: '2023-11-25T18:29:00.000Z',
    weather: images.rain,
  },
];

export {CIRCLE_RAIUS, GUIDE_TAB, ITEMS};
