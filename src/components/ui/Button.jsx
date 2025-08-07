import React from 'react';
import styles from './Button.module.css';
import clsx from 'clsx'; 

const Button = ({ children, variant = 'primary', rounded = false, ...props }) => {
    const buttonClasses = clsx(
        styles.btn,
        styles[variant],   
        rounded && styles.rounded
    );

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
