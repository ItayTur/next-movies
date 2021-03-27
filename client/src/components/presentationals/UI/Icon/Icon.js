import classes from './Icon.module.css';

const Icon = ({ image, imgAlt, link }) => {
    return (
        <a className={classes.Icon} href={link}>
            <img src={image} alt={imgAlt} />
        </a>
    );
};

export default Icon;