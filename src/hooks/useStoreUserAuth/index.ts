import {useMMKVString} from 'react-native-mmkv';
import {storageKeys} from '../../config/localStorage';
import {LoginType} from '../../transformResponse/authentication/login';

const initialValue: LoginType = {
  token: '',
};

export default function <T>(callback: (state: LoginType) => T): T {
  const [userObj] = useMMKVString(storageKeys.userAuth);
  if (userObj) return callback(JSON.parse(userObj));
  return callback(initialValue);
}
