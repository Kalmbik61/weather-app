import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import GlobalProvider from "./GlobalProvider";
import Container from "./src/components/Container/Container";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        const fonts = () =>
          Font.loadAsync({
            "mt-bold": require("./assets/fonts/MontserratAlternates-Bold.ttf"),
            "mt-ligth": require("./assets/fonts/MontserratAlternates-Light.ttf"),
            "mt-medium": require("./assets/fonts/MontserratAlternates-Medium.ttf"),
          });
        await fonts();
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return (
      <SafeAreaView onLayout={onLayoutRootView}>
        <Text>Loading👋...</Text>
      </SafeAreaView>
    );
  }

  return (
    <GlobalProvider>
      <Container>
        <View>
          <Text style={{ color: "#fff" }}>
            Open up App.tsx to start working on your app!
          </Text>
          <StatusBar style='auto' />
        </View>
      </Container>
    </GlobalProvider>
  );
}
