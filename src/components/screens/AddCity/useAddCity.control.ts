import {
  NavigationProp,
  StackNavigationState,
  useNavigation,
} from "@react-navigation/native";
import { useState, useEffect } from "react";
import { countries } from "../../../../counries";
import { getAllSities } from "../../../service/getAllCities";
import { getWeather, IWeatherInCity } from "../../../service/getWeather";
import { ROUTS_NAMES } from "../../../utils/routsNames";
import { useCityContext } from "../../../utils/useCityContext";
import { ICity } from "../../CityItem/CityItem.props";
import { ICountry } from "../../CountryItem/CountryItem.props";

interface IAddCityControl {
  readonly citiesList?: any[];
  readonly countriesList?: ICountry[];
  readonly selectedCountry?: ICountry;
  readonly selectedCity?: ICity;
  readonly inputedCountry: string;
  readonly inputedCity: string;
  readonly loadWeather: boolean;
  readonly w?: IWeatherInCity;

  setInputedCountry(s: string): void;
  onSelectCountry(c: ICountry): void;
  onSelectCity(c: ICity): void;
  setInputedCity(s: string): void;
  onSaveCity(): void;
}

export const useAddCityControl = (): IAddCityControl => {
  const { setMainCity, setSavedCities } = useCityContext();
  const { goBack } = useNavigation();

  const [allCities, setAllCities] = useState<ICity[]>([]);
  const [citiesList, setCitiesList] = useState<ICity[]>([]);
  const [countriesList, setCountriesList] = useState<ICountry[]>(countries);
  const [selectedCountry, setSelectedCountry] = useState<ICountry>();
  const [selectedCity, setSelectedCity] = useState<ICity>();
  const [inputedCountry, setInputedCountry] = useState<string>("");
  const [inputedCity, setInputedCity] = useState<string>("");
  const [loadWeather, setLoadWeather] = useState<boolean>(false);
  const [w, setW] = useState<IWeatherInCity>();

  const onSelectCountry = (country: ICountry) => {
    setInputedCountry("");
    setSelectedCountry(country);
  };
  const onSelectCity = (city: ICity) => {
    setInputedCity("");
    setSelectedCity(city);
  };

  const onSaveCity = () => {
    if (!selectedCity) return;
    setMainCity(selectedCity);
    goBack();
  };

  useEffect(() => {
    const time = setTimeout(() => {
      const filteredCountries = countries.filter((item) =>
        item.name.includes(inputedCountry)
      );
      setCountriesList(filteredCountries);
    }, 300);

    return () => clearTimeout(time);
  }, [inputedCountry]);

  useEffect(() => {
    if (!selectedCountry) return;

    (async () => {
      const res = await getAllSities(selectedCountry.code);
      if (res instanceof Error) return;
      setAllCities(res);
    })();
  }, [selectedCountry]);

  useEffect(() => {
    if (!inputedCity.length) return;
    const time = setTimeout(() => {
      const filteredCities = allCities.filter((item) =>
        item.name.includes(inputedCity)
      );
      setCitiesList(filteredCities);
    }, 300);

    return () => clearTimeout(time);
  }, [inputedCity]);

  useEffect(() => {
    if (!selectedCity) return;

    (async () => {
      const res = await getWeather(selectedCity.name, setLoadWeather);
      if (res instanceof Error) return;
      setW(res);
    })();
  }, [selectedCity]);

  return {
    citiesList,
    countriesList,
    selectedCountry,
    selectedCity,
    inputedCountry,
    inputedCity,
    loadWeather,
    w,

    setInputedCountry,
    onSelectCountry,
    onSelectCity,
    setInputedCity,
    onSaveCity,
  };
};
