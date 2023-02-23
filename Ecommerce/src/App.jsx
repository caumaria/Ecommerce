import { useState } from 'React';
import './styles/App.module.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Product from './components/Hero/Product';
import data from './components/Hero/data';


function App() {
  const [cartItems, setCartItems] = useState([])
  const { products } = data;

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
      x.id === product.id? { ...exist, qty: exist.qty + 1} : x);

      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1}];
      setCartItems(newCartItems);
    }
  };

  const onRemove = (product) => {};

  return (
    <div className="App">      
      <Header 
        countCartItems={cartItems.length}
      />
      <Hero />
      <Product 
        onAdd={onAdd}
        onRemove={onRemove}
        products={products}
      />
      
    </div>
  )
}

export default App
