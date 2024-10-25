import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { Populer } from "../store/action/listAction";

const Detail = () => {
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();
  const TopRated = useSelector((state)=>state.film.TopRated);
  const Populer =useSelector((state)=>state.film.Popule);
  const apiKey = "34411c20ab1bdb2899f390620d15edb3"; // Masukkan API Key TMDB-mu di sini

  const Favorite = async (id) => {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/account/21559322/favorite`,
        { media_type: "movie", media_id: id, favorite: true },
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDQxMWMyMGFiMWJkYjI4OTlmMzkwNjIwZDE1ZWRiMyIsIm5iZiI6MTcyOTMxMjU2OC44NTM0NCwic3ViIjoiNjcwNDgxYjMyMjJlYWQxZWRhYmZmN2E1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qeZ2k7_EwxoLEWREfpMjbULXda6a8PoZueAd4qjPUnw",
          },
        }
      );
      if (response.data.status_code === 1) {
        alert(`berhasil ditambahkan ke favorite`);
      }
    } catch (error) {
      console.error("Error fetching the movie details:", error);
    }
  };

  const Rating = async (id, rating) => {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/movie/${id}/rating`,
        { value: rating },
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDQxMWMyMGFiMWJkYjI4OTlmMzkwNjIwZDE1ZWRiMyIsIm5iZiI6MTcyOTMxMjU2OC44NTM0NCwic3ViIjoiNjcwNDgxYjMyMjJlYWQxZWRhYmZmN2E1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qeZ2k7_EwxoLEWREfpMjbULXda6a8PoZueAd4qjPUnw'
          }
        }
      ); 
      if (response.data.status_code === 1) {
        alert(`berhasil ditambahkan ke rating`);
      }
    } catch (error) {
      console.error("Error fetching the movie details:", error);
    }
  };

  useEffect(() => {
    // Fetch Movie Details from TMDB
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        setMovieData(response.data);
      } catch (error) {
        console.error("Error fetching the movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id, apiKey]);

  // Fungsi untuk mengubah rating
  const handleRating = (newRating) => {
    setRating(newRating);
    alert(`Kamu memberikan rating: ${newRating}`);
  };


  // Fungsi untuk menandai film sebagai favorit
  const handleFavorite = () => {
    setFavorite((prevFavorite) => !prevFavorite);
    alert(
      Favorite ? "Film dihapus dari favorit" : "Film ditambahkan ke favorit"
    );
  };

  if (!movieData) return <div>Loading...</div>;

  

  return (
    <div className="bg-slate-100 dark:bg-slate-900  min-h-screen flex-col items-center just py-10">
      <div className="max-w-4xl w-full p-5 bg-slate-200 dark:bg-slate-700 dark:text-white rounded-lg shadow-lg mx-auto text-center">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          {/* Poster Image with Link */}
          <div className="w-full md:w-1/3">
            <a
              href={`https://www.themoviedb.org/movie/${movieData.id}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                alt={movieData.title}
                className="w-full h-auto rounded-lg"
              />
            </a>
          </div>

          {/* Movie Info */}
          <div className="w-full md:w-2/3 space-y-3">
            <div className="flex justify-between items-start">
              <h2 className="text-4xl font-bold">
                {movieData.title} ({movieData.release_date.substring(0, 4)})
              </h2>
              <span className="bg-green-500 px-3 py-1 rounded-lg text-sm font-bold">
                {Math.round(movieData.vote_average * 10)}% Skor Pengguna
              </span>
            </div>
            <p className="text-sm  dark:text-gray-400">
              {movieData.genres.map((genre) => genre.name).join(", ")}
            </p>

            {/* Description */}
            <p className="dark:text-gray-300  italic">{movieData.tagline}</p>

            {/* Synopsis */}
            <div>
              <h3 className="text-lg font-semibold">Kilasan Singkat</h3>
              <p className="dark:text-gray-400">{movieData.overview}</p>
            </div>

            {/* Streaming Button with Link */}
            <a
              href={`https://www.themoviedb.org/movie/${movieData.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-3">
                Now Streaming - Watch Now
              </button>
            </a>

            {/* Tombol Rating */}
            <div className="mt-5">
              <h3 className="text-lg font-semibold">Beri Rating:</h3>
              {[1, 2, 3, 4, 5].map((rate) => (
                <button
                  key={rate}
                  value={rate}
                  onClick={() => Rating(movieData.id, rate)}
                  className={`px-3 py-1 mx-1 rounded-lg 
                  bg-yellow-500
                  `}
                >
                  {rate} ⭐
                </button>
              ))}
            </div>

            {/* Tombol Favorit */}
            <div className="mt-3">
              <button
                onClick={() => Favorite(movieData.id)}
                className={`px-4 py-2 rounded-lg 
                  bg-red-500 
                `}
              >Tambah favorite
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-bold text-3xl p-4 dark:text-white"></h2>
        <div className="Card flex w-full overflow-x-auto">
          {TopRated?.map((item, index) => (
             <Link to={"/Detail/" + item.id} key={index}>
              <Card
                title={item.title}
                releaseDate={item.release_date}
                rating={item.vote_average}
                image={"https://image.tmdb.org/t/p/original" + item.poster_path}
              />
            </Link>
          ))}

<h2 className="font-bold text-3xl p-4 dark:text-white"></h2>
        <div className="Card flex w-full overflow-x-auto">
          {Populer?.map((item, index) => (
             <Link to={"/Detail/" + item.id} key={index}>
              <Card
                title={item.title}
                releaseDate={item.release_date}
                rating={item.vote_average}
                image={"https://image.tmdb.org/t/p/original" + item.poster_path}
              />
            </Link>
          ))}
          </div>
        </div>
    </div>
  );
};

export default Detail;
