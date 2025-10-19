import React, { useEffect, useState } from "react";
import requests from "../../utils/requests";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(requests.netflixOriginals);
      const data = await res.json();
      const randomMovie =
        data.results[Math.floor(Math.random() * data.results.length)];
      setMovie(randomMovie);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="relative h-[450px] text-white flex flex-col justify-center p-8 md:p-16"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <p className="text-sm md:text-base mb-6 leading-relaxed max-w-md text-gray-200">
          {truncate(movie?.overview, 150)}
        </p>

        <div className="flex space-x-3">
          <button className="px-6 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition">
            ▶ Play
          </button>
          <button className="px-6 py-2 rounded-md bg-gray-700 bg-opacity-60 text-white font-semibold hover:bg-gray-600 transition">
            + My List
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </header>
  );
}

export default Banner;
