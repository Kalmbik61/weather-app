import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { getWeather, IWeatherInCity } from "../../../service/getWeather";
import { css_variables } from "../../../styles/variables";
import { useCityContext } from "../../../utils/useCityContext";
import Container from "../../Container/Container";
import WeatherItem from "../../WeatherItem/WeatherItem";

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
  const { mainCity } = useCityContext();
  const [weather, setWeather] = useState<IWeatherInCity>();
  const [loading, setLoading] = useState<boolean>(true);

  const findWeather = async () => {
    const res = await getWeather(mainCity.name, setLoading);
    if (res instanceof Error) return;
    setWeather(res);
  };

  useEffect(() => {
    findWeather();
  }, [mainCity]);

  return (
    <Container>
      <SafeAreaView>
        {loading ? (
          <ActivityIndicator
            size='large'
            color={css_variables.backgrounds.light_purple}
            style={{ flex: 1, top: 150 }}
          />
        ) : (
          <>
            <City>{mainCity.name}</City>
            <Temp>{weather && Math.round(weather?.main.temp - 273.15)}°</Temp>
            <WeatherDescr>{weather?.weather[0].description}</WeatherDescr>

            {weather && (
              <DescrBlock>
                <WeatherItem
                  value={`${Math.round(weather.main.feels_like - 273.15)} °`}
                  name={"Feels like"}
                />
                <WeatherItem
                  value={`${weather.wind.speed} m/s`}
                  name={"Wind"}
                />
              </DescrBlock>
            )}
          </>
        )}
      </SafeAreaView>
    </Container>
  );
}
