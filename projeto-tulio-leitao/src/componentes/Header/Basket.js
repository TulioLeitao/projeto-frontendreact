import React from "react";

export default function Basket (props) {
   const {cartItems, onAdd, onRemove} = props;
   const itemPrices = cartItems.reduce((a, c) => a + c.preco * c.qty, 0);
   const frete = itemPrices > 5000 ? 0 : 127;
   const totalPrice = itemPrices + frete;
    return (
    <aside className="block-2 col-1">
        <h2>Carrinho espacial</h2>
        <div>
            {cartItems.length === 0 && <div>Carrinho vazio</div> }            
        </div>
        {cartItems.map((item) => (
            <div key={item.id} className="row">
                <div className="col-2">{item.nome}</div>
                <div className="col-2">
                    <button onClick={()=>onAdd(item)} className="add" >+</button>
                    <button onClick={()=>onRemove(item)} className="remove" >-</button>
                </div>
                <div className="col-2 text-rigth">
                    {item.qty} x R${item.preco}
                </div>
            </div>
        ))}
        
        {cartItems.length !== 0 && (
            <>
                <hr></hr>
                <div className="row">
                    <div className="col-2">Valor dos itens</div>
                    <div className="col-1 text-rigth"> R${itemPrices.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Valor de frete</div>
                    <div className="col-1 text-rigth"> R${frete.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2"><strong>Valor Total</strong></div>
                    <div className="col-1 text-rigth"> R${totalPrice.toFixed(2)}</div>
                </div>
            </>
        )}



    </aside>

    );
}
