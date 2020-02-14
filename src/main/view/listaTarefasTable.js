import React from 'react'
import TarefaService from '../app/service/tarefaService'
import * as messages from '../../components/toastr'
import {Checkbox} from 'primereact/checkbox'
import Card from '../../components/card'
import RLDD from 'react-list-drag-and-drop/lib/RLDD';


class ListaTarefas extends React.Component{
    state = {
        tarefa: '',
        marcacao: false,
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
            messages.mensagemErro(error.response.data)
        })

    }

    atualiza = (tarefas,elemento) => {
        console.log([tarefas,elemento])
        if (tarefas.marcacao){
            tarefas.marcacao = false
        }else{
            tarefas.marcacao = true
        }
        this.service.autualizarTarefas(tarefas)
        .then(response => {
            messages.mensagemSucesso('Tarefa atualizada com sucesso!')
            //this.setState( {tarefas: tarefas.marcacao})
        })
        .catch( error => {
            messages.mensagemErro(error.response.data)
        })
    }

    render(){
        const rows = this.state.tarefas.map( tarefas => {
            return(
                <tr key={tarefas._id}>
                    <td>{tarefas.conteudo}</td>
                    <td><Checkbox checked={tarefas.marcacao} onChange={ e => this.atualiza(tarefas,this)}></Checkbox></td>
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