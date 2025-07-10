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
        preço:parseFloat(elemento.preco*0.5)
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
function cadastro(nome, idade, cpf){
    if(cpf.length >= 11){ 
        Cadastrados.push({ nome: nome, idade: idade, cpf: cpf })
        console.log("Cliente cadastrado com sucesso!")
    } else {
        console.log('CPF inválido. Por favor, digite um CPF com pelo menos 11 caracteres.')
    }
}
function menor_1kg(peso){
    return carnes.map((elemento)=>{
        const precoFinal = (elemento.preco / elemento.kg)*peso
        return{
            nome: elemento.nome,
            preco: precoFinal,
            peso: peso
        }
    })
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
//escolha da operaçao
function principal(escolha){
    
    if(escolha == '1'){
        console.clear()
        const nome = readline.question('INFORME O NOME DO CLIENTE: ')
        const idade = readline.questionInt('QUAL A IDADE DO CLIENTE: ')
        const cpf = readline.question('INDIQUE O CPF DO CLIENTE: ')
        cadastro(nome, idade,cpf)
    }else if(escolha == '2'){
        console.clear()
        console.log(produtos)
    }else if(escolha == '3'){
        console.clear()
        console.log(Cadastrados)
    }else if(escolha == '4'){
        console.clear()
        const option = readline.question('QUAL PROMO DESEJA APLICAR: ')
        if(option == 'Carnes'){
            console.clear()
            const kilo = readline.questionFloat('Qual a quantidade de Kg?: ')
            if (kilo == 1){
                console.log(carnes)
                console.log(promo_carne)
            }else if(kilo < 1){
               console.log(menor_1kg(kilo))
            }
        }
        if(option == 'produtos'){
            console.clear()
            console.log('a promoçao ficou de: ')
            console.log(promo)
        }   
    }else if(escolha == '5'){
        console.clear()
        console.log('SISTEMA ENCERRADO')
    }
}
let per
do{
    inter()
    const escolha = readline.question('')
    principal(escolha)
    per = readline.question('Deseja continuar?(S/n)')
}while(per == 's')