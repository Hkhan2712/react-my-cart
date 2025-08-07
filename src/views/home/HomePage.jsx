import CardGrid from "../../components/common/CardGrid";
import HeroSection from "../../components/home/HeroSection"

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <CardGrid title="Shop by Category" api="/api/categories"/>
        </div>
    )
}

export default HomePage;