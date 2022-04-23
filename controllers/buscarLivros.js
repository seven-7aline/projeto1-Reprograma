const livros = require('../database')
const read = require('readline-sync')

const buscarLivros = () => {
    //Quando o 1 for chamado no app, entra nesse código e faz essa pergunta no terminal
    const opcaoInicial = read.question('Deseja buscar por categoria? S/N').toUpperCase()

    //Quando a pessoa responde S entra aqui no if
    if(opcaoInicial ==='S'){
        //mostra no console todas as categorias existentes
       const categorias = livros.map(livro => livro.categoria)
       console.table(categorias)

       const inputCategoria = read.question('Digite umacategoria conforme tabela acima:')

    }

}

module.exports = buscarLivros


const listarLivrosOrdenados = () =>{
    console.log('Chamei a função listarLivrosOrdenados')

}

module.exports = listarLivrosOrdenados

const listarRecomendados = () =>{
    console.log('Chamei a função listarRecomendados')
    
}

module.exports = listarRecomendados