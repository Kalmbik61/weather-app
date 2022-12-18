import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { IWeatherItemProps } from "./WeatherItem.props";

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  font-size: 20px;
  font-family: mt-light;
`;

const Value = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 25px;
`;

export default function WeatherItem({ name, value, style }: IWeatherItemProps) {
  if (!value) return null;

  return (
    <LinearGradient style={styles.wrapper} colors={["#2E335A", "#1C1B33"]}>
      <Text>{name}</Text>
      <Value>{value}</Value>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 5,
    borderRadius: 5,
    width: 150,
    height: 100,
    opacity: 0.9,
    justifyContent: "center",
    margin: 10,
  },
});
