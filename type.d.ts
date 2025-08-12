export type TCountry = {
  name: string;
  region: string;
  flags: {
    svg: string;
    png: string;
  };
  population: number;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  borders: string[];
  alpha3Code?: string;
};
