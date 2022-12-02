import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import type RoutesEnum from "../navigation/routes";

export interface LogRootStackParamList {
  [RoutesEnum.login]: undefined;
  [RoutesEnum.register]: undefined;
  [RoutesEnum.welcome]: undefined;
  [RoutesEnum.explore]: undefined;
  [RoutesEnum.create]: undefined;
  [RoutesEnum.home]: undefined;
  [RoutesEnum.gameDetail]: undefined;
  [RoutesEnum.update]: undefined;
  [RoutesEnum.logout]: undefined;
}

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  LogRootStackParamList,
  RoutesEnum.login
>;
