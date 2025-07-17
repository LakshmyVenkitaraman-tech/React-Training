import React, { useState } from "react";
import Search from './Components/Search.jsx';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const trendingMovies = []; 

  return (
    
    <main className="min-h-screen bg-gradient-to-r from-indigo-900 via-red-900 to-black text-white font-sans">
      
 <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-10 z-0" />
 <header className="relative z-10 text-center p-6">
 <img src="/hero.png"  alt="Hero Banner" className="mx-auto mb-4 w-full max-w-lg object-contain drop-shadow-md"/>
 <h1 className="text-3xl font-bold sm:text-5xl tracking-tight">
  Find the <span className="bg-gradient-to-r from-purple-300 to-pink-500 bg-clip-text text-transparent">movies</span> you'll enjoy
 </h1>
</header>
 {trendingMovies.length > 0 && ( <section className="relative z-10 mt-12 px-6">
 <h2 className="text-2xl font-semibold mb-4">Trending Movies</h2>
 <ul className="flex flex-row overflow-x-auto gap-4">
 {trendingMovies.map((movie, index) => ( <li key={index} className="min-w-[200px] bg-gray-800 p-4 rounded-lg shadow-lg">
  <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover rounded"/>
  <p className="mt-2 font-semibold text-center">{movie.title}</p>
  </li>
        ))}
   </ul>
   </section>
      )}

      <div className="relative z-10 px-6 mt-10">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  );
};

export default App;


   
