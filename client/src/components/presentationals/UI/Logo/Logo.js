import logo from '../../../../assets/movies-1/logo-2.jpg'
import classes from './Logo.module.css';

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt='next movies logo' />
        </div>
    );
};

export default Logo;