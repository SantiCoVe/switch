/*Crea un programa que muestre un menú con varias opciones y permita al usuario
seleccionar una de ellas. Utiliza switch para ejecutar una acción diferente en función de la opción seleccionada por el usuario */
let menu = prompt("Selecciona una opción:\n1. Saludar\n2. Sumar dos números");
switch (menu) {
    case "1":
    console.log("Hola como estas?")
    break;
    case "2":
    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    resultado = num1 + num2;
    console.log("El resultado de la suma es: ",resultado)
    break;
    default:
    console.log("Opcion no valida")
}