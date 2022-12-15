import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { API_KEY } from "../../../../config";
import { getWeather, IWeatherInCity } from "../../../service/getWeather";
import Container from "../../Container/Container";
import FeelsLike from "../../FeelsLike/FeelsLike";
import Wind from "../../Wind/Wind";

const Text = styled.Text`
  color: #fff;
`;

const City = styled(Text)`
  font-size: 30px;
  text-align: center;
  font-weight: 200;
  /* font-family: mt-light; */
`;

const Temp = styled(City)`
  top: 0;
  margin-top: 10px;
  font-size: 150px;
  font-weight: 200;
  /* font-family: initial; */
  line-height: 150px;
`;

const WeatherDescr = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
`;

const DescrBlock = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
`;

export default function Home() {
  const [city, setCity] = useState<string>("Rostov-on-Don");
  const [weather, setWeather] = useState<IWeatherInCity>();
  const [loading, setLoading] = useState<boolean>(true);

  const findWeather = async () => {
    const res = await getWeather(city, setLoading);
    console.log(res);
    if (res instanceof Error) return;
    setWeather(res);
  };

  useEffect(() => {
    findWeather();
  }, []);

  return (
    <Container>
      <SafeAreaView>
        <City>{city}</City>
        <Temp>{weather && Math.round(weather?.main.temp - 273.15)}°</Temp>
        <WeatherDescr>{weather?.weather[0].description}</WeatherDescr>

        <DescrBlock>
          <FeelsLike K={weather?.main.feels_like} />
          <Wind wind={weather?.wind.speed} />
        </DescrBlock>
      </SafeAreaView>
    </Container>
  );
}
