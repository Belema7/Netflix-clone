import React, { useEffect, useState } from "react";

function Row({ title, fetchUrl, isLarge = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(fetchUrl);
      const data = await res.json();
      setMovies(data.results || []);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-3 ml-2 md:ml-4">{title}</h2>

      <div className="flex overflow-x-scroll space-x-3 md:space-x-4 px-2 md:px-4 scrollbar-hide">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/${
              isLarge ? "w500" : "w300"
            }${isLarge ? movie.poster_path : movie.backdrop_path}`}
            alt={movie?.title || movie?.name}
            className={`rounded-lg transition-transform duration-300 hover:scale-105 hover:opacity-100 ${
              isLarge
                ? "max-h-[300px] md:max-h-[350px]"
                : "max-h-[150px] md:max-h-[180px] opacity-90"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
