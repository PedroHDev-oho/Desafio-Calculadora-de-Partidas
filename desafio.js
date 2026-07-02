//Desafio basico de logica da DIO 
/* O desafio consiste em fazer uma calculadora de partidas ranquada utilizando:
    -Variaveis
    -Laços de repetiçoes e condicionais 
    -Operadores    
    -Funçoes 

    ## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, 
o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

    Se vitórias for menor do que 10 = Ferro
    Se vitórias for entre 11 e 20 = Bronze
    Se vitórias for entre 21 e 50 = Prata
    Se vitórias for entre 51 e 80 = Ouro
    Se vitórias for entre 81 e 90 = Diamante
    Se vitórias for entre 91 e 100= Lendário
    Se vitórias for maior ou igual a 101 = Imortal

    ## Saída

    Ao final deve se exibir uma mensagem:
    "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

*/


function rankeada(Vit, Der)
{
    saldoRanked = Vit - Der
    return saldoRanked

}

let saldoVitorias = rankeada(110 , 30)

let nivel = ""

if(saldoVitorias <= 10)//Ferro
{
    nivel = "Ferro"
}else if(saldoVitorias >= 11 && saldoVitorias <= 20)//Bronze
{
    nivel = "Bronze"
}else if(saldoVitorias >= 21 && saldoVitorias <= 50)//Prata
{
    nivel = "Prata"
}else if(saldoVitorias >= 51 && saldoVitorias <= 80)//Ouro 
{
    nivel = "Ouro"
}else if(saldoVitorias >= 81 && saldoVitorias <= 90)//Diamante 
{
    nivel = "Diamante"
}else if(saldoVitorias >= 91 && saldoVitorias <= 100)//Lendario
{
    nivel = "Lendario"
}else if(saldoVitorias >= 101)//Imortal
{
    nivel = "Imortal"
}

console.log(`O Heroi tem um saldo de ${saldoVitorias} vitorias e está no nivel ${nivel}`)