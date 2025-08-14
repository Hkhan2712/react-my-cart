import styles from "./FeaturedCard.module.css"

const FeaturedCard = ({ title, description, imageUrl, linkText, linkHref }) => (
    <div className="flex flex-col items-center text-center space-y-4">
        <h3 className={`${styles.title} py-5`}>{title}</h3>
        <img
            src={imageUrl}
            alt={title}
            className={ ` ${styles.imageWrapper}`}
        />
        <p className={`${styles.description} py-4`}>{description}</p>
        <a
            href={linkHref}
            className={styles.link}
        >
            {linkText}
        </a>
    </div>
)

export default FeaturedCard
