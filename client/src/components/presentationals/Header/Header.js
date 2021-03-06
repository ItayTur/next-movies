import Logo from '../UI/Logo/Logo';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.Header}>
            <Logo />
        </header>
    );
};

export default Header;