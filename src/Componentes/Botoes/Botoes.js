import React from 'react';
import { EstiloBotoes } from './style';
import Botao from '../Botao/Botao';

const Botoes = ({ digitos, setDigitos }) => {
    //children: o que foi digitado = valorDigitado
    //Digito: tudo o que tem na calculadora

    const atualizarDigitos = (valorDigitado) => {
        if (valorDigitado === "C") {
            setDigitos("0")

        } else if (valorDigitado === "⌫") {
            setDigitos(digitos.slice(0, digitos.length - 1))

        } else if (valorDigitado === "+" || valorDigitado === "-" || valorDigitado === "/" || valorDigitado === "x") {

            if (!(digitos.includes("+") || digitos.includes("-") || digitos.includes("/") || digitos.includes("x"))) {
                setDigitos(digitos + valorDigitado)
            }
        
        } else if (valorDigitado === "=") {
            setDigitos(String(resultado()))

        } else {
            if (digitos === "0") {
                setDigitos(valorDigitado)
            } else {
                setDigitos(digitos + valorDigitado)
            }
        }
    }

    const resultado = () => {
        if (digitos.includes("+")){
            const [x, y] = digitos.split("+");
            return Number(x) + Number(y);
        }
        if (digitos.includes("-")){
            const [x, y] = digitos.split("-");
            return Number(x) - Number(y);
        }
        if (digitos.includes("/")){
            const [x, y] = digitos.split("/");
            return Number(x) / Number(y);
        }
        if (digitos.includes("x")){
            const [x, y] = digitos.split("x");
            return Number(x) * Number(y);
        }
    }
    return (
        <EstiloBotoes>
            <Botao atualizarDigitos={atualizarDigitos}>C</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>%</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>/</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>⌫</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>7</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>8</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>9</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>x</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>6</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>5</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>4</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>-</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>3</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>2</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>1</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>+</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>0</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>.</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>+-</Botao>
            <Botao atualizarDigitos={atualizarDigitos}>=</Botao>
        </EstiloBotoes>
    )
}

export default Botoes