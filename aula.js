//Console e como declarar variáveis

// //Pode mudar o valor
// let variavel1 = 3

// //Não pode mudar o valor.
// const pi = 3.14

// console.log('Imprime algo')

// /////////////////////////////////

// //Exercício - Cálculo de Valor de Uma Viagem

// let precoCombustivel = 6.10 
// let gastoMedioDeCombustivelPorLitros = 10 
// let distanciDaViagem = 500

// const litrosConsumidos = distanciDaViagem / gastoMedioDeCombustivelPorLitros

// const valorGasto = litrosConsumidos * precoCombustivel


// console.log(`O preço do combustivel é: ${precoCombustivel.toFixed(2)}, a distância da viagem em KM é: ${distanciDaViagem},  o valor gasto é: ${valorGasto.toFixed(2)} R$ por KM`);

// //////////////////////////////////////////

// const numero = 3  

// const numeroPar = (numero % 2) === 0


// if(numeroPar){
//     console.log('Par')
// }else{
//     console.log('Impar')
// }

// /////////////////////////////////////////

// const numero1 = 15  

// const numeroDivisivelPor5 = (numero % 5) === 0


// if(numeroPar){
//     console.log('Sim')
// }else{
//     console.log('Não')
// }

////////////////////////
//Exercício - Cálculo de Valor de Uma Viagem p2

// let precoDaGasolina = 6.10 
// let precoDoEtanol = 4.50 
// let gastoMedioDeCombustivelPorLitros1 = 10 
// let distanciDaViagem1 = 500
// let tipoDoCombustivel = 'JURUPEBA'


// const litrosConsumidos1 = distanciDaViagem1 / gastoMedioDeCombustivelPorLitros1

// if(tipoDoCombustivel === 'Etanol'){

//     const valorGasto1 = litrosConsumidos1 * precoDoEtanol
//     console.log(`O preço do combustivel é: ${precoDoEtanol.toFixed(2)}, a distância da viagem em KM é: ${distanciDaViagem1},  o valor gasto é: ${valorGasto1.toFixed(2)} R$ por KM`);

// } else if(tipoDoCombustivel === 'Gasolina'){

//    const valorGasto1 = litrosConsumidos1 * precoDaGasolina
//    console.log(`O preço do combustivel é: ${precoDaGasolina.toFixed(2)}, a distância da viagem em KM é: ${distanciDaViagem1},  o valor gasto é: ${valorGasto1.toFixed(2)} R$ por KM`);

// }else{
//     console.log("Combustivel invalido")
// }

////////////////////


//Exercicio Media de Notas

// let n1 = 3
// let n2 = 6
// let n3 = 5

// let media = (n1 + n2 + n3)/3

// if (media < 5){
//     console.log(`Sua media foi ${media} e você foi Reprovado`)
// }else if(media >= 5 && media <=7){
//     console.log(`Sua media foi ${media} e você está de Recuperação`)
// }else{
//     console.log(`Sua media foi ${media} e você está Aprovado`)
// }

//Exercicio IMC

// let peso = 45
// let altura = 1.75
// let imc = peso / (altura * altura)

// if(imc < 18.5){
//     console.log(`Seu imc é: ${imc} e você está abaixo do peso`)
// }else if(imc >= 18.5 && imc < 25){
//     console.log(`Seu imc é: ${imc} e você está  com o peso ideal`)
// }else if(imc >= 25 && imc < 30){
//     console.log(`Seu imc é: ${imc} e você esta acima do peso`)
// }else if(imc >= 30 && imc < 40){
//     console.log(`Seu imc é: ${imc} e você está obeso`)
// }else{
//     console.log(`Seu imc é: ${imc} e você está com obesidade Grave`)
// }

// Exercicio preço

// let precoEtiqueta = 25
// let condicaoDePagamento = 1
// let totalApagar

// if (condicaoDePagamento === 1) {

//     totalApagar = precoEtiqueta - (precoEtiqueta * 0.1) 
//     console.log(`O preço de etiqueta é: ${precoEtiqueta}, com desconto de 10% no Debito ficou por: ${totalApagar}`)

// }else if (condicaoDePagamento === 2){

//     totalApagar = precoEtiqueta - (precoEtiqueta * 0.15)
//     console.log(`O preço de etiqueta é: ${precoEtiqueta}, com desconto de 15% no Pix ficou por: ${totalApagar}`)

// }else if(condicaoDePagamento === 3){

//     totalApagar = precoEtiqueta
//     console.log(`Total a pagar: ${totalApagar}`)

// }else if(condicaoDePagamento === 4){

