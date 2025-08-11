import styles from './Card.module.css'

const Card = ({title, imageUrl}) => {
    return (
        <div className="card h-100">
            <img src={imageUrl} className="cardImage" alt={title} />
            <div className="card-body text-center">
                <h6 className={`${styles.cardTitle}`}>{title}</h6>
            </div>
        </div>
    )
}

export default Card;