import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState<boolean>(false);
  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div
      className="bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.06)]
      py-[3rem] px-[1.6rem] transition duration-300
      dark:bg-[#2b3844]
      "
    >
      <div
        className="flex justify-between items-center
        max-w-[144rem] xl:mx-auto xl:px-[8rem]"
      >
        <p
          className="text-[1.4rem] font-[800]
          leading-[2rem] text-[#111517]
          xl:text-[2.4rem] dark:text-white"
        >
          Where in the world?
        </p>
        <div
          className="flex items-center gap-[0.8rem]
          cursor-[pointer]"
          onClick={() => {
            handleClick();
            setDark((prev) => !prev);
          }}
        >
          {!dark ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z"
                fill="white"
                stroke="#111517"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z"
                fill="white"
              />
            </svg>
          )}
          <p
            className="text-[1.2rem] font-[600]
            xl:text-[1.6rem] dark:text-white"
          >
            Dark Mode
          </p>
        </div>
      </div>
    </div>
  );
}