//     totalApagar = precoEtiqueta + (precoEtiqueta * 0.1)
//     console.log(`O preço de etiqueta é: ${precoEtiqueta}, com as parcela de: ${totalApagar}`)

// }else{
//     console.log('Metodo de pagamento invalido')
// }


// // Melhorando o Exercicio de IMC

// function calcImc(peso, altura) {
//     return peso / (altura * altura)
// }

// function pegandoRes(){
//     return  calcImc(60, 1.75).toFixed(2)
    
// }

// function resultadImc() {
//     if (pegandoRes() < 18.5) {
//         console.log(`Seu imc é: ${pegandoRes()} e você está abaixo do peso`)
//     } else if (pegandoRes() >= 18.5 && pegandoRes() < 25) {
//         console.log(`Seu imc é: ${pegandoRes()} e você está  com o peso ideal`)
//     } else if (pegandoRes() >= 25 && pegandoRes() < 30) {
//         console.log(`Seu imc é: ${pegandoRes()} e você esta acima do peso`)
//     } else if (pegandoRes() >= 30 && pegandoRes() < 40) {
//         console.log(`Seu imc é: ${pegandoRes()} e você está obeso`)
//     } else {
//         console.log(`Seu imc é: ${pegandoRes()} e você está com obesidade Grave`)
//     }
// }

// resultadImc();

// ///Melhorando mais ainda

// function calcImc(peso, altura) {
//     return peso / (altura * altura);
// }

// function classificaImc(imc) {
//     if (imc < 18.5) {
//         return `Seu IMC é: ${imc.toFixed(2)} e você está abaixo do peso.`;
//     } else if (imc < 25) {
//         return `Seu IMC é: ${imc.toFixed(2)} e você está com o peso ideal.`;
//     } else if (imc < 30) {
//         return `Seu IMC é: ${imc.toFixed(2)} e você está acima do peso.`;
//     } else if (imc < 40) {
//         return `Seu IMC é: ${imc.toFixed(2)} e você está obeso.`;
//     } else {
//         return `Seu IMC é: ${imc.toFixed(2)} e você está com obesidade grave.`;
//     }
// }


// function resultadImc(peso, altura) {
//     const imc = calcImc(peso, altura);
//     console.log(classificaImc(imc));
// }

// resultadImc(60, 1.75);


//Função escreve meu nome

// function escreveNome(nome){
//    return nome
// }
// console.log(`meu nome é: ${escreveNome("Carlos")}`)

//Função maio de idade

// function verificarIdade(idade){
//     if(idade >= 18){
//         return 'Maior de idade'
//     }return 'Menor de idade'
// }

// console.log(verificarIdade(12))

//Exercicio preço em função


// function formaDePagamento(precoEtiqueta, condicaoDePagamento, totalDeParcelas){
//     if(condicaoDePagamento === 1){
//         return `O preço de etiqueta é: ${precoEtiqueta} com o desconto de 10% no Debito ficou: ${precoEtiqueta - (precoEtiqueta * 0.1)}`
//     } else if(condicaoDePagamento === 2){
//         return `O preço de etiqueta é: ${precoEtiqueta} com o desconto de 15% no Pix ficou: ${precoEtiqueta - (precoEtiqueta * 0.15)}`
//     } else if(condicaoDePagamento === 3){
//         if(totalDeParcelas === 2){
//             return `Parcelado em duas vezes fica duas de ${precoEtiqueta/2}, total a pagar fica ${precoEtiqueta}`
//         }
//         return `Parcelado em ${totalDeParcelas} vezes fica ${totalDeParcelas} de ${(precoEtiqueta + ((totalDeParcelas * 0.15) * totalDeParcelas))/ totalDeParcelas}, total a pagar: ${precoEtiqueta + ((totalDeParcelas * 0.15) * totalDeParcelas)}`
//     }return `Forma de pagamento invalida`   
// }
// console.log(formaDePagamento(100, 3, 5))


////////////////////

//Melhorado mais ainda:

