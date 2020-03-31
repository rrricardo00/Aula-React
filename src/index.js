import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import {CompA, CompB}  from './componentes/doiscomponentes';
import MultiElementos from './componentes/MultiElementos';


const elemento = document.getElementById('root');
ReactDOM.render(<div>

    <CompA valor="valor propriedade compA"></CompA>
    <CompB></CompB>
    {/*<PrimeiroComponente></PrimeiroComponente>
     <MultiElementos/>*/}
    
</div>, elemento);

