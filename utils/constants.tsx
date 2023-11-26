import * as images from '../themes/images';
import type {Itenary} from '../types';

const CIRCLE_RAIUS = 22 as const;
const GUIDE_TAB = ['YESTERDAY', 'TODAY', 'TOMORROW'] as const;

// Assumption
// 1. Items must be in sorted by date order
// 2. The array for the same day (As per UI). {Code would work but no indicaction of day change in UI}
// 3. Items that span across a day must be broken into 2 separate items
const ITEMS: Itenary[] = [
  {
    id: 1,
    title: 'Maldives',
    subTitle: 'Save the turtles',
    date: 'T00:00:00.000Z',
    weather: images.wind,
  },
  {
    id: 2,
    title: 'Golden Beach',
    subTitle: 'Surfing on sea',
    date: 'T08:00:00.000Z',
    weather: images.thunder,
  },
  {
    id: 3,
    title: 'Coconut Grove',
    subTitle: 'BBQ party by the sea',
    date: 'T19:00:00.000Z',
    weather: images.moon,
  },
  {
    id: 4,
    title: 'Maldives Islands',
    subTitle: 'Sea blowing',
    date: 'T23:29:00.000Z',
    weather: images.rain,
  },
];

export {CIRCLE_RAIUS, GUIDE_TAB, ITEMS};
