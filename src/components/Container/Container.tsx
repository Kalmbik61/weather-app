import React from "react";
import { SafeAreaView, View } from "react-native";
import styled from "styled-components/native";
import Footer from "../Footer/Footer";
import ImageBackground from "../ImageBackground/ImageBackground";
import { IContainerProps } from "./Container.props";

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

export default function Container({ children }: IContainerProps) {
  return (
    <MainContainer>
      <ImageBackground
        source={require("../../../assets/imgs/background.png")}
      />
      <Home_Pic source={require("../../../assets/imgs/house.png")} />
      <SafeAreaView>{children}</SafeAreaView>

      <Footer />
    </MainContainer>
  );
}
