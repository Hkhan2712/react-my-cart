import { useEffect, useState } from "react";
import Card from "./Card";
import styles from './CardGrid.module.css'

const CardGrid = ({ title, apiEndpoint }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
        try {
            const mockData = [
            { id: 1, title: "Category 1", imageUrl: "public/images/default.jpg" },
            { id: 2, title: "Category 2", imageUrl: "public/images/default.jpg" },
            { id: 3, title: "Category 3", imageUrl: "public/images/default.jpg" },
            { id: 4, title: "Category 4", imageUrl: "public/images/default.jpg" },
            { id: 5, title: "Category 5", imageUrl: "public/images/default.jpg" },
            { id: 6, title: "Category 6", imageUrl: "public/images/default.jpg" },
            ];
            setCards(mockData);

            // const res = await fetch(apiEndpoint);
            // const data = await res.json();
            // setCards(data);
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
        };

        fetchData();
    }, [apiEndpoint]);

    return (
        <section className="px-2 my-5">
            <h2 className={`d-flex mb-4 justify-content-center ${styles.title}`}>{title}</h2>
            <div className="row g-3">
                {cards.map((card) => (
                <div key={card.id} className="col-6 col-md-4 col-lg-3">
                    <Card title={card.title} imageUrl={card.imageUrl} />
                </div>
                ))}
            </div>
        </section>
    );
};

export default CardGrid;
