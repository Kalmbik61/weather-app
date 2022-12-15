import { Alert } from "react-native";
import { API_KEY } from "../../config";

export interface IWeatherInCity {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain?: {
    "1h": number;
    "3h": number;
  };
  snow: {
    "1h": number;
    "3h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
}

export const getWeather = async (
  city: string,
  onLoad: (s: boolean) => void
): Promise<IWeatherInCity | Error> => {
  try {
    onLoad(true);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    if (res.status === 200) {
      onLoad(false);
      return await res.json();
    }
    return Error("Wrong city");
  } catch (e: any) {
    console.log("ERROR = ", e);
    Alert.alert("ERROR weather, ", e.message);
    onLoad(false);
    return Error(e.message);
  }
};
