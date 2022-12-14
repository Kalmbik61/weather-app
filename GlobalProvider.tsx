import { NavigationContainer } from "@react-navigation/native";
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { css_variables } from "./src/styles/variables";

interface IGlobalProviderProps {
  readonly children: ReactNode;
}

export default function GlobalProvider({ children }: IGlobalProviderProps) {
  return (
    <NavigationContainer>
      <ThemeProvider theme={css_variables}>{children}</ThemeProvider>
    </NavigationContainer>
  );
}
