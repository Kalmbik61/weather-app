import React from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import Footer from "../Footer/Footer";
import { IContainerProps } from "./Container.props";

const BackgroundWrapper = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

const MainContainer = styled.View`
  flex: 1;
`;

const Home_Pic = styled.Image`
  width: 100%;
  height: 50%;
  position: absolute;
  left: 0;
  bottom: 90px;
`;

export default function Container({ children, style }: IContainerProps) {
  return (
    <BackgroundWrapper
      style={{ flex: 1, justifyContent: "center" }}
      source={require("../../../assets/imgs/background.png")}
    >
      <MainContainer>
        <Home_Pic source={require("../../../assets/imgs/house.png")} />
        <SafeAreaView style={style}>{children}</SafeAreaView>

        <Footer />
      </MainContainer>
    </BackgroundWrapper>
  );
}
