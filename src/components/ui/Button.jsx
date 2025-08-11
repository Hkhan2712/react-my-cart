import React from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

const Button = ({
    children,
    variant = 'primary',
    rounded = false,
    href,
    className,
    ...props
}) => {
    const buttonClasses = clsx(
        styles.btn,
        styles[variant],
        rounded && styles.rounded,
        className
    );

    if (href) {
        return (
            <a href={href} className={`${buttonClasses} text-decoration-none`} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;