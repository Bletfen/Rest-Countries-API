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
      {filteredCoutries.map((country) => (
        <p>{country.name}</p>
      ))}
    </div>
  );
}
