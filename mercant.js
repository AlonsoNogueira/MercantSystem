"use strict"
const readline = require('readline-sync')
const produtos = [
  { nome: "Sabao quit", preco: 17.99 },
  { nome: "arroz", preco: 5.99 },
  { nome: "Macarrao", preco: 7.99 },
  { nome: "Feijao", preco: 4.90 },
  { nome: "Garrafao de água", preco: 6.99}
]
const carnes = [
    {nome: 'Bisteca', preco: 16.99, kg: 1},
    {nome: 'File Mignon', preco: 69.99, kg: 1},
    {nome: 'Carne de porco', preco: 19.99, kg: 1},
    {nome: 'mao de vaca', preco: 23.99, kg: 1},
]
const Cadastrados = [
    {nome:'Jorge',idade: 22,cpf: '789.754.612-90'},
    { nome: 'Maria', idade: 30, cpf: '123.456.789-00' },
    { nome: 'Ana', idade: 25, cpf: '987.654.321-11' },
]
//Promoçao de produtos
const promo = produtos.map((elemento)=>{
    return {
        nome: elemento.nome,
        preço:parseInt(elemento.preco*0.5)
    }
})
//promoçao de carnes
const promo_carne= carnes.map((elemento)=>{
        return{
            nome: elemento.nome,
            preço: elemento.preco *0.5,
            peso: elemento.kg
        }
})
//funçao de cadastro
function cadastro(nome, cpf, idade){
    if(cpf.lenght == 12)
        Cadastrados.push({nome: nome, idade: idade, cpf: cpf})
    else
        console.log('CPF invalido, porfavor Digite um cpf com 9+ caracteres')
}
//interface
function inter(){
    console.log("======================= Mercantil System =======================")
    console.log()
    console.log("[1] CADASTRAR CLIENTE")
    console.log("[2] VER PRODUTOS")
    console.log("[3] VIZUALIZAR USUARIOS CADASTRADOS")
    console.log("[4] APLICAR PROMOÇÕES")
    console.log("[5] FINALIZAR SISTEMA")
    console.log("================================================================")
}
inter()
//escolha da operaçao
const escolha = readline.question('')
//
switch(escolha){
    case '1':
        console.clear()
        const nome = readline.question('INFORME O NOME DO CLIENTE: ')
        const idade = readline.questionInt('QUAL A IDADE DO CLIENTE: ')
        const cpf = readline.question('INDIQUE O CPF DO CLIENTE: ')
        cadastro(nome, idade,cpf)
    case '2':
        console.clear()
        console.log(produtos)
    case '3':
        console.clear()
        console.log(Cadastrados)
    case '4':
        console.clear()
        const option = readline.question('QUAL PROMO DESEJA APLICAR: ')
        if(option == 'Carnes'){
            console.clear()
            console.log(carnes)
            console.log(promo_carne)
        }
        if(option == 'produtos'){
            console.clear()
            console.log('a promoçao ficou de: '+promo)
        }
    case '5':
        console.clear()
        console.log('SISTEMA ENCERRADO')
        break
}