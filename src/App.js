import React, { useState } from 'react';
import Caixa from './Componentes/Caixa/Caixa';
import Visor from './Componentes/Visor/Visor';
import Botoes from './Componentes/Botoes/Botoes';


const App = () => {
    const [digitos, setDigitos] = useState("")
    return (
        <Caixa>
            <Visor digitos={digitos}/>
            <Botoes digitos={digitos} setDigitos={setDigitos}/>
        </Caixa>
    )
}

export default App;