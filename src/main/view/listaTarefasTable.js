import React from 'react'
import TarefaService from '../app/service/tarefaService'
import * as messages from '../../components/toastr'
import {Checkbox} from 'primereact/checkbox'
import Card from '../../components/card'


class ListaTarefas extends React.Component{
    
    state = {
        tarefas: []
    }

    constructor(){
        super()
        this.service = new TarefaService()
    }

    componentDidMount(){
        this.service.obterTarefas()
        .then(response => {
            this.setState({tarefas : response.data})
        })
        .catch( error => {
            messages.mensagemErro('Erro ao buscar tarefas.')
        })

    }

    atualiza = (tarefa) => {
        if (tarefa.marcacao){
            tarefa.marcacao = false
        }else{
            tarefa.marcacao = true
        }
        this.service.autualizarTarefas(tarefa)
        .then(response => {
            const tarefas = this.state.tarefas
            const index = tarefas.indexOf(tarefa)
                if(index !== -1){
                    tarefas['marcacao'] = tarefa.marcacao
                    tarefas[index] = tarefa
                    this.setState({tarefa})
                }
            messages.mensagemSucesso('Tarefa atualizada com sucesso!')
        })
        .catch( error => {
            messages.mensagemErro('Erro ao atualizar a Tarefa.')
        })
    }

    render(){
        const rows = this.state.tarefas.map( tarefas => {
            return(
                <tr key={tarefas._id}>
                    <td>{tarefas.conteudo}</td>
                    <td><Checkbox checked={tarefas.marcacao} onChange={ e => this.atualiza(tarefas)}></Checkbox></td>
                </tr>
            )
        })

        return(
            <Card title= "Lista de Tarefa">
                <div className="row">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Descrição tarefa</th>
                                <th scope="col">Marcação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}   
                        </tbody>
                    </table>
                </div>
            </Card>
        )
    }
}

export default ListaTarefas