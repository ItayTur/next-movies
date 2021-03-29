import Movie from '../Movie/Movie';
import classes from './Movies.module.css';

const Movies = ({ movies, onOpenMovie }) => {
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
            <div className={classes.Movies}>
                {moviesToShow}
            </div>
        </div>
    );
};

export default Movies;