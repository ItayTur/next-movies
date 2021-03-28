import SocialIcons from '../SocialIcons/SocialIcons';

import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <h5 className={classes.Title}>CONTACT US</h5>
            <span>support@nextmovies.com</span>
            <span>Mon-Fri | 6:00am - 5:00pm PT</span>
            <SocialIcons />
        </footer>
    );
};

export default Footer;