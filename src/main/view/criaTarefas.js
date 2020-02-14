import React from 'react'
import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import TarefaService from '../../main/app/service/tarefaService'
import * as messages from '../../components/toastr'

class CadastroTarefas extends React.Component{
    state = {
        conteudo: '',
        marcacao: false
    }
    
    constructor(){
        super()
        this.service = new TarefaService()
    }

    submit = () => {
        const { conteudo, marcacao } = this.state
        const newTarefa = { conteudo, marcacao }
        try{
            this.service.validar(newTarefa)
        }catch(erro){
            const mensagens = erro.mensagens
            mensagens.forEach(msg => messages.mensagemErro(msg))
            return false
        }

        this.service
        .salvarTarefa(newTarefa)
        .then(response => {
            this.props.history.push('/lista-tarefas')
            messages.mensagemSucesso('Tarefa cadastrada com sucesso!')
        }).catch(error => {
            messages.mensagemErro(error.response.data)
        })
    }

    render(){
        return(
            <Card title= "Cadastro de Tarefa">
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup id="inputTarefa" label="Tarefa: *">
                            <input id="inputTarefa" type="text" className="form-control" name="conteudo" value={this.state.conteudo} onChange={e => this.setState({conteudo: e.target.value})}></input>
                        </FormGroup>
                    </div>
                    {/*<div className="col-md-2">
                        <FormGroup label="Marcação" htmlFor="inputMarcacao" className="p-checkbox-label">
                            <Checkbox inputId='inputMarcacao'  value={this.state.marcacao} onChange={e => this.setState({marcacao: e.target.checked})} checked={this.state.marcacao}></Checkbox>
                        </FormGroup>
                    </div>*/}
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button onClick={this.submit} className="btn btn-success"><i className="pi pi-save"></i> Salvar</button>                 
                        <button onClick={e => this.props.history.push('/lista-tarefas')} className="btn btn-danger"><i className="pi pi-times"></i> Cancelar</button>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CadastroTarefas