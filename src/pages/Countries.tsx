import axios from "axios";
import { useEffect, useState } from "react";
import type { TCountry } from "../../type";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router";
import dataBase from "../../db.json";
export default function Country() {
  const [countries, setCoutries] = useState<TCountry[]>([]);
  const [regionSelector, setRegionSelector] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
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
    try {
      const response = await axios.get(baseUrl);
      setCoutries(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("there is no local json-server at this moment");
      setCoutries(dataBase.countries as TCountry[]);
    }
  };
  return (
    <>
      {loading ? (
        <div
          className="flex flex-col justify-center min-h-screen items-center
          gap-[1.6rem]"
        >
          <p className="text-[2.4rem] font-[800]">Loading Countries</p>
          <div
            className="w-12 h-12 border-2 
            border-black border-dashed 
            rounded-full animate-spin"
          ></div>
        </div>
      ) : (
        <div>
          <SearchBar
            setRegionSelector={setRegionSelector}
            setSearchInput={setSearchInput}
            searchInput={searchInput}
          />
          <div className="px-[5.5rem]">
            {filteredCoutries.map((country) => (
              <Link
                key={country.alpha3Code}
                to={country.name}
                className="block mt-[3.2rem]
                bg-white shadow-[0_7px_2px_0_rgba(0,0,0,0.03)]
                rounded-[0.5rem]"
              >
                <div>
                  <img
                    src={country.flags.svg}
                    alt="country-img"
                    className="rounded-t-[0.5rem]"
                  />
                  <div
                    className="mt-[2.4rem] pl-[2.4rem]
                    pb-[4.6rem] text-[#111517]"
                  >
                    <h1
                      className="text-[1.8rem] font-[800] leading-[2.6rem]
                      mb-[1.6rem]"
                    >
                      {country.name}
                    </h1>
                    <div
                      className="text-[1.4rem] font-[600] leading-[1.6rem]
                      flex flex-col gap-[0.8rem]"
                    >
                      <p>
                        Population:
                        <span className="font-[300]">
                          {" "}
                          {country.population.toLocaleString()}
                        </span>
                      </p>
                      <p>
                        Region:
                        <span className="font-[300]"> {country.region}</span>
                      </p>
                      <p>
                        Capital:
                        <span className="font-[300]"> {country.capital}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
