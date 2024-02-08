import './Data.css'

const validarIdade = (dataNascimento) => {
    const idadeMinima = 14;
    const dataAtual = new Date();
    const dataLimite = new Date(dataAtual.getFullYear() - idadeMinima, dataAtual.getMonth(), dataAtual.getDate());
    return dataNascimento <= dataLimite;
}

const Data = (props) => {
    const aoSubmetido = (evento) => {
        const dataNascimento = new Date(evento.target.value);
        if (validarIdade(dataNascimento)) {
            props.aoAlterado(evento.target.value);
        } else {
            alert("Você deve ter pelo menos 14 anos de idade.");
        }
    }
    return(
        <div className="Data" onChange={aoSubmetido}>
            <label htmlFor="Data">{props.label}</label>
            <input type="date" id="Data" name="Data"/>
        </div>
    )
}

export default Data
