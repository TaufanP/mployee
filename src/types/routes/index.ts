import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainParam = {
  Login: undefined;
  EmployeeList: undefined;
  EmployeeDetail: {id: number};
  EmployeeCreate: undefined;
};

export type RootStackScreenProps<T extends keyof MainParam> =
  NativeStackScreenProps<MainParam, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainParam {}
  }
}
