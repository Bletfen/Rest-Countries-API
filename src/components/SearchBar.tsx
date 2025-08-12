import { useState } from "react";
export default function SearchBar({
  setRegionSelector,
  setSearchInput,
  searchInput,
}: {
  setRegionSelector: React.Dispatch<React.SetStateAction<string>>;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  searchInput: string;
}) {
  const [regions, setRegions] = useState<boolean>(false);
  const regionsArray = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  return (
    <div
      className="px-[1.6rem] mt-[2.4rem] flex flex-col gap-[4rem]
        "
    >
      <div
        className="flex gap-[2.6rem]
        bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.06)]
        py-[1.6rem] pl-[3.2rem] rounded-[0.5rem]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z"
            fill="#B2B2B2"
          />
        </svg>
        <input
          type="text"
          placeholder="Search for a country…"
          value={searchInput}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <div
          className="flex max-w-[20rem]
        justify-between bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.06)]
        py-[1.4rem] pl-[2.4rem] pr-[1.9rem]
        items-center rounded-[0.5rem] cursor-[pointer]"
          onClick={() => setRegions((prev) => !prev)}
        >
          <p>Filter by Region</p>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z"
              fill="black"
            />
          </svg>
        </div>
        {regions ? (
          <ul>
            {regionsArray.map((region) => (
              <li
                key={region}
                className="cursor-[pointer]"
                onClick={() => {
                  setRegionSelector(region);
                  setRegions(false);
                }}
              >
                {region}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
