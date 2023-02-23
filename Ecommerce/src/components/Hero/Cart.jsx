import Product from "./Product";

export default function Cart(props) {
    const {products, onAdd, onRemove} = props;
    return (
        <div className="row">
            {products.map((product) =>
                <Product 
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                    onRemove={onRemove}
                />    
            )}
        </div>
    )
}