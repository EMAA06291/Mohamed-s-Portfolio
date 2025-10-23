import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function DarkMoodButton() {
  const [theme, setTheme] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full flex items-center transition-all duration-300
                 bg-blue-300 dark:bg-gray-700 p-1 border border-blue-700 dark:border-gray-600"
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 left-1 flex items-center justify-center 
                    w-6 h-6 rounded-full shadow-md transition-all duration-500
                    ${theme === "dark" ? "translate-x-6 bg-blue-400" : "translate-x-0 bg-yellow-400"}`}
      >
        <FontAwesomeIcon
          icon={theme === "light" ? faMoon :faSun }
          className={`text-white text-xs transition-transform duration-500 ${
            theme === "light" ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
    </button>
  );
}
