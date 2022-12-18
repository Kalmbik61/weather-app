export interface ICountry {
  readonly name: string;
  readonly code: string;
}

export interface ICountryItemProps extends ICountry {
  onSelectCountry(c: ICountry): void;
}
