import { useEffect, useState } from "react";
import Card from "./Card";
import styles from './CardGrid.module.css';
import { cloudinaryUrl } from "../../utils/cloudinary";

const CardGrid = ({ title, apiEndpoint }) => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(apiEndpoint);
                const json = await res.json();
                setCards(json.data || []);
            } catch (error) {
                console.error("Error fetching cards:", error);
            }
        }
        fetchData()
    }, [apiEndpoint])

    return (
        <section className="px-5 my-5">
            <h2 className={`d-flex mb-4 justify-content-center ${styles.title}`}>{title}</h2>
            <div className="row g-3">
                {cards.map((card) => (
                    <div key={card.id} className="col-6 col-md-4 col-lg-2">
                        <Card 
                            name={card.name} 
                            imageUrl={cloudinaryUrl(card.thumbnail, 400, 500)} 
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CardGrid
