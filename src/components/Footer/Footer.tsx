import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #000;
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
  return (
    <Container>
      <TouchableOpacity>
        <Menu source={require("../../../assets/icons/menu.png")} />
      </TouchableOpacity>
      <PlusBtnContainer>
        <Plus_BG source={require("../../../assets/icons/bg_btn.png")} />
        <TouchableOpacity>
          <Plus source={require("../../../assets/icons/plus.png")} />
        </TouchableOpacity>
      </PlusBtnContainer>
      <TouchableOpacity>
        <Menu source={require("../../../assets/icons/menu.png")} />
      </TouchableOpacity>
    </Container>
  );
}
