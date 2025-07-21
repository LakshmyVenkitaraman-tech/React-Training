import { useEffect, useState } from 'react';
import Search from './Components/Search.jsx';
import MovieCard from './MovieCard.jsx';
import { useDebounce } from 'react-use';

const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState('');

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchTrending = async () => {
    try {
      const res = await fetch('https://api.themoviedb.org/3/trending/movie/day', API_OPTIONS);
      const data = await res.json();
      if (res.ok) {
        setTrending(data.results || []);
      } else {
        throw new Error(data.status_message || 'Failed to fetch');
      }
    } catch (err) {
      console.error('Error fetching trending:', err);
      setError('Failed to load trending movies');
    }
  };

  const fetchSearchResults = async (query) => {
    if (!query) {
      setMovies([]);
      return;
    }
    try {
    const res = await fetch( `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`,API_OPTIONS);
      const data = await res.json();
      if (res.ok) {
        setMovies(data.results || []);
      } else {
        throw new Error(data.status_message || 'Search failed');
      }
    } catch (err) {
      console.error('Error searching movies:', err);
      setError('Failed to search movies');
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  useEffect(() => {
    fetchSearchResults(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-900 via-red-900 to-black text-white">
      <div className="wrapper px-4 py-8 max-w-screen-xl mx-auto">
      <header className="text-center mb-10">
      <img src="/hero.png" alt="Hero Banner" className="mx-auto mb-6 w-80 sm:w-96 md:w-[30rem] lg:w-[34rem] xl:w-[38rem] drop-shadow-2xl rounded-xl"/>
      <h1 className="text-4xl font-bold mb-4">Find{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
      Movies</span>{' '}You'll Enjoy Without the Hassle </h1>
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </header>
    {trending.length > 0 && !searchTerm && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Trending Movies</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {trending.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {searchTerm ? 'Search Results' : 'All Movies'}
          </h2>
          {error && <p className="text-red-400 mb-4">{error}</p>}
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {(searchTerm ? movies : trending).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default App;
