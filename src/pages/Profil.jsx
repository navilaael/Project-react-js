import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const Profil = () => {
  const [userRatings, setUserRatings] = useState([]); // Data film yang sudah diberi rating
  const [favorites, setFavorites] = useState([]); // Data film favorit pengguna

  const fetchFavorites = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/account/21559322/favorite/movies",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDQxMWMyMGFiMWJkYjI4OTlmMzkwNjIwZDE1ZWRiMyIsIm5iZiI6MTcyOTMxMjU2OC44NTM0NCwic3ViIjoiNjcwNDgxYjMyMjJlYWQxZWRhYmZmN2E1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qeZ2k7_EwxoLEWREfpMjbULXda6a8PoZueAd4qjPUnw",
          },
        }
      );
      setFavorites(response.data.results);
    } catch (error) {
      console.error("Error fetching the movie details:", error);
    }
  }, []);

  const fetchRating = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/account/21559322/rated/movies",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDQxMWMyMGFiMWJkYjI4OTlmMzkwNjIwZDE1ZWRiMyIsIm5iZiI6MTcyOTMxMjU2OC44NTM0NCwic3ViIjoiNjcwNDgxYjMyMjJlYWQxZWRhYmZmN2E1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qeZ2k7_EwxoLEWREfpMjbULXda6a8PoZueAd4qjPUnw",
          },
        }
      );
      setUserRatings(response.data.results);
    } catch (error) {
      console.error("Error fetching the movie details:", error);
    }
  }, []);

  const DeleteRating = async (id) => {
    try {
      const response = await axios.delete(
        `https://api.themoviedb.org/3/movie/${id}/rating`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDQxMWMyMGFiMWJkYjI4OTlmMzkwNjIwZDE1ZWRiMyIsIm5iZiI6MTcyOTMxMjU2OC44NTM0NCwic3ViIjoiNjcwNDgxYjMyMjJlYWQxZWRhYmZmN2E1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qeZ2k7_EwxoLEWREfpMjbULXda6a8PoZueAd4qjPUnw",
          },
        }
      );
      if (response.data.status_code === 13) {
        setUserRatings(userRatings.filter(item => item.id !== id))
      }
    } catch (error) {
      console.error("Error fetching the movie details:", error);
    }
  };

  useEffect(() => {
    fetchRating();
    fetchFavorites();
  }, [fetchFavorites, fetchRating]);

  return (
    <div className="min-h-screen bg-slate-200 dark:bg-gray-900 dark:text-white">
      {/* Bagian Header Profil */}
      <div className="dark:bg-slate-700 bg-slate-300 p-5 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl">
            N
          </div>
          <div>
            <h1 className="text-2xl font-bold">navilaael</h1>
            <p className="text-sm">Anggota sejak Oktober 2024</p>
          </div>
        </div>
        <div className="flex space-x-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">60%</span>
            <p className="text-sm">Rata-rata Penilaian Film</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">0%</span>
            <p className="text-sm">Rata-rata Penilaian TV</p>
          </div>
        </div>
      </div>

      {/* Bagian Daftar Rating Film */}
      <div className="p-3">
        <h1 className="text-lg font-semibold mb-2">Rating saya</h1>
        <div className="grid grid-cols-4 gap-4">
          {userRatings.map((movie) => (
            <div
              key={movie.id}
              className="bg-slate-300 dark:bg-gray-800 p-9 rounded-sm w-full flex flex-col"
            >
              {/* Poster Film */}
              <div className="w-full">
                <img
                  src={
                    "https://image.tmdb.org/t/p/original" + movie.poster_path
                  }
                  alt={movie.title}
                  className="w-64 rounded-lg"
                />
              </div>

              {/* Detail Film */}
              <div className="mt-4">
                <h3 className="text-xl font-bold">{movie.title}</h3>
                <p className="text-sm dark:text-gray-400">{movie.dateRated}</p>
                <p className="mt-2 text-sm dark:text-gray-300">
                  {movie.description}
                </p>
              </div>

              <div className="mt-3 flex items-center space-x-2">
                <span className="bg-green-500 text-sm px-3 py-1 rounded-lg">
                  {movie.rating}% Rating Film
                </span>

                {/* Tombol Tambah/Hapus Favorit */}
                <button
                  className="ml-auto text-sm px-3 py-1 rounded-lg bg-red-500"
                  onClick={() => DeleteRating(movie?.id)}
                >
                  Delete rating
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bagian Daftar Film Favorit */}
      <div className="p-3">
        <h2 className="text-lg font-semibold mb-4">Film Favorit Saya</h2>
        <div className="grid grid-cols-4 gap-4 ">
          {favorites.length > 0 ? (
            favorites.map((movie) => (
              <div
                key={movie.id}
                
                className="bg-slate-300 dark:bg-gray-800 p-8 rounded-sm w-full flex flex-col"
              >
                {/* Poster Film */}
                <div className="w-full">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original" + movie.poster_path
                    }
                    alt={movie.title}
                    className="w-64 rounded-lg"
                  />
                </div>

                {/* Detail Film */}
                <div className="mt-4 flex-grow">
                  <h3 className="text-xl font-bold text-center">{movie.title}</h3>
                  <p className="text-sm dark:text-gray-400 text-center">{movie.release_date}</p> {/* Tahun rilis */}
                  <p className="mt-2 text-sm dark:text-gray-300">
                

                </p>
                </div>
              </div>
            ))
          ) : (
            <p className="dark:text-gray-400">
              Belum ada film favorit yang disimpan.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profil;
