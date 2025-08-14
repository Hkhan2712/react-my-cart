import PromoCard from "./PromoCard";

const promoItems = [
    {
        title: "New Arrivals",
        imageUrl: "/images/promo1.jpg",
        buttonText: "Shop Now",
        link: "/new-arrivals",
    },
    {
        title: "Best Seller",
        imageUrl: "/images/promo2.jpg",
        buttonText: "Explore",
        link: "/best-sellers",
    },
    {
        title: "The Holiday Outfits",
        imageUrl: "/images/promo3.jpg",
        buttonText: "Discover",
        link: "/holiday-outfits",
    },
];

const PromoSection = () => {
    return (
        <section className="p-5">
            <div className="row g-4 justify-content-center">
                {promoItems.map((item, index) => (
                    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center" key={index}>
                        <PromoCard {...item} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PromoSection;
