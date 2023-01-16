import React from "react";
import Product from "../Arquivos/Product";


export default function Main (props) {
    const {products, onAdd, query, minPrice, maxPrice, sortingParameter, order} = props;
    return (
    <main className="block-2 col-2">
        <h2>Meteoros</h2>
        <div className="row">
          {products
          .filter((product) => { return product.nome.includes(query) })
          .filter((product) => { return product.preco >= minPrice || minPrice === "" })
          .filter((product) => { return product.preco <= maxPrice || maxPrice === "" })
          .sort((currentProduct, nextProduct) => {
            switch(sortingParameter){
              case "preco":            
                return currentProduct.preco - nextProduct.preco
              default:
                return currentProduct.nome.localeCompare(nextProduct.nome)
            }
          })
          .sort(() => {
            if (order ==="asc"){
              return 0
            } else {
            return -1
            }
          })
          .map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>

          ))}
        </div>
    </main>
    );
}
