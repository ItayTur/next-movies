import Icon from '../UI/Icon/Icon';

import facebook from '../../../assets/movies-1/facebook.svg';
import linkedin from '../../../assets/movies-1/linkedin.svg';
import twitter from '../../../assets/movies-1/twitter.svg';
import instagram from '../../../assets/movies-1/instagram.svg';
import youtube from '../../../assets/movies-1/youtube.svg';

import classes from './SocialIcons.module.css';

const SocialIcons = () => {
    return (
        <div className={classes.SocialIcons}>
            <Icon image={facebook} imgAlt={'facebook'} link={'https://www.facebook.com/'} />
            <Icon image={linkedin} imgAlt={'linkedin'} link={'https://www.linkedin.com/'} />
            <Icon image={twitter} imgAlt={'twitter'} link={'https://www.twitter.com/'} />
            <Icon image={instagram} imgAlt={'instagram'} link={'https://www.instagram.com/'} />
            <Icon image={youtube} imgAlt={'youtube'} link={'https://www.youtube.com/'} />
        </div>
    );
};

export default SocialIcons;