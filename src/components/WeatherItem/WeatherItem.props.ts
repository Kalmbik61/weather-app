import { StyleProp, ViewComponent, ViewStyle } from "react-native";

export interface IWeatherItemProps {
  readonly style?: StyleProp<ViewStyle>;
  readonly name: string;
  readonly value: string | number;
}
