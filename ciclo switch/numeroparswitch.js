/* Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
y otra con estructura switch-case.*/
let numero = parseFloat(prompt("Ingrese el numero"));
let par = numero%2==0
switch (par) {
    case true:
        console.log("Este numero es par");
        break;

 default:
    console.log("Este numero es impar");
        break;
}