import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import Back from '../themes/icons/Back';
import COLORS from '../themes/colors';

function ScreenHeader(props: BottomTabHeaderProps) {
  const handleBackPress = () => {
    if (props.navigation.canGoBack()) {
      console.log('HERE');
      props.navigation.goBack();
      return true;
    }
    return false;
  };

  return (
    <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={handleBackPress}>
        <Back fill={COLORS.ARROW_BLACK} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.options.title}</Text>
      </View>
    </SafeAreaView>
  );
}

export default ScreenHeader;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: 24,
    color: COLORS.BLACK,
  },
  headerContainer: {
    height: 70,
    width: '100%',
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonContainer: {
    paddingLeft: 24,
    paddingRight: 10,
    paddingVertical: 12,
    left: 0,
    position: 'absolute',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginRight: 30,
  },
});
