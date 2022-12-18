import { createContext, ReactNode, useState } from "react";
import { ICity } from "../components/CityItem/CityItem.props";

interface IProviderValues {
  mainCity: ICity;
  savedCities: ICity[];

  setMainCity(c: ICity): void;
  setSavedCities(c: ICity[]): void;
}

const defaultCity = { name: "Rostov-na-Donu", id: "111" };

const defaultValue: IProviderValues = {
  mainCity: defaultCity,
  savedCities: [],
  setMainCity: () => null,
  setSavedCities: () => null,
};

export const ContextCity = createContext<IProviderValues>(defaultValue);

export default function CityContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mainCity, setMainCity] = useState<ICity>(defaultCity);
  const [savedCities, setSavedCities] = useState<ICity[]>([]);

  return (
    <ContextCity.Provider
      value={{ mainCity, savedCities, setSavedCities, setMainCity }}
    >
      {children}
    </ContextCity.Provider>
  );
}
