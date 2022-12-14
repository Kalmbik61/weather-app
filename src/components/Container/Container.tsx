import React from "react";
import { SafeAreaView, View } from "react-native";
import styled from "styled-components/native";
import Footer from "../Footer/Footer";
import ImageBackground from "../ImageBackground/ImageBackground";
import { IContainerProps } from "./Container.props";

const MainContainer = styled.View`
  flex: 1;
`;

export default function Container({ children }: IContainerProps) {
  return (
    <MainContainer>
      <View>
        <ImageBackground
          source={require("../../../assets/imgs/background.png")}
        />
      </View>
      <SafeAreaView>{children}</SafeAreaView>

      <Footer />
    </MainContainer>
  );
}
