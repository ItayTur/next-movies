import { useState, useEffect, useRef } from 'react';
import axios from '../../../moviesAxios';

import Movies from '../../presentationals/Movies/Movies';
import Modal from '../../presentationals/UI/Modal/Modal';
import ExpandedMovie from '../../presentationals/ExpandedMovie/ExpandedMovie';
import Button from '../../presentationals/UI/Button/Button';

import classes from './Home.module.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [stateSkip, setSkip] = useState(0);
  const [stateSearch, setSearch] = useState('');
  const [hasMoreMovies, setHasMoreMovies] = useState(true);
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
    setHasMoreMovies(moviesToReturn.length >= limit)
    return moviesToReturn;
  }

  const loadMovies = async () => {
    const moviesToSet = await getMovies();
    setMovies(prev => prev.concat(moviesToSet));
    setSkip(prev => prev + limit);
  }

  const closeMovie = () => setMovie(null);

  const openMovie = movie => setMovie(movie);

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
    <div className={classes.Home}>
      <h1 className={classes.Title}>EXPLORE YOUR NEXT MOVIES AND TV SHOWS</h1>
      <input className={classes.Search} placeholder="Search..." onChange={searchMovies} />
      <Movies movies={movies} onOpenMovie={openMovie} />
      {hasMoreMovies && <Button className={classes.ShowMore} onClick={loadMovies} ariaLabel="show more">Show More</Button>}
      <Modal isOpen={Boolean(movie)} onClose={closeMovie}>
        <ExpandedMovie {...movie} onClose={closeMovie} />
      </Modal>
    </div>
  );
}

export default Home;
