/*Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
triangulo o no. Realice una version con condicionales y otra con estructura switch-case*/
let primerAngulo = parseFloat(prompt("Ingrese el primer angulo"));
let segundoAngulo = parseFloat(prompt("Ingrese el segundo angulo"));
let tercerAngulo = parseFloat(prompt("Ingrese el tercer angulo"));
let suma = (primerAngulo+segundoAngulo+tercerAngulo) == 180 
switch (suma) {
    case true:
        console.log("Es un triangulo");        
        break;
        default:
            console.log("No es un triangulo");
        break;
}