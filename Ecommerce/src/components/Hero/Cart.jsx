import React from 'react'

const Cart = () => {
    {/*
    - + logic
    cart
    hamburguer
    */}
  return (
    <div className="quanity-group">
      <Button negative className="quan-buttons">
        <Icon name="minus" />
      </Button>
      <Input className="input-quanity" value={props.item.quantity} />
      <Button positive className="quan-buttons">
        <Icon name="plus" />
      </Button>

      <div>
        <button onClick={() => handleChange(item, 1)}>+</button>
        <button>{item.amount}</button>
        <button onClick={() => handleChange(item, -1)}>-</button>
      </div>
    </div>
  );
}

export default Cart
