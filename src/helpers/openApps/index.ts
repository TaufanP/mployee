import {Linking} from 'react-native';
import Toast from 'react-native-toast-message';

export default async function openApps(
  type: 'web' | 'phone' | 'mail' | 'sms',
  payload?: string,
) {
  if (!!payload) {
    let link = '';
    switch (type) {
      case 'phone':
        link = `tel:${payload}`;
        break;
      case 'web':
        link = payload;
        break;
      case 'mail':
        link = `mailto:${payload}`;
        break;
      case 'sms':
        link = `sms:${payload}`;
        break;
      default:
        break;
    }
    try {
      if (type === 'web') {
        const canOpen = await Linking.canOpenURL(link);
        if (canOpen) Linking.openURL(link);
        else {
          Toast.show({
            position: 'bottom',
            type: 'error',
            text1: 'Cannot visit the site!',
          });
        }
      } else Linking.openURL(link);
    } catch (error) {
      Toast.show({
        position: 'bottom',
        type: 'error',
        text1: 'Cannot do the action!',
      });
    }
  } else {
    Toast.show({
      position: 'bottom',
      type: 'error',
      text1: 'Cannot do the action!',
    });
  }
}
