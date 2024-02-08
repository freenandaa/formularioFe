import {useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import ListaRadio from '../ListaRadio'
import Data from '../Data'
import Email from '../Email'
import Telefone from '../Telefone'
import './Formulario.css'
import { getCodeList } from 'country-list'
import Dependente from '../Dependente'
import axios from 'axios';
import CampoCep from '../CampoCep'

const Formulario = (props) => {
    let paises = ['Selecione', 'Brazil']
    Object.values(getCodeList())
    .filter(pais => pais !== 'Brazil')
    .forEach(function(pais) {
        paises.push(pais)
    })

    const escolaridade =[
        'Selecione',
        'Ensino fundamental incompleto',
        'Ensino fundamental completo',
        'Ensino médio incompleto',
        'Ensino médio completo',
        'Superior incompleto',
        'Superior completo',
        'Pós-graduação',
        'Mestrado',
        'Doutorado'
    ]


    const estadoCivil = [
        'Selecione',
        'Solteiro',
        'Casado',
        'União Estável',
        'Viúvo',
        'Separado',
        'Divorciado'  
    ]

    const [Nome, setNome] = useState('')

    const [NomeMae, setNomeMae] = useState('')

    const [Profissao, setCargo] = useState('') 

    const [Cpf, setCpf] = useState('') 

    const [Pis, setPis] = useState('') 

    const [Estadocivil, setEstadocivil] = useState('')

    const [Nacionalidade, setNacionalidade] = useState('')

    const [Genero, setGenero] = useState('')

    const [DataNascimento, setDataNascimento] = useState('')

    const [EmailCadastro, setEmailCadastro] =useState('')

    const [TelefoneCadastro, setTelefoneCadastro] =useState('')

    const [Escolaridade, setEscolaridade] = useState('')

    const [nomeValido, setNomeValido] = useState(true);
    
    const [nomeMaeValido, setNomeMaeValido] = useState(true);

    const [NumDependentes, setNumDependentes] = useState('')

    const [Cep, setCep] = useState('')

    const [Rua, setRua] = useState('')

    const [Numero, setNumero] = useState('')

    const [Complemento, setComplemento] = useState('')

    const [Cidade, setCidade] = useState('')

    const [Bairro, setBairro] = useState('')

    const [Estado, setEstado] = useState('')

    function handleCepBlur(cep) {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
          .then(response => {
            setRua(response.data.logradouro)
            setCidade(response.data.localidade)
            setComplemento(response.data.complemento)
            setEstado(response.data.uf)
            setBairro(response.data.bairro)
            console.log(response.data);
          })
    }
    
    const aoEnviar = (evento) => {
        evento.preventDefault();

        const regex = /^\w+\s+\w+/;
        const nomeValido = regex.test(Nome);
        const NomeMaeValido = (regex.test(NomeMae));

        setNomeValido(nomeValido);
        setNomeMaeValido(nomeMaeValido);

        if (nomeValido && nomeMaeValido) {
            props.aoColaboradorCadastrado({
                Nome,
                NomeMae,
                Profissao,
                Cpf,
                Pis,
                Genero,
                Estadocivil,
                DataNascimento,
                EmailCadastro,
                TelefoneCadastro,
                Nacionalidade,
                Escolaridade,
                NumDependentes,
                Cep,
                Rua,
                Numero,
                Complemento,
                Cidade,
                Bairro,
                Estado
            })
        } else {
            alert('Por favor, insira pelo menos duas palavras para os campos referentes a nomes');

        }
    }



    return (
        <section className="formulario">
            <form onSubmit={aoEnviar}>
                <h2 style={{ textAlign: 'center', fontSize: '25px', color: '#44b9bb',marginTop: '2px', marginBottom: '2px' }}>PREENCHA OS DADOS</h2>
                <div class="k-container">
                    <div className='k'>
                        <h3  style={{ textAlign: 'center', fontSize: '20px', color: '#44b9bb' }}>DADOS PESSOAIS</h3>
                        <CampoTexto 
                            obrigatorio={true} 
                            padrao= "^\w+\s+\w+"
                            label="Nome Completo" 
                            placeholder="Digite seu nome"
                            valor={Nome}
                            aoAlterado={valor => setNome(valor)}
                        />
                        {!nomeValido && <div className="mensagem-erro">Por favor, insira pelo menos duas palavras.</div>}
                        <CampoTexto 
                            obrigatorio={true} 
                            padrao="^\w+\s+\w+"
                            label="Nome Completo Mãe" 
                            placeholder="Digite nome de sua mãe"
                            valor={NomeMae}
                            aoAlterado={valor => setNomeMae(valor)}
                        />
                        {!nomeMaeValido && <div className="mensagem-erro">Por favor, insira pelo menos duas palavras.</div>}                        
                        <CampoTexto 
                            padrao="[0-9]{11}"
                            obrigatorio={true} 
                            label="CPF" 
                            placeholder="Digite seu CPF"
                            valor={Cpf}
                            aoAlterado={valor => setCpf(valor)}
                            mask="999.999.999-99"
                        />
                        <CampoTexto 
                            padrao="[0-9]{11}"
                            obrigatorio={true} 
                            label="PIS" 
                            placeholder="Digite seu PIS"
                            valor={Pis}
                            aoAlterado={valor => setPis(valor)}
                            mask="999.99999.99-9"
                        />
                        <Data
                            obrigatorio={true} 
                            label="Data de Nascimento"
                            valor={Data}                    
                            aoAlterado={valor => setDataNascimento(valor)}
                        />
                        <ListaSuspensa 
                            obrigatorio={true}
                            label="Nacionalidade" 
                            itens={paises}
                            valor={Nacionalidade}
                            aoAlterado={valor => setNacionalidade(valor)}
                        />
                        
                        
                    </div>
                    <div className='k'>
                        <h3 style={{ textAlign: 'center', fontSize: '20px', color: '#44b9bb' }}>DADOS ADICIONAIS</h3>
                        <Telefone
                            label="Digite seu telefone"
                            valor={TelefoneCadastro}                    
                            aoAlterado={valor => setTelefoneCadastro(valor)}
                        />
                        <ListaRadio
                            label="Gênero"
                            valor={Genero}
                            aoAlterado={valor => setGenero(valor)}
                        />
                        <CampoTexto
                            obrigatorio={true} 
                            label="Cargo" 
                            placeholder="Digite seu cargo"
                            valor={Profissao}
                            aoAlterado={valor => setCargo(valor)}
                        />
                        <ListaSuspensa 
                            obrigatorio={true}
                            label="Estado Civil" 
                            itens={estadoCivil}
                            valor={estadoCivil}
                            aoAlterado={valor => setEstadocivil(valor)}
                        />
                        <ListaSuspensa 
                            obrigatorio={true}
                            label="Escolaridade" 
                            itens={escolaridade}
                            valor={Escolaridade}
                            aoAlterado={valor => setEscolaridade(valor)}
                        />     
                        <Dependente
                            obrigatorio={true}                         
                            label="Tem dependentes?"
                            valor={NumDependentes}
                            aoAlterado={valor => setNumDependentes(valor)}
                        />                       
                    </div>
                    <div className='k'>
                        <h3 style={{ textAlign: 'center', fontSize: '20px', color: '#44b9bb' }}>CONTATO</h3>
                        
                        <Email
                            obrigatorio={true}                         
                            label="Digite seu e-mail"
                            valor={Email}                    
                            aoAlterado={valor => setEmailCadastro(valor)}
                        />


                        <div className='doisEmUm' id="cep">
                            <CampoCep
                                padrao="[0-9]{8}"
                                obrigatorio={true} 
                                label="CEP" 
                                placeholder="Digite seu CEP"
                                valor={Cep}
                                aoAlterado={valor => setCep(valor)}
                                mask="99999-999"
                                aoCompletado={valor => handleCepBlur(valor)}
                            />
                        </div>
                        <div className='doisEmUm' id="estado">                      
                            <CampoTexto 
                                obrigatorio={true} 
                                label="Estado" 
                                placeholder="Estado"
                                valor={Estado}
                                aoAlterado={valor => setEstado(valor)}
                            />
                        </div>
                        <CampoTexto 
                            obrigatorio={true} 
                            label="Rua" 
                            placeholder="Rua"
                            valor={Rua}
                            aoAlterado={valor => setRua(valor)}
                        />

                        <div className='doisEmUm' id="numero">
                            <CampoTexto 
                                label="Número" 
                                placeholder="Número"
                                valor={Numero}
                                aoAlterado={valor => setNumero(valor)}

                            />
                        </div>
                        <div className='doisEmUm' id="complemento">
                            <CampoTexto 
                                label="Complemento" 
                                placeholder="Complemento"
                                valor={Complemento}
                                aoAlterado={valor => setComplemento(valor)}

                            />
                        </div>
                        
                        <CampoTexto 
                            obrigatorio={true} 
                            label="Bairro" 
                            placeholder="Bairro"
                            valor={Bairro}
                            aoAlterado={valor => setBairro(valor)}
                        />
                        <CampoTexto 
                            brigatorio={true} 
                            label="Cidade" 
                            placeholder="Cidade"
                            valor={Cidade}
                            aoAlterado={valor => setCidade(valor)}
                        />                        
                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Botao>
                        ENVIAR
                    </Botao>
                </div>
            </form>    
        </section>
    )
}

export default Formulario
