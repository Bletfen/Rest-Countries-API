import axios from "axios";
import { useEffect, useState } from "react";
import type { TCountry } from "../../type";
import SearchBar from "../components/SearchBar";
export default function Country() {
  const [countries, setCoutries] = useState<TCountry[]>([]);
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
      <SearchBar />
      {countries.map((country) => (
        <p>{country?.name}</p>
      ))}
    </div>
  );
}
