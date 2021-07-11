import './App.css';
import MovieList from './Components/MovieList/MovieList';
import { useState } from 'react';
import Filter from './Components/Filter/Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'God Father',
      description: 'Italy mafia movie',
      image:
        'https://cdn.britannica.com/55/188355-050-D5E49258/Salvatore-Corsitto-The-Godfather-Marlon-Brando-Francis.jpg',
      posterUrl: 'https://www.imdb.com/title/tt0068646/',
      rating: '9/10',
    },
    {
      title: 'Fast and Furious',
      description: 'action movie',
      image:
        'https://i.pinimg.com/originals/b4/eb/a7/b4eba7a147337bf972acd26be4dd8299.jpg',
      posterUrl: 'https://www.imdb.com/title/tt0232500/',
      rating: '8/10',
    },
    {
      title: 'Tom & Jerry',
      description: 'Animated movie',
      image:
        'https://fr.web.img2.acsta.net/pictures/20/12/28/10/09/5991258.jpg',
      posterUrl: 'https://www.imdb.com/title/tt1361336/',
      rating: '5/10',
    },
  ]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filter, setFilter] = useState('');
  const handleClick = () => {
    var title = prompt('Movie title ?', '');
    var description = prompt('Movie description ?', '');
    var posterUrl = prompt('Movie url ?', '');
    var rating = prompt('Movie rating ?', '');
    const obj = { title, description, posterUrl, rating };
    var arr = [...movies];
    arr.push(obj);
    if (title && description && posterUrl && rating) {
      setMovies(arr);
      setFilteredMovies(arr);
    }
  };
  const searchClick = (e) => {
    e.preventDefault();
    setFilteredMovies(movies);
    if (filter !== '') {
      const arr = movies.filter(
        (movie) => movie.title === filter || movie.rating === filter,
      );
      if (arr !== []) setFilteredMovies(arr);
    }
  };
  const onChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className='App'>
      <Filter filter={filter} onChange={onChange} onClick={searchClick} />

      {filteredMovies == '' ? (
        <div>
          {' '}
          <MovieList movies={movies} />
          <button onClick={handleClick}> Add Movie</button>
        </div>
      ) : (
        <div>
          {' '}
          <MovieList movies={filteredMovies} />
          <button onClick={handleClick}> Add Movie</button>
        </div>
      )}
    </div>
  );
}

export default App;
