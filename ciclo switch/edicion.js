/*Crea una aplicación que tenga varios estados y permita al usuario cambiar entre ellos. Utiliza switch para cambiar el estado actual de la aplicación y ejecutar diferentes acciones en función del estado actual. Por ejemplo, si la aplicación está en modo "edición", permite al usuario editar los datos, pero si está en modo "visualización", muestra los datos sin permitir la edición. */
console.log("Estado 1 = edicion");
console.log("Estado 2 = visualizacion");
let estado = parseInt(prompt("Ingrese el numero del estado que desea ejecutar"));
let nombre = "Juan Carlos";
let edad = 21;
let estadoCivil = "soltero";
console.log(nombre);
console.log(edad);
console.log(estadoCivil);
switch (estado) {
    case 1:
        console.log("Usted tiene derecho a editar los datos");
        nombre = prompt("Edite el nombre");
        edad = parseInt(prompt("Edite la edad"));
        estadoCivil = prompt("Edite el estado civil");
        console.log("El nuevo nombre es", nombre);
        console.log("La nueva edad es", edad);
        console.log("El nuevo estado civil es", estadoCivil);
        //Permitir edicion de los datos
        break;
    case 2:
        console.log("Usted solo puede visualizar los datos sin posibilidades de editar");
        break;
    default: 
    console.log("Ingrese un estado valido");
        break;
}