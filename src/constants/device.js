import { Dimensions, Platform } from 'react-native';

// is iPhone with Notch?
// iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max, iPhone 11 & 12
let iPhoneNotch = false;
if (iOS) {
  // iphone screen breakdown
  if (height === 812 || height === 844 || height === 896 || height === 926) {
    iPhoneNotch = true;
  }
}

// android
const android = Platform.OS === 'android';

const iOS = Platform.OS === 'ios';
const web = Platform.OS === 'web';
const windowInfo = Dimensions.get('window');
const { height, width } = windowInfo;
const aspectRatio = height / width;

// is iPad
const { isPad } = Platform;

export default {
  android,
  aspectRatio,
  height,
  iOS,
  iPhoneNotch,
  isPad,
  web,
  width
};