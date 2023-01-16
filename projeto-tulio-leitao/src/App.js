import Filter from "./componentes/Filter/Filter";
import Basket from './componentes/Header/Basket';
import Header from './componentes/Header/Header';
import Main from './componentes/Header/Main';
import data from './componentes/Arquivos/Data';
import { useState } from 'react';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x));
    } else {
      setCartItems([...cartItems, {...product, qty: 1} ])
    }
  }
  const onRemove =( product) => {
    const exist = cartItems.find((x) => x.id === product.id );
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id ));
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty -1} : x));
    }
  }
  const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [sortingParameter, setSortingParameter] = useState("nome")
  const [order, setOrder]= useState("asc")

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>     
      <Filter 
      query={query} 
      setQuery={setQuery}
      minPrice={minPrice}
      setMinPrice={setMinPrice}
      maxPrice={maxPrice}
      setMaxPrice={setMaxPrice}
      sortingParameter={sortingParameter} 
      setSortingParameter={setSortingParameter}
      order={order}
      setOrder={setOrder}
      >

      </Filter>
    <div className="row">        


      <Main 
      onAdd={onAdd}
      products={products} 
      query={query}      
      minPrice={minPrice} 
      maxPrice={maxPrice}
      sortingParameter={sortingParameter}
      order={order}
      >
      </Main>
      
      <Basket 
        onAdd={onAdd}
        onRemove={onRemove}
        cartItems={cartItems}>
      </Basket>      
    </div>
    </div>
  );
}

export default App;
