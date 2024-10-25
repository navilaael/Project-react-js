import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";

const Search = () => {
  const [movies, setMovies] = useState();
  const [search, Setsearch] = useSearchParams();
  const cari = search.get("cari");
  const dispatch = useDispatch(); // Untuk mengirim action
  const apiKey = "34411c20ab1bdb2899f390620d15edb3";

  const searchMovie = (i) => {
    Setsearch({ cari: i });
  };

  const fetchSearchMovie = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${cari}&include_adult=true&language=en-US&api_key=${apiKey}`
      );
      setMovies(response.data.results);
    } catch (err) {
      console.error(err.message);
    }
  }, [cari]);

  useEffect(() => {
    if (cari !== null) {
      fetchSearchMovie();
    }
  }, [cari, fetchSearchMovie]);

  return (
    <div className="dark:bg-slate-900 min-h-screen">
      
      <label className="input input-bordered flex items-center gap-4">
        <input
          type="text"
          className="grow "
          placeholder="Search"
          onChange={(i) => searchMovie(i.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies?.map((item, index) => (
          <div key={index}>
            <Card
              title={item.title}
              releaseDate={item.release_date}
              rating={item.vote_average}
              image={"https://image.tmdb.org/t/p/original" + item.poster_path}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
