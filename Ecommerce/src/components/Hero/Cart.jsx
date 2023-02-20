import React, { useReducer } from 'react'
import { BsCart3 } from 'react-icons/Bs';
import css from './Hero.module.scss'

export default function Cart() {
  const text = "Autumn Limited Edition sneakers"

  return <>
    <article>
      <h2>Cart</h2>
      <div>
        <img src="image-product-1.jpg"/>
        <ul>
          <li>{text}</li>
          <li>$125.00 x 3 <span>$375.00</span></li>
        </ul>

        <button>
          🗑
        </button>
      </div>

      <button>Checkout</button>
    </article>
  </>
}

/* -----starting point-----
ok
ok 

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

const product = [
  {
    imageUrl: "/image-product-1.jpg",
    name: 'Fall Limited Edition Sneakers',
    price: 125.00
  },
];

function cartReducer(state, action) {
  switch(action.type) {
    case 'add':
      return [...state, action.product];
    case 'remove':
      const productIndex = state.findIndex(item => item.name === action.product.name);
      if(productIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex, 1)
      return update
    default:
      return state;
  }
}


export default function Product() {
  const [cart, setCart] = useReducer(cartReducer, []);
  const [total, setTotal] = useReducer(getTotal, 0);

  
  function add(product) {
    setCart({ product, type: 'add' });
    console.log(product)
  }

  function remove(product) {
    setCart({ product, type: 'remove' });
  } 

  function getTotal(cart) {
    const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
    return total.toLocaleString(undefined, currencyOptions)
  }


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

