import React from 'react';
import styles from './style.module.css';

const items = [
    "Holiday Gifting", "New Arrivals", "Best-Sellers", "Clothing",
    "Tops & Sweaters", "Pants & Jeans", "Outerwear",
    "Shoes & Bags", "Sale"
];

const SubNav = () => {
    return (
        <ul className={`container d-flex justify-content-between ${styles.subNav}`}>
            {items.map((item, index) => (
                <li key={index}>
                    <a href="#" className={item === 'Sale' ? styles.active : ''}>
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default SubNav;
