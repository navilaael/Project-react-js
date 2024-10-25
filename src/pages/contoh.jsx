import React, { useState } from "react";

// Data Dummy Film
const dummyMovies = [
  {
    id: 1,
    title: "The Wild Robot",
    dateRated: "October 11, 2024",
    posterPath: "https://image.tmdb.org/t/p/w500/path_to_poster.jpg", // Ganti sesuai gambar poster sebenarnya
    rating: 86,
    userRating: 60,
    description: "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island...",
  },
];

const Profil = () => {
  const [userRatings] = useState(dummyMovies); // Ini bisa diganti dengan API untuk ambil data rating pengguna
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Bagian Header Profil */}
      <div className="bg-teal-600 p-5 flex justify-between items-center">
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

      {/* Bagian Rating Berdasarkan Tahun */}
      <div className="p-5">
        <h2 className="text-lg font-semibold">Rating Berdasarkan Tahun</h2>
        <div className="bg-gray-800 p-3 rounded-lg">
          {/* Grafik sederhana (Placeholder) */}
          <p className="text-gray-500">Grafik rating pengguna berdasarkan tahun (placeholder)</p>
        </div>
      </div>

      {/* Bagian Daftar Rating Film */}
      <div className="p-5">
        <h2 className="text-lg font-semibold mb-3">Rating saya</h2>
        <div className="space-y-4">
          {userRatings.map((movie) => (
            <div key={movie.id} className="flex bg-gray-800 p-4 rounded-lg shadow-md">
              {/* Poster Film */}
              <div className="w-1/6">
                <img
                  src={movie.posterPath}
                  alt={movie.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              {/* Detail Film */}
              <div className="ml-4 w-5/6">
                <h3 className="text-xl font-bold">{movie.title}</h3>
                <p className="text-sm text-gray-400">{movie.dateRated}</p>
                <p className="mt-2 text-sm text-gray-300">{movie.description}</p>
                <div className="mt-3 flex items-center space-x-2">
                  <span className="bg-green-500 text-sm px-3 py-1 rounded-lg">
                    {movie.rating}% Rating Film
                  </span>
                  <span className="bg-blue-500 text-sm px-3 py-1 rounded-lg">
                    {movie.userRating} Rating Anda
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profil;
