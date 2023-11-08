import React from "react";
import { getTheme, THEMES, toggleTheme } from "../utils/themeUtils";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function Theme() {
  const [theme, setTheme] = React.useState(getTheme());

  React.useEffect(() => {
    setTheme(getTheme());
  }, []);

  const changeTheme = () => {
    toggleTheme();
    setTheme(getTheme());
  };

  // this button should be fixed middle right
  return (
    <div className="z-50 fixed right-0 flex items-center h-screen pr-3 top-1/3">
      <button
        className={`m-auto p-2 rounded-full shadow-lg transform transition-transform duration-1000 ease-in-out 
                    ${
                      theme === THEMES.LIGHT
                        ? "bg-white hover:bg-gray-200"
                        : "bg-gray-600 hover:bg-gray-400"
                    }`}
        onClick={changeTheme}
      >
        {theme === THEMES.LIGHT ? (
          <BsFillSunFill className="text-yellow-300" />
        ) : (
          <BsMoonStarsFill className="text-blue-200" />
        )}
      </button>
    </div>
  );
}
