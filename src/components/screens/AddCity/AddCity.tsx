import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { css_variables } from "../../../styles/variables";
import Container from "../../Container/Container";
import CountryItem from "../../CountryItem/CountryItem";
import { useAddCityControl } from "./useAddCity.control";
import CityItem from "../../CityItem/CityItem";
import WeatherItem from "../../WeatherItem/WeatherItem";

const InputWrapper = styled.View`
  flex-direction: row;
  padding: 10px;
`;

const SearchIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.dark_grey};
  font-weight: 400;
  font-size: 17px;
  margin-left: 10px;
`;

const Input = styled.TextInput`
  color: #fff;
`;

const SelectedWrapper = styled.Text`
  color: #fff;
  font-weight: 400;
  font-size: 25px;
  margin: 20px 0;
  font-style: italic;
`;

const SelectedCountry = styled.Text`
  color: ${({ theme }) => theme.backgrounds.light_purple};
  font-weight: 400;
  font-size: 25px;
  margin: 20px 0;
  font-style: italic;
`;

const InfoWrapper = styled.View`
  margin-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const SaveBtn = styled.TouchableOpacity``;

export default function AddCity() {
  const control = useAddCityControl();

  return (
    <Container style={styles.container}>
      <LinearGradient
        colors={css_variables.linear.primary}
        style={styles.gradientWrapper}
      >
        <InputWrapper>
          <SearchIcon source={require("../../../../assets/icons/search.png")} />
          <Input
            placeholder='Select your country'
            placeholderTextColor={css_variables.colors.dark_grey}
            value={control.inputedCountry}
            onChangeText={(text) => control.setInputedCountry(text)}
          />
        </InputWrapper>
      </LinearGradient>

      <SelectedWrapper>
        {control.selectedCountry ? (
          <>
            <Text>Country: </Text>
            <SelectedCountry>{control.selectedCountry.name}</SelectedCountry>
          </>
        ) : (
          "Select a country"
        )}
      </SelectedWrapper>
      <SelectedWrapper>
        {control.selectedCity && (
          <>
            <Text>City: </Text>
            <SelectedCountry>{control.selectedCity.name}</SelectedCountry>
          </>
        )}
      </SelectedWrapper>

      {control.inputedCountry.length >= 1 && (
        <LinearGradient
          colors={css_variables.linear.primary}
          style={{ maxHeight: "70%", borderRadius: 10, opacity: 0.8 }}
        >
          <FlatList
            style={styles.autoCompleteList}
            data={control.countriesList}
            renderItem={({ item }) => (
              <CountryItem
                {...item}
                onSelectCountry={control.onSelectCountry}
              />
            )}
          />
        </LinearGradient>
      )}

      {control.selectedCountry && (
        <LinearGradient
          colors={css_variables.linear.primary}
          style={styles.gradientWrapper}
        >
          <InputWrapper>
            <SearchIcon
              source={require("../../../../assets/icons/search.png")}
            />
            <Input
              placeholder='Select a city'
              placeholderTextColor={css_variables.colors.dark_grey}
              onChangeText={(text) => control.setInputedCity(text)}
              value={control.inputedCity}
            />
          </InputWrapper>
        </LinearGradient>
      )}

      {control.inputedCity.length >= 1 && (
        <LinearGradient
          colors={css_variables.linear.primary}
          style={{
            maxHeight: "50%",
            borderRadius: 10,
            opacity: 0.8,
            marginTop: 20,
          }}
        >
          <FlatList
            style={styles.autoCompleteList}
            data={control.citiesList}
            renderItem={({ item }) => (
              <CityItem {...item} onSelectCity={control.onSelectCity} />
            )}
          />
        </LinearGradient>
      )}

      {control.loadWeather ? (
        <ActivityIndicator
          color={"#fff"}
          style={{
            flex: 1,
          }}
        />
      ) : (
        control.w &&
        control.inputedCity.length === 0 && (
          <>
            <InfoWrapper>
              <WeatherItem
                name='Temperature'
                value={`${Math.round(control.w.main.temp - 273.15)} °`}
              />
              <WeatherItem
                name='Atmospheric pressure'
                value={`${control.w.main.pressure} hPa°`}
              />
              <WeatherItem
                name='Humidity'
                value={`${control.w.main.humidity} %`}
              />
              <WeatherItem name='Clouds' value={`${control.w.clouds.all} %`} />
            </InfoWrapper>
            <SaveBtn onPress={control.onSaveCity}>
              <LinearGradient
                colors={css_variables.linear.primary}
                style={styles.btn}
              >
                <Text style={{ textAlign: "center", color: "#fff" }}>
                  Save this city
                </Text>
              </LinearGradient>
            </SaveBtn>
          </>
        )
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  gradientWrapper: {
    borderRadius: 10,
    marginTop: 20,
  },
  autoCompleteList: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btn: {
    borderRadius: 8,
    padding: 10,
    marginTop: 50,
    width: "80%",
    left: "10%",
  },
});
7;
