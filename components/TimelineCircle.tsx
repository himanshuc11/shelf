import {View} from 'react-native';
import COLORS from '../themes/colors';

function TimelineCircle() {
  return (
    <View
      style={{
        width: 22,
        height: 22,
        borderRadius: 22,
        borderColor: COLORS.GRAY,
        borderWidth: 1,
      }}></View>
  );
}

export default TimelineCircle;
