import Movie from '../Movie/Movie';
import classes from './Movies.module.css';

const Movies = ({ movies, title }) => {
    const moviesToShow = movies.map(movie => <Movie key={movie.id} {...movie} />)
    return (
        <div className={classes.MoviesContainer}>
            <h1 className={classes.Title}>{title}</h1>
            <div className={classes.Movies}>
                {moviesToShow}
            </div>
        </div>
    );
};

export default Movies;