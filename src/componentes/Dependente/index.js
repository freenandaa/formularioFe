import React, { useState } from 'react';
import './Dependente.css';

const Dependente = (props) => {
    const [TemDependente, setTemDependente] = useState(false);

    const aoSelecionado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='Dependente'>
            <div className='bloco'>
                <label>{props.label}</label>
                <div className="opcoes" onChange={e => setTemDependente(e.target.value === 'sim')}>
                    <input type="radio" id="sim" name="tem-dependente" value="sim" />
                    <label htmlFor='sim'>Sim</label>
                    <input type="radio" id="nao" name="tem-dependente" value="nao" />
                    <label htmlFor='nao'>Não</label>
                </div>
            </div>
            {TemDependente && (
                <div className="container">
                    <label>Quantos?</label>
                    <input type="number" value={props.valor} onChange={aoSelecionado} />
                </div>
                
            )}
        </div>
    )
}

export default Dependente;
