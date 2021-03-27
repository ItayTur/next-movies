import { FaStar } from 'react-icons/fa';

import classes from './Rating.module.css';

const Rating = ({ rating }) => {
    return (
        <div className={classes.Rating}>
            {rating && <FaStar className={classes.Icon} />}
            <span>{rating}</span>
        </div>
    );
};

export default Rating;