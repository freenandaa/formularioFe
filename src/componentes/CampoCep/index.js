import './CampoCep.css'
import InputMask from "react-input-mask";
import { useState, useEffect } from 'react';


const CampoCep = (props) => {



    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    const aoCompletado = (evento) => {
        props.aoCompletado(evento.target.value)
    }
    const [valido, setValido] = useState(true);

    useEffect(() => {
        if (props.padrao) {
            const regex = new RegExp(props.padrao);
            setValido(regex.test(props.valor));
        }
    }, [props.valor, props.padrao]);

    return(
        <div className="campo-cep">
            <label>{props.label}</label>
            <InputMask mask={props.mask} value={props.valor} onBlur={aoCompletado} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
            
        </div>
    )
}

export default CampoCep
