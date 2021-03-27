import { useState, useEffect } from 'react';
import axios from './moviesAxios';

import Header from './components/presentationals/Header/Header';
import Movies from './components/presentationals/Movies/Movies';
import Footer from './components/presentationals/Footer/Footer';
import Modal from './components/presentationals/UI/Modal/Modal';
import ExpandedMovie from './components/presentationals/ExpandedMovie/ExpandedMovie';

import classes from './App.module.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const asyncSetMovies = async () => {
      const { data: moviesToSet } = await axios.get('movies');
      setMovies(moviesToSet.slice(0, 14));
    }
    asyncSetMovies();
  }, [])

  const closeMovie = () => setMovie(null);

  const openMovie = (movie) => {
    setMovie(movie);
  }

  return (
    <div className={classes.App}>
      <Header />
      <Movies
        title='EXPLORE YOUR NEXT MOVIES AND TV SHOWS'
        movies={movies}
        onOpenMovie={openMovie}
      />
      <Footer />
      <Modal isOpen={Boolean(movie)} onClose={closeMovie}>
        <ExpandedMovie {...movie} onClose={closeMovie} />
      </Modal>
    </div>
  );
}

export default App;
