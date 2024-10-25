import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [getTheme, setTheme] = useContext(ThemeContext);
  const root = window.document.documentElement;

  const theme = useSelector((state) => state.theme.theme);
  const dispatchRedux = useDispatch();

  const handleTheme = () => {
    if (getTheme === "light") {
      setTheme("dark");
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      setTheme("light");
      root.classList.remove("light");
      root.classList.add("dark");
    }
  };

  return (
    <div className="navbar bg-base-100 bg-slate-200 dark:bg-slate-900 sticky top-0 z-[99]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle dark:text-white">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 9l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 22V12h6v10"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="navbar-center flex justify-center items-center">
        <a className="btn btn-ghost text-xl dark:text-white">FILM LUANG</a>
      </div>

      <div className="navbar-end dark:text-white">
        <Link to="/Search">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </Link>

        <Link to="/Profil">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8zm0-10c2.485 0 4.5 2.015 4.5 4.5S14.485 9 12 9s-4.5-2.015-4.5-4.5S9.515 4 12 4z"
                />
              </svg>
            </div>
          </button>
        </Link>

        <div className="relative">
          <select
            onChange={handleTheme}
            value={getTheme}
            className="bg-white dark:bg-slate-700 dark:text-white border border-gray-600 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <button>Tema</button>
            <option value="light">Gelap</option>
            <option value="dark">Terang</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
