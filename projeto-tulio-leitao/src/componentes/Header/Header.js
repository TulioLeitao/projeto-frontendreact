import React from "react";

export default function Header (props) {
    const {countCartItems} = props;
    return (
        <header className="row block-1 center">
            <div>
                <a href="#/">
                    <h1>Loja de Pedras Espacias</h1>
                </a>
            </div>
            <div>
                <a href="#/carrinho">

                <h3>Carrinho {''}</h3>
                {countCartItems? (
                    <button className="badge">{countCartItems}</button>
                ): ( 
                  ''
                )}
                
                
                </a>
            </div>
        </header>
    )

}
