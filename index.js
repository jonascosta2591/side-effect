let contador = 0

const sideEffect = () => { //O efeito colateral foi a soma de mais 1 a variavel contador
    contador++
}   
sideEffect()
console.log(contador)

function soma(a, b){ //Sem efeitos colaterais observaveis
    return a + b
}

console.log(soma(10,20))