import styles from './Card.module.css'

const Card = ({name, imageUrl}) => 
    <div className="card h-100">
        <img src={imageUrl} className="cardImage" alt={name} />
        <div className="card-body text-center">
            <h6 className={`${styles.cardTitle}`}>{name}</h6>
        </div>
    </div>

export default Card;