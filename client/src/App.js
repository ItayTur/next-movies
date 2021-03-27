import { useState, useEffect } from 'react';
import axios from './moviesAxios';

import Header from './components/presentationals/Header/Header';
import Movies from './components/presentationals/Movies/Movies';
import Footer from './components/presentationals/Footer/Footer';

import classes from './App.module.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const asyncSetMovies = async () => {
      const { data: moviesToSet } = await axios.get('movies');
      setMovies(moviesToSet);
    }
    asyncSetMovies();
  }, [])

  return (
    <div className={classes.App}>
      <Header />
      <Movies title='EXPLORE YOUR NEXT MOVIES AND TV SHOWS' movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
