import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import type { TCountry } from "../../type";
export default function Country() {
  const [country, setCountry] = useState<TCountry | null>(null);
  const { countryName } = useParams();
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  useEffect(() => {
    fetchData();
  }, [countryName]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/countries`);
      const data = response.data;
      console.log(data);
      const foundCountry = data.find(
        (country: TCountry) => country.name === countryName
      );
      setCountry(foundCountry);
    } catch {
      console.log("country not found");
      setCountry(null);
    }
  };

  return (
    <div className="px-[2.8rem] mt-[4rem]">
      <button
        className="flex items-center gap-[0.8rem]
        xl:gap-[1rem]
        bg-white shadow-[0_0px_7px_0_rgba(0,0,0,0.29)]
        pl-[2.4rem] pr-[2.3rem] py-[0.6rem]
        xl:pl-[3.2rem] pr-[3.9rem] py-[1rem]
        rounded-[0.6rem]
        cursor-pointer"
        onClick={goHome}
      >
        <svg
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.81802 0.696699L6.87868 1.75736L3.3785 5.25754H16.7428L16.7428 6.74246H3.3785L6.87868 10.2426L5.81802 11.3033L0.514719 6L5.81802 0.696699Z"
            fill="#111517"
          />
        </svg>
        <span
          className="
          text-[#111517] text-[1.4rem]
          font-[300] leading-[2rem]"
        >
          Back
        </span>
      </button>

      {country ? <h2>{country.name}</h2> : null}
    </div>
  );
}
