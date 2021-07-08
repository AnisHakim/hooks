import './App.css';
import MovieList from './Components/MovieList';
import { useState } from 'react';
import Filter from './Components/Filter';


function App() {
  const [movies, setMovies] = useState([{
    title: "God Father",
    description: "Italy mafia movie",
    posterUrl: "https://www.imdb.com/title/tt0068646/",
    rating: "9/10"

  }, {
    title: "Fast and Furious",
    description: "action movie",
    posterUrl: "https://www.imdb.com/title/tt0232500/",
    rating: "8/10"
  }, {
    title: "Tom & Jerry",
    description: "Animated mmovie",
    posterUrl: "https://www.imdb.com/title/tt1361336/",
    rating: "5/10"
    }])
  
  const [filter, setFilter] = useState('');
  const handleClick = () => {
    var title = prompt('Movie title ?', '');
    var description = prompt('Movie description ?', '');
    var posterUrl = prompt('Movie url ?', '');
    var rating = prompt('Movie rating ?', '');
    const obj = { title, description, posterUrl, rating }
    var arr = [...movies];
    arr.push(obj)
    setMovies(arr);

  }
  const searchClick = () => {
    setMovies(movies.filter(movie => (movie.title === filter) || (movie.rating === filter)))
  }
  const onChange = (e) => {
    setFilter(e.target.value)
     
  }

  return (
    <div className="App">
   
     <Filter filter={filter} onChange={onChange} onClick={searchClick}/>
  
      {
          <div> <MovieList movies={movies} />
            <button onClick={handleClick}> Add Movie</button>
          </div>
      }

    </div>
  );
}

export default App;
