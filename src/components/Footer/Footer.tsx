import React from "react";
import { TouchableOpacity } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { ROUTS_NAMES } from "../../utils/routsNames";

const Container = styled.View`
  height: 100%;
  width: 100%;
  bottom: 0;
  padding: 20px;
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  overflow: visible;
`;

const View = styled.View``;

const Menu = styled.Image`
  width: 40px;
  height: 40px;
`;

const Plus = styled.Image`
  width: 80px;
  height: 80px;
`;

const PlusBtnContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Plus_BG = styled.Image`
  width: 100%;
  height: 100%;
  flex: 1;
  position: absolute;
  left: 0;
  top: 0;
  overflow: visible;
`;

export default function Footer() {
  const navigation = useNavigation();

  const goToAddCity = () => navigation.navigate(ROUTS_NAMES.ADD_CITY);

  return (
    <LinearGradient
      colors={["#2E335A", "#1C1B33"]}
      style={{
        height: 100,
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        overflow: "visible",
      }}
    >
      <Container>
        <TouchableOpacity>
          <Menu
            source={require("../../../assets/icons/map.png")}
            style={{ opacity: 0 }}
          />
        </TouchableOpacity>
        <PlusBtnContainer>
          <Plus_BG source={require("../../../assets/icons/bg_btn.png")} />
          <TouchableOpacity onPress={goToAddCity}>
            <Plus source={require("../../../assets/icons/plus.png")} />
          </TouchableOpacity>
        </PlusBtnContainer>
        <TouchableOpacity>
          <Menu source={require("../../../assets/icons/menu.png")} />
        </TouchableOpacity>
      </Container>
    </LinearGradient>
  );
}
