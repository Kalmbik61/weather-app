import { Alert } from "react-native";
import { API_KEY_CITIES } from "../../config";
import { ICity } from "../components/CityItem/CityItem.props";

const headers = new Headers();
headers.append("X-CSCAPI-KEY", API_KEY_CITIES);

export const getAllSities = async (
  country: string
): Promise<ICity[] | Error> => {
  try {
    const res = await fetch(
      `https://api.countrystatecity.in/v1/countries/${country}/cities`,
      { method: "GET", headers, redirect: "follow" }
    );

    if (res.status === 200) {
      return await res.json();
    }
    return Error("!Error!");
  } catch (e: any) {
    console.log("ERROR = ", e);
    return e as Error;
    // Alert.alert(e);
  }
};
