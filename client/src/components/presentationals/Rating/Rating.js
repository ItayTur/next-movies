import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import classes from './Rating.module.css';

const Rating = ({ rating }) => {
    return (
        <div className={classes.Rating}>
            {rating && <FontAwesomeIcon icon={faStar} className={classes.Icon} />}
            <span>{rating}</span>
        </div>
    );
};

export default Rating;