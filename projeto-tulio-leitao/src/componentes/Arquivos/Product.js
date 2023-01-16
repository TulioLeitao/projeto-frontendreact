import React from 'react'

export default function Product(props) {
  const {product , onAdd} = props;
  return (
    <div>
      <img className='small' src={product.imagem} alt={product.nome}></img>
      <h3>{product.nome}</h3>
      <div>R${product.preco}</div>
      <div>
        <button onClick={()=>onAdd(product)}>Adicinar ao carrinho</button>
      </div>
    </div>
  )
}
