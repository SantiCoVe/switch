/*Crea un programa que convierta una longitud en una unidad de medida a otra. El programa debe trabajar con el valor de la longitud, la unidad de medida original y la unidad de medida de destino. Utiliza switch-case para determinar la unidad de medida original y la unidad de medida de destino y realizar la conversión correspondiente.*/
let numero = parseFloat(prompt("Ingrese la longitud"));
let unidadMedida = prompt("Ingrese la unidad de medida final");

switch (unidadMedida){
    case "milimetros":
        convertir = numero / 10; 
        console.log(numero,"mm en cm",convertir, "cm");
        break;

    case "metros":
        convertir = numero / 1000;
        console.log(numero,"m en km",convertir, "km");
        break;

    case "decametros":
        convertir = numero / 10 
        console.log(numero,"dc en hm",convertir, "hm");
        break;

    default:console.log("No ingreso una longitud valida");
        break;
}