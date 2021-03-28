import { useState, useEffect, useRef } from 'react';
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
  const [stateSkip, setSkip] = useState(0);
  const [stateSearch, setSearch] = useState('');
  const searchRef = useRef();
  const limit = 12;

  useEffect(() => {
    loadMovies();
  }, [])

  const getMovies = async (search = stateSearch, skip = stateSkip) => {
    const { data: moviesToReturn } = await axios.get('movies', {
      params: {
        skip,
        limit,
        search,
      }
    });
    return moviesToReturn;
  }

  const loadMovies = async () => {
    const moviesToSet = await getMovies();
    setMovies(prev => prev.concat(moviesToSet));
    setSkip(prev => prev + limit);
  }

  const closeMovie = () => setMovie(null);

  const openMovie = (movie) => {
    setMovie(movie);
  }

  const searchMovies = async e => {
    const searchToSet = e.target.value;
    searchRef.current = searchToSet;
    const moviesToSet = await getMovies(searchToSet, 0);
    if (searchToSet === searchRef.current) {
      setMovies(moviesToSet);
      setSkip(limit);
      setSearch(searchToSet);
    }
  }

  return (
    <div className={classes.App}>
      <Header />
      <Movies
        title='EXPLORE YOUR NEXT MOVIES AND TV SHOWS'
        movies={movies}
        onOpenMovie={openMovie}
        onShowMore={loadMovies}
        onSearch={searchMovies}
      />
      <Footer />
      <Modal isOpen={Boolean(movie)} onClose={closeMovie}>
        <ExpandedMovie {...movie} onClose={closeMovie} />
      </Modal>
    </div>
  );
}

export default App;
