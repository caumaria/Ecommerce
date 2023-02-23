import React, { useReducer } from 'react'
import { BsCart3 } from 'react-icons/Bs';
import css from './Hero.module.scss'

export default function Product(props) {
  const { product, onAdd, onRemove } = props;

  return (
    <div className={`yPaddings ${css.wrapper}`}>

      <div className={`flexCenter ${css.itens}`}>

        <div className={`flexCenter ${css.btns}`}>
          <button onClick={() => onRemove(product)}>
            -
          </button>
          <div className={css.totalCart}>
            0
          </div>
          <button onClick={() => onAdd(product)}>
           +
          </button>
        </div>        

        <div className={css.btnAdd}>
          <button className={`flexCenter ${css.add}`}>
            <BsCart3 size={18} />
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  )
}

/* -----starting point-----
ok
ok 

const text = 'Fall Limited Edition Sneakers';

  <article className={css.cartPopUp}>
      <h4 className={css.titleCart}>Cart</h4>
      <div className={`flexCenter ${css.cartCheckout}`}>
        <img src={products.image} className={css.cartImg}/>

        <ul>
          <li>{text}</li>
          <li>${products.price} x 3 <span>$375.00</span></li>
        </ul>

        <button>
          🗑
        </button>
      </div>

      <button className={css.btnCheckout}>Checkout</button>
  </article>


  return (
    <div className={`yPaddings ${css.wrapper}`}>

      <div className={`flexCenter ${css.itens}`}>

        <div className={`flexCenter ${css.btns}`}>
          <button onClick={() => remove(product)}>
            -
          </button>
          <div className={css.totalCart}>
            {cart.length}
          </div>
          <button onClick={() => add(product)}>
           +
          </button>
        </div>        

        <div className={css.btnAdd}>
          <button className={`flexCenter ${css.add}`} onClick={() => setTotal}>
            <BsCart3 size={18} />
            <p>Add to cart</p>
          </button>
        </div>
        

      </div>
      
      <div>
          <div className="cart">
            <span role="cart">
              {product.imageUrl}
              <div className={css.textCart}>
                {product.name}
                {product.price} x {cart.length}= {total}
              </div>              
            </span>
          </div>
      </div> 
      
      <div>
        total: {product.price}*{cart.length}
      </div>
      <div>Total: {getTotal(cart)}</div>

    </div>
  
    
  ); 
}*/

