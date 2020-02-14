import ApiService from '../apiService'
import ErroValidacao from '../exception/erroValidacao'

class TarefaService extends ApiService{
    constructor(){
        super('/api')
    }

    autualizarTarefas(tarefa){
        return this.put('/update', tarefa)
    }

    obterTarefas(){
        return this.get('/search')
    }

    salvarTarefa(tarefa){
        return this.post('/save', tarefa)
    }

    validar(tarefa){
        const erros = []

        if(!tarefa.conteudo){
            erros.push('O campo Tarefa é obrigatorio.')
        }

        if(erros && erros.length > 0){
            throw new ErroValidacao(erros)
        }
    }
}

export default TarefaService;