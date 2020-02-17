import React from 'react'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import CadastroTarefa from '../main/view/criaTarefas'
import ListaTarefas from '../main/view/listaTarefasTable'

function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route path="/cadastro-tarefa" component={CadastroTarefa}></Route>
                <Route path="/lista-tarefas" component={ListaTarefas}></Route>
                <Route exact path="/" render={() => (<Redirect to="/lista-tarefas" />)} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas