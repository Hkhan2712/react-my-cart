import React from 'react';
import UserActions from './UserActions';
import styles from './style.module.css';

const MainNav = () => {
    return (
        <nav className="main-nav container-fluid d-flex align-items-center justify-content-between position-relative border-bottom" style={{ minHeight: '4rem' }}>
            {/* Left - Menu */}
            <div className="d-flex flex-grow-1 justify-content-start ps-5">
                <ul className="nav">
                    {['Women', 'Men', 'About', 'Everworld Stories'].map((item, index) => (
                        <li className="nav-item" key={index}>
                            <a className="nav-link text-dark" href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Center - Logo */}
            <div className="position-absolute start-50 translate-middle-x">
                <div className={styles.logo}>EVERLANE</div>
            </div>

            {/* Right - User Actions */}
            <div className="d-flex flex-grow-1 justify-content-end pe-5">
                <UserActions />
            </div>
        </nav>
    );
};

export default MainNav;