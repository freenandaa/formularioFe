import './ListaRadio.css'

const ListaRadio = (props) => {

    const aoSelecionado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return (
        <div className='lista-radio'>
            <label>{props.label}</label>
            <div onChange={aoSelecionado}>
                <input type="radio" id="feminino" name="sexo" value="Feminino"/>
                <label htmlFor="feminino">Feminino</label>
                <input type="radio" id="masculino" name="sexo" value="Masculino"/>
                <label htmlFor="masculino">Masculino</label>
                <input type="radio" id="masculino" name="sexo" value="Outro"/>
                <label htmlFor="Outro">Outro</label>
            </div>
        </div>
    )
}

export default ListaRadio
