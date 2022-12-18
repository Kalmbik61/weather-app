import { NavigationContainer } from "@react-navigation/native";
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import CityContextProvider from "./src/Context/ContextCity";
import { css_variables } from "./src/styles/variables";

interface IGlobalProviderProps {
  readonly children: ReactNode;
}

export default function GlobalProvider({ children }: IGlobalProviderProps) {
  return (
    <NavigationContainer>
      <CityContextProvider>
        <ThemeProvider theme={css_variables}>{children}</ThemeProvider>
      </CityContextProvider>
    </NavigationContainer>
  );
}
