/*Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
condicionales y otra con estructura switch-case.*/
let numero = parseFloat(prompt("Ingrese el numero"))
let divisible = numero%5==0
switch (divisible) {
    case true:
        console.log("Este numero es divisible en 5");
        break;

 default:
    console.log("Este numero no es divisible en 5");
        break;
}