import React from "react";
import styled from "styled-components/native";
import { ICityItemProps } from "./CityItem.props";

const Text = styled.Text`
  color: #fff;
`;

const Item = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
`;

const CityName = styled(Text)`
  font-size: 20px;
`;

const Country = styled(Text)`
  margin-left: 10px;
  font-family: mt-light;
`;

export default function CityItem({ id, name, onSelectCity }: ICityItemProps) {
  return (
    <Item onPress={() => onSelectCity({ id, name })}>
      <CityName>{name}</CityName>
      {/* <Country>{country.name}</Country> */}
    </Item>
  );
}
