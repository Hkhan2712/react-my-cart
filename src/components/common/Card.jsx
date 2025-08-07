
const Cart = ({title, imageUrl}) => {
    return (
        <div className="card h-100 border-0">
            <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body text-center">
                <h6 className="card-title">{title}</h6>
            </div>
        </div>
    )
}

export default Cart;