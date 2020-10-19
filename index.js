let arrayVacio = [];
let arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
let arrayNumerosPares = [0,2,4,6,8];
let arrayBidimensional = [[0,1,2],["a","b","c"]];

function suma(num1,num2){
    return num1 + num2;
}
//console.log(suma("2",4));

function potenciacion(a,b){
    let i = 0;
    let resultado = 1;
    while ( i < b ){
        resultado *= a;
        i++;
    }
    return (resultado);
}

//console.log(potenciacion(2,4));

function separarPalabras(holamundo) {
    return (holamundo.split(" "));
}

function repetirString(valor1,c){
    let i = 0;
    let resultado = "";
    while ( i < c ){
            resultado += valor1 ;
        i++;

    }
    return (resultado);
}
//console.log(repetirString("ja",4));
//repetirString(agua,2);

function esPrimo(num) {
    let i = 2;
    while (i < num) {
        if (num % i === 0)
            return false;
        i++;
    }
    return true;
}
//

function ordenarArray([]) {
return []
}

function ordenarArray(array) {
    let ordenado = false;
    //repito la comprobación hasta que no haya hecho ningún cambio
    while (!ordenado)
    {
        let i = 0;
        //presupongo que esta vez no haré ningún cambio
        ordenado = true;
        while (i < array.length - 1) {   
            //compruebo si tengo que cambiar 2 números de sitio
            if (array[i] > array[i + 1])
            {
                //intercambio ambos valores
                let aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
                //Anoto que he hecho cambios, por lo que volveremos a comprobar todo el array
                ordenado = false;
            }
            i++;
        }
    }
    //devuelvo el array ordenado
    return (array);
}

function obtenerPares(array){
    let i = 0 
    while ( array [] ) {

    }
    return array;
}




//
let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
let holaMundo = ["Hola","Mundo"];
let loGuardoTodo = ["hola","que",23,42.33,"tal"];
let arrayDeArrays = [[756,"nombre"],[225,"apellido"],[298,"direccion"]];
