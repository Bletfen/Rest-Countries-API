import axios from "axios";
import { useEffect, useState } from "react";
import type { TCountry } from "../../type";
import SearchBar from "../components/SearchBar";
export default function Country() {
  const [countries, setCoutries] = useState<TCountry[]>([]);
  const [regionSelector, setRegionSelector] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const filteredCoutries = countries.filter((country) => {
    const regionMatches =
      regionSelector === "" || country.region === regionSelector;

    const searchMatches =
      searchInput === "" ||
      country.name.toLowerCase().includes(searchInput.toLowerCase());

    return regionMatches && searchMatches;
  });
  const baseUrl = "http://localhost:3000/countries";
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get(baseUrl);
    const data = response.data;
    setCoutries(data);
  };
  console.log(countries);
  return (
    <div>
      <SearchBar
        setRegionSelector={setRegionSelector}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      <div className="px-[5.5rem]">
        {filteredCoutries.map((country) => (
          <div
            className="mt-[3.2rem]
          bg-white shadow-[0_7px_2px_0_rgba(0,0,0,0.03)]
          rounded-[0.5rem]"
          >
            <div>
              <img src={country.flags.svg} alt="country-img" />
              <div
                className="mt-[2.4rem] pl-[2.4rem]
                pb-[4.6rem]"
              >
                <h1>{country.name}</h1>
                <p>
                  Population:<span> {country.population}</span>
                </p>
                <p>
                  Region:<span> {country.region}</span>
                </p>
                <p>
                  Capital:<span> {country.capital}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
