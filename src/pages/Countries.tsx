import axios from "axios";
import { useEffect, useState } from "react";
export default function Country() {
  const [countries, setCoutries] = useState([]);
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
      {countries.map((country) => (
        <p>{country.name}</p>
      ))}
    </div>
  );
}
