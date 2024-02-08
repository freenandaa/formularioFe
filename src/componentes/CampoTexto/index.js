import './CampoTexto.css'
import InputMask from "react-input-mask";
import { useState, useEffect } from 'react';


const CampoTexto = (props) => {



    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    const [valido, setValido] = useState(true);

    useEffect(() => {
        if (props.padrao) {
            const regex = new RegExp(props.padrao);
            setValido(regex.test(props.valor));
        }
    }, [props.valor, props.padrao]);

    return(
        <div className="campo-texto" id={props.id}>
            <label>{props.label}</label>
            <InputMask mask={props.mask} value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
            
        </div>
    )
}

export default CampoTexto
