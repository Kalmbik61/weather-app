import { useContext } from "react";
import { ContextCity } from "../Context/ContextCity";

export const useCityContext = () => {
  const context = useContext(ContextCity);
  return context;
};
