import React from "react";

const MovieCard = ({
  movie: {title,vote_average,poster_path,release_date,original_language,},}) =>
     {
  const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: "/no-movie.png";
  return (
    
    <div className="bg-black rounded-xl shadow-lg overflow-hidden">
  <img src={imageUrl} alt={title} className="w-full h-72 object-cover"/>
    <div className="p-4 text-white">
    <h3 className="text-lg font-semibold mb-2 ">{title}</h3>
     <div className="flex items-center text-sm text-gray-300 gap-2">
          <div className="flex items-center gap-1">
            <img src="/star.svg" alt="Rating" className="w-4 h-4" />
            <span>{vote_average ? vote_average.toFixed(1) : "N/A"}</span>
          </div>
          <span className="text-gray-500">•</span>
          <span className="uppercase">{original_language}</span>
          <span className="text-gray-500">•</span>
          <span>{release_date ? release_date.split("-")[0] : "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
