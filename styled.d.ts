import "styled-components";

import { IVariables } from "./src/styles/styled";

declare module "styled-components" {
  export interface DefaultTheme extends IVariables {}
}
