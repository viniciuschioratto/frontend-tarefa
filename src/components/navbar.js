import React from 'react'
import NavbarItem from './navbarItem'

function Navbar(){
    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <span className="navbar-brand">Tarefas</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavbarItem href="#/cadastro-tarefa" label="Nova tarefa"></NavbarItem>
                        <NavbarItem href="#/lista-tarefas" label="Lista tarefas"></NavbarItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar