import React from 'react';
import { EstiloBotoes } from './style';
import Botao from '../Botao/Botao';
import stringCalculator from 'string-calculator';

const Botoes = ({ digitos, setDigitos }) => {
    //children: o que foi digitado = valorDigitado
    //Digito: tudo o que tem na calculadora

    const atualizarDigitos = (valorDigitado) => {

        if (valorDigitado === "C") {
            setDigitos("0")

        } else if (valorDigitado === "⌫") {
            setDigitos(digitos.slice(0, digitos.length - 1))

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
        if (digitos.includes("x")) {
            const operacao = digitos.replace("x", "*")
            return stringCalculator(operacao)
        } else {
            return stringCalculator(digitos)
        }
    }
    const valores = ["C", "%", "/", "⌫", "7", "8", "9", "x", "6", "5", "4", "-", "3", "2", "1", "+", "0", ".", "+-", "="]

    return (
        <EstiloBotoes>
            {valores.map((elemento) => <Botao atualizarDigitos={atualizarDigitos}>{elemento}</Botao>)}
        </EstiloBotoes>
    )
}

export default Botoes