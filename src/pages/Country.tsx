import { useNavigate, useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import type { TCountry } from "../../type";
import dataBase from "../../db.json";
import spinningEarth from "../../public/design/151.gif";
export default function Country() {
  const [country, setCountry] = useState<TCountry | null>(null);
  const [borderCountries, setBorderCountries] = useState<TCountry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { countryName } = useParams();
  const navigate = useNavigate();
  const localCountries = dataBase.countries as TCountry[];

  useEffect(() => {
    fetchData();
  }, [countryName]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/countries`);
      const data = response.data;
      const foundCountry = data.find(
        (country: TCountry) => country.name === countryName
      );
      setCountry(foundCountry);
      if (foundCountry && foundCountry.borders) {
        const borderCountriesData = data.filter((c: TCountry) =>
          foundCountry.borders.includes(c.alpha3Code)
        );
        setBorderCountries(borderCountriesData);
      } else {
        setBorderCountries([]);
      }
    } catch {
      const localFoundCountry = localCountries.find(
        (country) => country.name === countryName
      );
      setCountry(localFoundCountry ?? null);
      setBorderCountries(
        localFoundCountry?.borders
          ? localCountries.filter(
              (c) =>
                c.alpha3Code && localFoundCountry.borders.includes(c.alpha3Code)
            )
          : []
      );
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div
      className="px-[2.8rem] mt-[4rem]
      pb-[6rem] max-w-[144rem] xl:px-[8rem]
      xl:mx-auto"
    >
      <button
        className="flex items-center gap-[0.8rem]
        xl:gap-[1rem]
        bg-white shadow-[0_0px_7px_0_rgba(0,0,0,0.29)]
        pl-[2.4rem] pr-[2.3rem] py-[0.6rem]
        xl:pl-[3.2rem] pr-[3.9rem] py-[1rem]
        rounded-[0.6rem]
        cursor-pointer
        dark:bg-[#2b3b44] transition duration-300"
        onClick={goBack}
      >
        <svg
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-[#111517] dark:fill-white"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.81802 0.696699L6.87868 1.75736L3.3785 5.25754H16.7428L16.7428 6.74246H3.3785L6.87868 10.2426L5.81802 11.3033L0.514719 6L5.81802 0.696699Z"
          />
        </svg>
        <span
          className="
          text-[#111517] text-[1.4rem]
          font-[300] leading-[2rem]
          dark:text-white"
        >
          Back
        </span>
      </button>

      {loading ? (
        <div
          className="flex flex-col justify-center min-h-screen items-center
          gap-[1.6rem]"
        >
          <img src={spinningEarth} alt="Earth-GIF" />
          <p
            className="text-[2.4rem] font-[800]
            text-[#111517] dark:text-white"
          >
            Loading {countryName}
          </p>
        </div>
      ) : country ? (
        <div
          className="mt-[6.4rem] xl:mt-[8rem]
          xl:flex xl:gap-[12rem]"
        >
          <div className="max-w-[56rem]">
            <img
              src={country.flags.svg}
              alt={country.name + "flag"}
              className="rounded-[0.5rem]
              bg-[#808080] shadow-[0_0_8px_2px_rgba(0,0,0,0.3)]
              "
            ></img>
          </div>
          <div
            className="text-[111517]
            xl:max-w-[59.8rem] dark:text-white
            "
          >
            <h2
              className="text-[2.2rem] font-[800]
              xl:text-[3.2rem] mt-[4.4rem] mb-[1.6rem]
              xl:mt-[unset] xl:mb-[2.3rem]"
            >
              {country.name}
            </h2>
            <div
              className="text-[1.4rem] font-[600] leading-[3.2rem]
              xl:text-[1.6rem] xl:flex xl:justify-between
              xl:mb-[6.8rem]"
            >
              <div
                className="mb-[3.2rem]
                xl:mb-[unset] xl:mr-[14.1rem]"
              >
                <p>
                  Native Name:{" "}
                  <span className="font-[300]">{country.nativeName}</span>
                </p>
                <p>
                  Population:{" "}
                  <span className="font-[300]">
                    {country.population.toLocaleString()}
                  </span>
                </p>
                <p>
                  Region: <span className="font-[300]">{country.region}</span>
                </p>
                <p>
                  Sub Region:{" "}
                  <span className="font-[300]">{country.subregion}</span>
                </p>
                <p>
                  Capital: <span className="font-[300]">{country.capital}</span>
                </p>
              </div>
              <div
                className="mb-[3.2rem]
                xl:mb-[unset]"
              >
                <p>
                  Top Level Domain:{" "}
                  <span className="font-[300]">{country.topLevelDomain}</span>
                </p>
                <p>
                  Currencies:{" "}
                  {country.currencies?.map((currency, index) => (
                    <span key={currency.code} className="font-[300]">
                      {currency.name} ({currency.symbol})
                      {index < country.currencies.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p>
                  Languages:{" "}
                  {country.languages?.map((language, index) => (
                    <span key={language.iso639_1} className="font-[300]">
                      {language.name}
                      {index < country.languages.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div
              className="flex flex-col gap-[3.4rem] xl:flex-row
              xl:gap-[1.6] xl:max-w-full"
            >
              <h3
                className="text-[1.6rem] font-[600] leading-[2.4rem]
                text-[#111517] shrink-0 dark:text-white"
              >
                Border Countries:
              </h3>
              {borderCountries.length > 0 && (
                <div
                  className="flex gap-[1rem] flex-wrap
                  "
                >
                  {borderCountries.map((borderCountry) => (
                    <Link
                      to={`/${borderCountry.name}`}
                      key={borderCountry.alpha3Code}
                      className="px-[1.5rem] py-[0.6rem]
                      rounded-[0.5rem]
                      bg-white shadow-[0_0_4px_1px_rgba(0,0,0,0.10)]
                      text-[1.2rem] font-[300] text-[#111517]
                      xl:text-[1.4rem] dark:text-white
                      dark:bg-[#2b3b44] transition duration-300"
                    >
                      {borderCountry.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
