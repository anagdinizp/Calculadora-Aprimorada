import React from 'react';
import { EstiloCaixa } from './style';

const Caixa = ({ children }) => {
    return (
        <EstiloCaixa>{children}</EstiloCaixa>
    )
}

export default Caixa;