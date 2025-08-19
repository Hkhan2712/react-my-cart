import UserActions from './UserActions'
import styles from './style.module.css'

const menuItems = [
    {title:"Women", link: '#'}, 
    {title: "Men", link:'#'}, 
    {title:"About", link: '/about'}, 
    {title:"Everworld Stories", link: '/stories'}
]

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
                    onMouseEnter={() => onMenuHover(item.title)}
                    >
                    <a className={styles.navLink} href={item.link}>
                        {item.title}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Center - Logo */}
            <div className="position-absolute start-50 translate-middle-x">
                <a href="/" className="logo fs-3 fw-bold text-decoration-none text-dark">
                    EVERLANE
                </a>
            </div>

            {/* Right - User Actions */}
            <div className="d-flex flex-grow-1 justify-content-end pe-5">
                <UserActions />
            </div>
        </nav>
    )
}

export default MainNav