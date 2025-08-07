import { arrowRight as ArrowRight } from '../../icons';
import styles from './style.module.css';
const TopBar = () => {
    return (
        <div className={`d-flex justify-content-center align-items-center text-white ${styles.topBar}`}>
            Get early access on launches and offers
            <a href="#" className="py-2 ms-2 text-white d-inline-flex align-items-center gap-1">
                Sign Up For Texts <ArrowRight width="16" />
            </a>
        </div>
    );
};

export default TopBar;