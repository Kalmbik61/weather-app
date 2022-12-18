import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, SafeAreaView, Text } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import GlobalProvider from "./GlobalProvider";
import Container from "./src/components/Container/Container";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTS_NAMES } from "./src/utils/routsNames";
import Home from "./src/components/screens/Home/Home";
import AddCity from "./src/components/screens/AddCity/AddCity";
import { css_variables } from "./src/styles/variables";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        const fonts = () =>
          Font.loadAsync({
            "mt-bold": require("./assets/fonts/MontserratAlternates-Bold.ttf"),
            "mt-light": require("./assets/fonts/MontserratAlternates-Light.ttf"),
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
        <ActivityIndicator
          size={"large"}
          color={css_variables.backgrounds.purple}
          style={{ top: 150 }}
        />
      </SafeAreaView>
    );
  }

  return (
    <GlobalProvider>
      <Stack.Navigator initialRouteName={ROUTS_NAMES.HOME}>
        <Stack.Screen
          options={{
            header(props) {
              return null;
            },
          }}
          name={ROUTS_NAMES.HOME}
          component={Home}
        />
        <Stack.Screen
          name={ROUTS_NAMES.ADD_CITY}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "400",
            },
            headerStyle: {
              backgroundColor: "#2E335A",
            },
          }}
          component={AddCity}
        />
      </Stack.Navigator>
      <StatusBar style='light' />
    </GlobalProvider>
  );
}
