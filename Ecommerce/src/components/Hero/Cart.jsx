import Product from "./Product";
import React from "react";

export default function Cart(props) {
    const { cartItems, products, onAdd, onRemove } = props;
    return (
        <div className="row">
            {products.map((product) =>
                <Product 
                    key={product.id}
                    product={product}
                    item={cartItems.find((x) => x.id === product.id)}
                    onAdd={onAdd}
                    onRemove={onRemove}
                />    
            )}
        </div>
    )
}