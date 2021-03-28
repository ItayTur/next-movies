import Movie from '../Movie/Movie';
import Button from '../UI/Button/Button';
import classes from './Movies.module.css';

const Movies = ({ movies, title, onOpenMovie, onShowMore, onSearch, hasMoreMovies }) => {
    const moviesToShow = movies.map(movie =>
    (
        <Movie
            key={movie.id}
            onOpen={() => onOpenMovie({ ...movie, image: movie.largeimage })}
            {...movie}
        />
    ));

    return (
        <div className={classes.MoviesContainer}>
            <h1 className={classes.Title}>{title}</h1>
            <input className={classes.Search} placeholder="Search..." onChange={onSearch} />
            <div className={classes.Movies}>
                {moviesToShow}
            </div>
            {hasMoreMovies && <Button className={classes.ShowMore} onClick={onShowMore} ariaLabel="show more">Show More</Button>}
        </div>
    );
};

export default Movies;