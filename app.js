const livros = require('./database')

const read = require('readline-sync')
const resposta = read.question(`
==================== Menu ===================

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidades de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJOS: Busca livros nao lidos

5 - SAIR

Digite um numero [1-5]: 3
`)



