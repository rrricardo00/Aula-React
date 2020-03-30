import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import {CompA, CompB}  from './componentes/doiscomponentes';

const elemento = document.getElementById('root');
ReactDOM.render(<div>

    <CompA></CompA>
    <PrimeiroComponente></PrimeiroComponente>
    
</div>, elemento);

