import './Telefone.css'
import InputMask from "react-input-mask";

const Telefone = (props) => {

    const aoSubmetido = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return(
        <div className="Telefone">
            <label htmlFor="Telefone">{props.label}</label>
            <InputMask mask="(99) 99999-9999" onChange={aoSubmetido} value={props.valor} id="Telefone" name="Telefone" required/>
        </div>
    )
}

export default Telefone