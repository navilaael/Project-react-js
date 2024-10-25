import { useEffect, useState } from "react";
import BerandaView from "./BerandaView";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setNowPlaying, setPopuler, setTopRated, setUpComing } from "../../store/action/listAction";

const Beranda = () => {
  const dispatch = useDispatch();
  const Populer = useSelector((state) => state.film.Populer)
  const TopRated = useSelector((state)=>state.film.TopRated);
  const UpComing = useSelector((state)=>state.film.UpComing);
  const NowPlaying = useSelector((state)=>state.film.NowPlaying);
  const apiKey = "34411c20ab1bdb2899f390620d15edb3"; // Replace with your TMDB API Key

  const fetchPopuler = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular`,
        {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDQxMWMyMGFiMWJkYjI4OTlmMzkwNjIwZDE1ZWRiMyIsIm5iZiI6MTcyOTMxMjU2OC44NTM0NCwic3ViIjoiNjcwNDgxYjMyMjJlYWQxZWRhYmZmN2E1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qeZ2k7_EwxoLEWREfpMjbULXda6a8PoZueAd4qjPUnw'
          }
        }
      );

      console.log(response.data); //sudah pasti isinya array
      dispatch(setPopuler(response.data.results))
      // console.log(data);
    } catch (error) {
      console.error("Error fetching the movie data:", error);
    }
  };


  const fetchNowPlaying = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
      );

      console.log(response.data); //sudah pasti isinya array
      dispatch(setNowPlaying(response.data.results))
      // console.log(data);
    } catch (error) {
      console.error("Error fetching the movie data:", error);
    }
  };


  const fetchTopRated = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
      );

      console.log(response.data); //sudah pasti isinya array
     dispatch(setTopRated(response.data.results))
      // console.log(data);
    } catch (error) {
      console.error("Error fetching the movie data:", error);
    }
  };

  const fetchUpcoming = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
      );

      console.log(response.data); //sudah pasti isinya array
      dispatch(setUpComing(response.data.results))
      // console.log(data);
    } catch (error) {
      console.error("Error fetching the movie data:", error);
    }
  };

  
  useEffect(() => {
    fetchPopuler();
    fetchTopRated();
    fetchUpcoming();
    fetchNowPlaying();
  }, [apiKey]);

  return (
    <BerandaView
      upcoming={UpComing}
      topRated={TopRated}
      Populer={Populer}
      NowPlaying={NowPlaying}
    />
  );
};

export default Beranda;
