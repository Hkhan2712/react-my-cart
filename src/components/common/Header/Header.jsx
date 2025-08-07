import MainNav  from "./MainNav"
import SubNav from "./SubNav"
import TopBar from "./TopBar"
import './style.module.css'

export const Header = () => {
    return (
        <header>
            <TopBar/>
            <MainNav/>
            <SubNav/>
        </header>
    )
}