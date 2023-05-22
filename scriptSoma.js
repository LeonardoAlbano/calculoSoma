/*

    Capturar 2 numeros 
    e fazer as operações matematicas
    de soma, subtração, multiplicação,
    divisão e resto da divisão.

    e para cada operação, mostrar um alerta com o resultado.


*/


//capturar em stringer os numeros

let firstNumber = prompt('Digite o primeiro número:')
let secondNumber = prompt('Digite o segundo número:')


//conversão da stringer para numero
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)


const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("resultado da soma é: " + sum)
alert("resultado da subtração é: " + sub)
alert("resultado da multiplicação é: " + mult)
alert("resultado da divisão é: " + div)
alert("resultado resto é: " + restDiv)


if (sum % 2 == 0) {
    alert("O resultado é par!")
} else {
    alert("O numero é impar!")
}


if (firstNumber == secondNumber) {
    alert("Os Numeros são iguais")

} else {
    alert("Os numeros são diferentes")
}