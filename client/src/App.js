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
  const [skip, setSkip] = useState(0);
  const limit = 14;

  useEffect(() => {
    loadMovies();
  }, [])

  const loadMovies = async () => {
    const { data: moviesToSet } = await axios.get('movies', {
      params: {
        skip,
        limit,
      }
    });
    setMovies(prev => prev.concat(moviesToSet));
    setSkip(prev => prev + limit);
  }

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
        onShowMore={loadMovies}
      />
      <Footer />
      <Modal isOpen={Boolean(movie)} onClose={closeMovie}>
        <ExpandedMovie {...movie} onClose={closeMovie} />
      </Modal>
    </div>
  );
}

export default App;
