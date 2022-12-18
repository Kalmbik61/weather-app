import { ReactNode } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

export interface IContainerProps {
  readonly style?: StyleProp<ViewStyle>;
  readonly children: ReactNode;
}
