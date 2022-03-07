import React from 'react';
import { EstiloBotao } from './style';

const Botao = ({children, atualizarDigitos}) => {
    return (
        <EstiloBotao onClick={() => atualizarDigitos(children)}>{children}</EstiloBotao>
    )
}

export default Botao
