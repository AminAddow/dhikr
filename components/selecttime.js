import { useState, useContext } from "react";
import { ThemeContext } from "../components/themecontext";

export default function SelectTime(props) {
  const enabled = props.state;
  const { theme, setTheme } = useContext(ThemeContext);

  const sun = (
    <svg
      className="w-8 h-8 md:w-10 md:h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      className="w-8 h-8 md:w-10 md:h-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  return (
    <div className="flex justify-center">
      <button
        aria-label="Select time"
        type="button"
        checked={enabled}
        onClick={() => props.onChange()}
        className={`bg-${theme}-secondary flex items-center h-16 w-64 md:h-24 md:w-96 rounded-full z-10 focus:ring focus:outline-none`}
      >
        <div className="w-full flex items-center">
          <div className="mx-auto z-30">
            <span>{sun}</span>
          </div>
          <div className="mx-auto z-30">
            <span>{moon}</span>
          </div>
        </div>

        <span
          className={`${
            enabled ? "translate-x-32 md:translate-x-48" : "translate-x-0"
          } absolute inline-block transform h-16 w-32 md:h-24 md:w-48 bg-${theme}-primary border-4 border-${theme}-secondary rounded-full z-20`}
        />
      </button>
    </div>
  );
}
