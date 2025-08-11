import UserActions from './UserActions'
import styles from './style.module.css'

const menuItems = ["Women", "Men", "About", "Everworld Stories"];

const MainNav = ({ onMenuHover }) => {
    return (
        <nav
            className="main-nav container-fluid d-flex align-items-center justify-content-between position-relative border-bottom"
            style={{ minHeight: "4rem" }}
        >
        {/* Left - Menu */}
            <div className="d-flex flex-grow-1 justify-content-start ps-5">
                <ul className="nav">
                {menuItems.map((item, index) => (
                    <li
                    className="nav-item"
                    key={index}
                    onMouseEnter={() => onMenuHover(item)}
                    >
                    <a className={styles.navLink} href="#">
                        {item}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Center - Logo */}
            <div className="position-absolute start-50 translate-middle-x">
                <div className="logo fs-3 fw-bold">EVERLANE</div>
            </div>

            {/* Right - User Actions */}
            <div className="d-flex flex-grow-1 justify-content-end pe-5">
                <UserActions />
            </div>
        </nav>
    )
}

export default MainNav