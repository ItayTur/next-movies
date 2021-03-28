import Button from '../UI/Button/Button';
import Rating from '../Rating/Rating';

import arrow from '../../../assets/movies-1/group-6192.svg';

import classes from './Movie.module.css';

const Movie = ({ title, image, rating, released, onOpen }) => {
    return (
        <div className={classes.Movie}>
            <img className={classes.Image} src={image} alt={title} />
            <div className={classes.Title}>{title}({released})</div>
            <Rating rating={rating}/>
            <Button onClick={onOpen} ariaLabel="read more">
                <span>Read more</span>
                <img src={arrow} alt="read more" />
            </Button>
        </div>
    );
};

export default Movie;