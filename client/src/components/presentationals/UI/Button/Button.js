import classes from './Button.module.css';

const Button = ({ onClick, ariaLabel, children, className }) => {
    return (
        <button className={`${classes.Button} ${className}`} onClick={onClick} aria-label={ariaLabel}>
            {children}
        </button>
    );
};

export default Button;