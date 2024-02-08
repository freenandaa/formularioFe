import './Email.css'

const Email = (props) => {
    const aoSubmetido = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    const validarEmail = (evento) => {
        const email = evento.target.value;
        const padrao = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!padrao.test(email)) {
            alert("Por favor, insira um endereço de email válido.");
        }
    }

    return(
        <div className="Email" onChange={aoSubmetido}>
            <label htmlFor="Email">{props.label}</label>
            <input type="email" id="email" name="Email" onBlur={validarEmail}/>
        </div>
    )
}

export default Email
