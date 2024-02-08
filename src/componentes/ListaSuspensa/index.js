import './ListaSuspensa.css'


const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select defaultValue={props.default} onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.value}>
            {props.itens.map(item => {
                    if (item === 'Selecione') {
                        return <option key={item} disabled selected>{item}</option>
                    } else {
                        return <option key={item}>{item}</option>
                    }
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa