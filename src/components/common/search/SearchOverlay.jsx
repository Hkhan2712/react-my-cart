import { useEffect, useState } from 'react'
import styles from './SearchOverlay.module.css'
import { useUI } from '../../../contexts/UIContext'
import { CloseIcon, SearchIcon } from '@/components/icons'

const categories = [
    { title: "Women", image: "/images/women1.jpg" },
    { title: "Men", image: "/images/men1.jpg" },
    { title: "Accessories", image: "/images/product.jpg" },
    { title: "Sale", image: "/images/featured1.jpg" },
]

const SearchOverlay = ({ topOffset }) => {
    const { setIsSearchOpen } = useUI();
    const [isClosing, setIsClosing] = useState(false);
    const [keyword, setKeyword] = useState('');

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsSearchOpen(false)
        }, 300); 
    }

    const handleSearch = () => {

    }

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") {
                handleClose();
            }
        }
        console.log('request search esc');
        
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown)
    }, []);

    return (
        <div className={`${styles.overlay} ${isClosing ? styles.overlayClosing : ''}`} style={{ top: `${topOffset}px`}}>
            <div className='w-100 d-flex justify-content-center'>
                <div className={styles.header}>
                    <input
                        type="text"
                        placeholder="Search"
                        className={styles.searchInput}
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    {keyword.length > 0 ? (
                        <button 
                            className={styles.closeBtn} 
                            onClick={handleSearch}
                        >
                            <SearchIcon width='20'/>
                        </button>
                    ) : (
                        <button 
                            className={styles.closeBtn} 
                            onClick={handleClose}
                        >
                            <CloseIcon width='20'/>
                        </button>
                    )}
                </div>
            </div>
            <hr className='w-100'/>
            <div className={styles.categories}>
                {categories.map((cat, idx) => (
                    <div key={idx} className={styles.categoryCard}>
                        <img src={cat.image} alt={cat.title} />
                        <span>{cat.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchOverlay