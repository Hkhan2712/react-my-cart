const ProductCard = ({ product }) => {

	return (
		<div className="product-card text-start">
			<img src={product.image} alt={product.title} className="mb-2"/>
			<div className="d-flex justify-content-between align-items-center">
				<h6 className="mb-0 text-truncate">{product.title}</h6>
				<span className="fw-semibold">${product.price}</span>
			</div>
			<div className="text-muted small mt-1">
				{product.tag}
			</div>
		</div>
	)
}

export default ProductCard