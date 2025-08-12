import axios from "axios";
import { useEffect, useState } from "react";
import type { TCountry } from "../../type";
import SearchBar from "../components/SearchBar";
export default function Country() {
  const [countries, setCoutries] = useState<TCountry[]>([]);
  const [regionSelector, setRegionSelector] = useState<string>("");
  console.log(countries.map((c) => c.region));
  const filteredCoutries = countries.filter((country) => {
    if (regionSelector === "") return true;
    return country?.region === regionSelector;
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
      <SearchBar setRegionSelector={setRegionSelector} />
      {filteredCoutries.map((country) => (
        <p>{country.name}</p>
      ))}
    </div>
  );
}
