import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import SearchOverlay from "./search/SearchOverlay"
import { useUI } from '@/contexts/UIContext'
import { useEffect, useRef, useState } from "react"

export const Layout = ({children}) => {
    const {isSearchOpen} = useUI()
    const headerRef = useRef(null)

    const [headerHeight, setHeaderHeight] = useState(0)

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.getBoundingClientRect().height)
        }
        
        const handleResize = () => {
            if (headerRef.current) 
                setHeaderHeight(headerRef.current.getBoundingClientRect().height)
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
         <div>
            <div ref={headerRef}>
                <Header/>
            </div>
            <main>{children}</main>
            <Footer/>
            {isSearchOpen && <SearchOverlay topOffset={headerHeight} />}
        </div>
    )
}