/* Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
y otra con estructura switch-case.*/
let numero = parseFloat(prompt("Ingrese el numero"));
let par = numero%2==0
if (par== true) {
    console.log("El numero es par");
}
else{
    console.log("El numero es impar");
}