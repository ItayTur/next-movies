import Rating from '../Rating/Rating';
import Button from '../UI/Button/Button';

import arrow from '../../../assets/movies-2/group-6194.svg';

import classes from './ExpandedMovie.module.css';

const ExpandedMovie = ({ title, image, synopsis, rating, runtime, type, onClose }) => {
    return (
        <div className={classes.ExpandedMovie}>
            <img className={classes.Image} src={image} alt={title} />
            <div className={classes.Info}>
                <div className={classes.Header}>
                    <div>
                        <h2 className={classes.Title}>{title}</h2>
                        <span>{runtime} | {type}</span>
                    </div>
                    <Rating rating={rating} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: synopsis }} />
                <Button className={classes.Back} onClick={onClose} ariaLabel="close">
                    <img src={arrow} alt="left arrow" />
                    <span>Back to list</span>
                </Button>
            </div>
        </div>
    );
};

export default ExpandedMovie;