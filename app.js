const read = require('readline-sync')
const listarRecomendados = require('./controllers/buscarLivros')
const listarLivrosOrdenados = require('./controllers/buscarLivros')
const buscarLivros = require('./controllers/buscarLivros')

const resposta = read.question(`
==================== Menu ===================

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidades de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJOS: Busca livros nao lidos

5 - SAIR

Digite um numero [1-5]: 

`)

// Quando a pessoa escolher a opção 1, eu quero que o js chame 
// a função que vai estar no meu arquivo controller/buscarLivros

switch(resposta){
    case '1':
        //chamar a funcao buscarLivros
        buscarLivros()
        break
        case '2':
        // chamar a função listarLivrosOrdenados
        listarLivrosOrdenados()
        break 
        case '3':
            // chamar a função listarRecomendados
            listarRecomendados()
            
        default:
            console.log('fim do algoritimo')

}


