import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ICountryItemProps } from "./CountryItem.props";

const Item = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  /* background-color: ${({ theme }) => theme.backgrounds.light_purple};
  opacity: 0.7; */
`;

const Text = styled.Text`
  color: #fff;
  font-size: 18px;
`;

const Code = styled.Text`
  color: ${({ theme }) => theme.colors.grey};
`;

export default function CountryItem({
  name,
  code,
  onSelectCountry,
}: ICountryItemProps) {
  return (
    <Item onPress={() => onSelectCountry({ name, code })}>
      <Text>{name}</Text>
      {/* <Text style={{ fontWeight: "bold", marginLeft: 10 }}>Code: </Text>
      <Code>{code}</Code> */}
    </Item>
  );
}
