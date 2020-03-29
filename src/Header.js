import React from 'react'

export default function Header({ children }) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );

}

//props.title retorna um titlo
//props.children retorna todo o conteudo
//{} informando assim no header ele fala apenas qual propriedade do props ele quer 