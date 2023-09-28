import React, { useState } from 'react';
import './search.css'
function NetflixClone() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = 'YOUR_TMDB_API_KEY';

  const handleSearch = async () => {
    try {
      // Make an API request to TMDb to search for movies using the searchTerm
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  return (
    <div>
      <nav className='navbar1'>
      <div>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button1 onClick={handleSearch}>Search</button1>
      </div>
      </nav>
      <div className="search-results">
        {searchResults.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NetflixClone;