// function formaDePagamento(precoEtiqueta, condicaoDePagamento, totalDeParcelas = 1) {
//     if (condicaoDePagamento === 1) {
//         return `O preço de etiqueta é: R$${precoEtiqueta}, com o desconto de 10% no Débito ficou: R$${(precoEtiqueta - (precoEtiqueta * 0.1)).toFixed(2)}`;
//     } else if (condicaoDePagamento === 2) {
//         return `O preço de etiqueta é: R$${precoEtiqueta}, com o desconto de 15% no Pix ficou: R$${(precoEtiqueta - (precoEtiqueta * 0.15)).toFixed(2)}`;
//     } else if (condicaoDePagamento === 3) {
//         if (totalDeParcelas === 2) {
//             return `Parcelado em 2 vezes fica duas de R$${(precoEtiqueta / 2).toFixed(2)}, total a pagar: R$${precoEtiqueta.toFixed(2)}`;
//         } else if (totalDeParcelas > 2) {
//             const juros = 0.015; // 1,5% por parcela
//             const totalComJuros = precoEtiqueta + (precoEtiqueta * juros * totalDeParcelas);
//             return `Parcelado em ${totalDeParcelas} vezes de R$${(totalComJuros / totalDeParcelas).toFixed(2)}, total a pagar: R$${totalComJuros.toFixed(2)}`;
//         }
//         return `Pagamento à vista no crédito, total a pagar: R$${precoEtiqueta.toFixed(2)}`;
//     } else {
//         return `Forma de pagamento inválida. Por favor, escolha uma opção válida.`;
//     }
// }

// console.log(formaDePagamento(100, 3, 5));


//////////

//objetos

// const carlos = {
//     nome: 'Carlos Alexandre',
//     idade: 22,
//     cor: 'Branco',
//     cidadeDeNascimento: 'Almenara',

//     descrever: function(){
//         console.log(`Nome: ${this.nome}, idade: ${this.idade}, altura: ${this.altura} teste`)
//     }
// }

// console.log(carlos)

// carlos.altura = 1.75

// console.log(carlos)

// delete carlos.cor
// console.log(carlos)

// carlos.descrever()



// const pessoa = {
    
// }

// pessoa.idade = 22
// pessoa.nome = 'Carlos'

// console.log(pessoa)

// class Pessoa {
//     nome;
//     idade;
//     altura;

//     //Torna obrigatorio os parametros:
//     constructor(nome, idade, altura){
//         this.nome = nome;
//         this.idade = idade;
//         this.altura = altura
//     }

//     //um metodo
//     descrever(){
//         return`Nome: ${this.nome}, idade: ${this.idade}, altura: ${this.altura}`
//     }
// }

// function compararPessoas(p1, p2){
//     if(p1.idade > p2.idade){
//         return `${p1.nome} é mais velho que ${p2.nome}`
//     } else if(p2.idade > p1.idade){
//          return `${p2.nome} é mais velho que ${p1.nome}`
//     } return  `${p1.nome} e ${p2.nome} tem a mesma idade`
// }

// const carlos = new Pessoa('Carlos', 22, 1.75)
// const mari = new Pessoa('Mari', 19, 1.60)

// console.log(compararPessoas(carlos, mari))


// class carro{
//     marca;
//     cor;
//     gastoMedioPorKm;

//     constructor(marca, cor, gastoMedioPorKm){
//         this.marca = marca;
//         this.cor = cor;
//         this.gastoMedioPorKm = gastoMedioPorKm;
//     }

//     calcuandoGastoMedioPorKm(distanciDaViagem, precoDaGasolina){
//         return `O valor gasto para realizar esse percurso é: ${distanciDaViagem * this.gastoMedioPorKm * precoDaGasolina} R$`
//     }
// }

// const Uno = new carro('Fiat', 'Preto', 1/12)



// console.log(Uno.calcuandoGastoMedioPorKm(70, 5))


// class Pessoa{
//     nome;
//     peso;
//     altura;

//     constructor(nome, peso, altura){
//         this.nome = nome;
//         this.peso = peso;
//         this.altura = altura;
//     }

//     pessoaDiz(){
//         return `Meu nome é ${this.nome} e meu IMC é ${this.peso / (this.altura * this.altura)}`;
//     }
// }

// const joao = new Pessoa('João', 70, 1.75)

// console.log(joao.pessoaDiz())


// const alunos = ['Carlos', 'Mari']

// alunos.push('Alexandre')

// alunos[3] = 'Miranda'

// //remove o ultimo
// //alunos.pop()

// //remove o primeiro
// //alunos.shift()

// console.log(alunos)

// const notas = []

// notas.push(6)
// notas.push(8)
// notas.push(8)

// let soma = 0

// for(let i = 0; i < notas.length; i++){
//     soma = soma + notas[i]
// }

// let media =soma / notas.length
// console.log(media.toFixed(2))

// let n1 = 2

// for(let i = 1; i <= 10; i++){
//     let soma = n1 + i
//     console.log(`${n1} + ${i} = ${soma}`)
// }

// let numeros = [1, 2, 3, 4, 3, 6, 54]

// for(let i = 0; i <= numeros.length; i++){
//     let verificaNumero = numeros[i]
//     if(verificaNumero % 2 === 0){
//         console.log(`${verificaNumero} É PAR`)
//     }
// }