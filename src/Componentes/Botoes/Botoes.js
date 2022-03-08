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
            if (digitos.split('').filter((elemento) => elemento === "+" || elemento === "-" || elemento === "/" || elemento === "x").length < 2) {
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

        if (digitos.split('').filter((elemento) => elemento === "+" || elemento === "-" || elemento === "/" || elemento === "x").length === 1) {
            if (digitos.includes("+")) {
                const [x, y] = digitos.split("+");
                return Number(x) + Number(y);
            }
            if (digitos.includes("-")) {
                const [x, y] = digitos.split("-");
                return Number(x) - Number(y);
            }
            if (digitos.includes("/")) {
                const [x, y] = digitos.split("/");
                return Number(x) / Number(y);
            }
            if (digitos.includes("x")) {
                const [x, y] = digitos.split("x");
                return Number(x) * Number(y);
            }
        }

        if (digitos.split('').filter((elemento) => elemento === "+" || elemento === "-" || elemento === "/" || elemento === "x").length === 2) {
            const operacoes = digitos.split('').filter((elemento) => elemento === "+" || elemento === "-" || elemento === "/" || elemento === "x")
            if ((operacoes[0] === "-" || operacoes[0] === "+") && (operacoes[1] === "x" || operacoes[1] === "/")) {
                if (operacoes[0] === "-") {
                    const [primeiro, operacao] = digitos.split("-")
                    if (operacoes[1] === "x") {
                        const [segundo, terceiro] = operacao.split("x")
                        return Number(primeiro) - Number(segundo) * Number(terceiro)
                    }
                }

                if (operacoes[0] === "-") {
                    const [primeiro, operacao] = digitos.split("-")
                    if (operacoes[1] === "/") {
                        const [segundo, terceiro] = operacao.split("/")
                        return Number(primeiro) - Number(segundo) / Number(terceiro)
                    }
                }

                if (operacoes[0] === "+") {
                    const [primeiro, operacao] = digitos.split("+")
                    if (operacoes[1] === "x") {
                        const [segundo, terceiro] = operacao.split("x")
                        return Number(primeiro) + Number(segundo) * Number(terceiro)
                    }
                }

                if (operacoes[0] === "+") {
                    const [primeiro, operacao] = digitos.split("+")
                    if (operacoes[1] === "/") {
                        const [segundo, terceiro] = operacao.split("/")
                        return Number(primeiro) + Number(segundo) / Number(terceiro)
                    }
                }
            }

            else if ((operacoes[0] === "x" || operacoes[0] === "/") && (operacoes[1] === "-" || operacoes[1] === "+")) {
                if (operacoes[0] === "x") {
                    const [primeiro, operacao] = digitos.split("x")
                    if (operacoes[1] === "-") {
                        const [segundo, terceiro] = operacao.split("-")
                        return Number(primeiro) * Number(segundo) - Number(terceiro)
                    }
                }

                if (operacoes[0] === "x") {
                    const [primeiro, operacao] = digitos.split("x")
                    if (operacoes[1] === "+") {
                        const [segundo, terceiro] = operacao.split("+")
                        return Number(primeiro) * Number(segundo) + Number(terceiro)
                    }
                }

                if (operacoes[0] === "/") {
                    const [primeiro, operacao] = digitos.split("/")
                    if (operacoes[1] === "-") {
                        const [segundo, terceiro] = operacao.split("-")
                        return Number(primeiro) / Number(segundo) - Number(terceiro)
                    }
                }

                if (operacoes[0] === "/") {
                    const [primeiro, operacao] = digitos.split("/")
                    if (operacoes[1] === "+") {
                        const [segundo, terceiro] = operacao.split("+")
                        return Number(primeiro) / Number(segundo) + Number(terceiro)
                    }
                }
            }
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