import { ICountry } from "../CountryItem/CountryItem.props";

export interface ICity {
  readonly id: string;
  readonly name: string;
}

export interface ICityItemProps extends ICity {
  onSelectCity(c: ICity): void;
}
