import classes from './Movie.module.css';

const Movie = ({ title, image, rating, released }) => {
    return (
        <div className={classes.Movie}>
            <img src={image} alt={title} />
            <div>{released}</div>
            <div>{rating}</div>
        </div>
    );
};

export default Movie;