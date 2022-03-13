'user strict'

// con comillas es un string(cadena de texto) sin comillas en el caso que sea un numero es un entero y en caso de que sea texto es una variable

/* let numero1=24;
numero2=30

document.write(numero1+numero2)
*/

// variables
//una variable es un contenedor de informacion
/* 
var pais = "venezuela";
var continente = "america latina";
var antiguedad= "2022";
// la variable pais y continente es un ejemplo 
//de concatenacion de dos cadenas de texto.
var pais_y_continente = pais+'  '+ continente;
let prueba ="hola";
alert("hola");

pais = "japon";

continente = "asia";
console.log(pais, continente, antiguedad);

alert(pais_y_continente); */

//pruebas con let y var

//prueba con var

/* var numero = 40;
    console.log(numero) // valor 40
if(true);
    var numero =50;
    console.log(numero); // valor 50

    console.log(numero); //valor 50
//prueba con let

var texto = "curso de java script";
console.log(texto); // valor ""

if(true){
    let texto = "sigo con el curso";
    console.log(texto); // sigo con el curso
}

console.log(texto); */ //valor curso de java script

// var es global, let solo afecta en un bloque concreto

//constantes, como una variable, pero el valor nunca cambia

/* var web = "https://learndigital.withgoogle.com/activate/course/web-development-II/module/1393";


const ip = "192.88.0.12";

web = "https://www.google.co.ve/";

console.log(web, ip); */

//operadores 
/* var numero1 = 7;
var numero2 = 12;

var operacion = numero1 * numero2;
alert("el resultado de la operacion es "+operacion); */

// tipos de datos

/* var numero_entero = 44;
var cadena_texto = "hola que tal"; */ // se pueden intercambiar comillas "dobles con dobles"'simples con simples'
/* var verdadero_o_falso = false;

var numero_falso = "33";



console.log(Number(numero_falso)+7) */; //parseFloat es para decimales string convierte enteros a string


/* console.log(typeof numero_entero);
console.log(typeof numero_falso);
console.log(typeof verdadero_o_falso);
console.log(typeof cadena_texto); */

//condicionales
// si A es igual a B... hace algo(lo que tu le pongas)
//si pasa esto

/* var edad = 12;
var nombre = 'Marlon Rivera'; */
/* operadores relacionales
mayor: >
menor: <
mayor o igual: >=
menor o igual <=
igual: ==
diferente: != */

/* if(edad >= 18){
    //es mayor de edad
    console.log(nombre+" tiene "+edad+" anos es mayor de edad");

    if(edad <= 33){
        console.log("todavia eres milenial");
    }else if( edad >= 70){
            console.log("you old man");
    }else{
        console.log("ya no eres milenial");
    }
    


}else{
    //es menor de edad
    console.log(nombre+" tiene "+edad+" anos es menor de edad");
}
 */


/*
operadores logicos

AND(Y): &&
OR(O): ||
negacion: !
*/

// negacion

/* var year = 2018;

if(year != 2016){
    console.log("el ano no es 2016 es realmente:" +year); */
//}

// AND

/* if(year >= 2000 && year <= 2020){
    console.log("estamos en la era actual");
}else{
    console.log("estamos en la era post-moderna"); */
//}

//OR

/* // if(year == 2008 || (year >= 2018 && year == 2028)){
     console.log("el ano acaba en 8");
 }else{
//     console.log("ano no registrado"); */
/* } */


// aun no se como hacer que funcione REVISAR MAS TARDE
/* var edad =40;
var imprimir ="";

switch (edad) {
	case edad:18
		imprimir ="acabas de cumplir la mayoria de edad";
		break;
	case edad:25
		imprimir ="ya eres un adulto";
		break;
    case edad:40
        imprimir ="crisis de los cuarenta";
        break;
    case edad:75
        imprimir ="ya eres un anciano";
        break;
	default:
		imprimir ="tu edad es neutral";
        break;
}

console.log(imprimir) */

//bucles for
// UN BUCLE Es un trozo de codigo que se va a estar ejecutando un numero indefinido de veces (mas o menos)

/* var numeros = 100;

for(var i = 0; i <= numeros; i++){
    console.log("vamor por el numero" +i);
} */

//bucle while
 /* var year =2018;
while(year != 1999){
    //ejecuta esto
    console.log("estamos en el ano: " +year);
    if(year == 2000){
        break;
    }
    year--;  */
//}

//do while
/* var years = 30;
do{
    alert("solo cuando sea diferente a 20");
    years--;
}while(years > 25) */

//ALERTA

/* alert("esta es mi alerta!!"); */

//CONFIRMACION

/* var mi_resultado = confirm("estas seguro de querer continuar")
    console.log(mi_resultado); */

// INGRESO DATOS

/* var mi_resultado2 = prompt("que edad tienes?", 18);
    console.log(mi_resultado2) */

/* programa que pida dos numeros y que nos diga cual es el
mayor, el menor, y sin son iguales
PLUS que si los numeros no sun numeros, menores o iguales a 0,
nos los vuelva a pedir*/
// PRIMER EJERCICIO
/* var numero1 = parseInt(prompt("introduce el primer numero", 0));
var numero2 = parseInt(prompt("introduce el segundo numero", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2) ){
    numero1 = parseInt(prompt("introduce el primer numero", 0));
    numero2 = parseInt(prompt("introduce el segundo numero", 0));

}

if(numero1 == numero2){
    alert("estos numeros son iguales");
}else if(numero1 > numero2){
    alert("el numero mayor es " +numero1);
    alert("el numero menor es " +numero2);
}else if( numero2 > numero1);

else{
    alert("introduce valores correctos");
} */

/*utilizando un bucle, mostrar la suma y 
la media de los numeros introducidos, hasta introducir 
un numero negativo y ahi mostrar el resultado*/

/* var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("introduce numeros hasta que metas uno negativo", 0));

    if(isNaN(numero)){
        numero = 0;

    }else if(numero >=0){
        suma = suma + numero; //suma += numero;

        contador++;
    }
    console.log(suma);
    console.log(contador);

}while(numero >= 0);

alert("la suma de todos los numero es: " + suma);
alert("la media de todos los numeros es: "+ (suma/contador)); */

//ejercicio numero 2

/*hacer un programa que muestre todos los numeros
entre 2 numeros + por el usuario*/

/* var numero1 = parseInt(prompt("introduce el primer numero",0));
var numero2 = parseInt(prompt("introduce el segundo numero", 0));
 document.write("<h1>De"+numero1+" a "+numero2+" estan estos numeros: </h1>");
for(var i = numero1; i <= numero2; i++){
    document.write(i + "</br>");} */
//ejercicio numero 3

/*mostrar todos los numeros impares que hay entre 
dos numeros introducidos por el usuario*/

/* var numero1 = parseInt(prompt("introduce el primer numero aqui", 0));
var numero2 = parseInt(prompt("introduce el segundo numero aqui", 0));

while( numero1< numero2){
    numero1++;

    if(numero1 % 2 != 0){
        console.log("el "+ numero1 +" es impar");
    }
} */

/*
hacer un programa que muestre todos los numeros divisores de un numero(introducidos en un prompt)
*/ 

/* var numero =parseInt(prompt("introduce aqui tu numero", 1));

for( var i = 1; i <= numero; i++){

    if(numero%i == 0){
        console.log("divisor" + i);
    }
    
} */

// ejercicio numero 5

/* que nos diga si un numero es par o impar

1- ventana porpmt
2- si no es valido que nos pida de nuevo el numero
*/

/* var number = parseInt(prompt( "coloca aqui un numero", 0));

while(isNaN(number)){
    number = parseInt(prompt( "coloca aqui un numero", 0));
}

if(number % 2 == 0){
    alert("es un numero par");
}else{
    alert("es un numero impar");
} */

//ejercicio 6

/*
tabla de multiplicar de un numero introducido por pantalla

*/

/* var number = parseInt(prompt("de que numero quieres la tabla", 1));
    document.write("<h1> tabla del numero " + number +"</h1>")
for(var i = 1; i <= 10; i++){
    document.write(i+" x "+number+" = "+(i * number)+"</br>");
}

//todas las tablas de multiplicar

for(var c = 1; c <=15; c++){
    document.write("<h1> tabla del numero " + c +"</h1>")
for(var i = 1; i <= 10; i++){
    document.write(i+" x "+c+" = "+(i * c)+"</br>")
    }
} */
//ejercicio 7


/*calculadora
- pida dos numero por pantaya
-si introducimos uno mal que lo vuelva a pedir
-en el body de la pagina, en una alerta y por la consola
el resultado de sumar, restar, multiplicar y dividir 
esas dos cifras*/

/* var numero1 = parseInt(prompt("introduce el primer digito", 0));
var numero2 = parseInt(prompt("introduce el segundo digito", 0));

while( numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("introduce el primer digito", 0));
    numero2 = parseInt(prompt("introduce el segundo digito", 0));
}var resultado = "la suma es = " +(numero1 + numero2)+ "</br>"+ 
    "la resta es = " +(numero1 - numero2)+ "</br>"+
    "la multiplicacion es = " +(numero1 * numero2)+ "</br>"+
    "la division es = " +(numero1 / numero2)+ "</br>";

var resultadoCMD = "la suma es = " +(numero1 + numero2)+ "\n"+ 
    "la resta es = " +(numero1 - numero2)+ "\n"+
    "la multiplicacion es = " +(numero1 * numero2)+ "\n"+
    "la division es = " +(numero1 / numero2)+ "\n";

    document.write(resultado);
    alert(resultadoCMD);
    console.log(resultadoCMD); */

// TERMINARON LOS EJEERCICIOS CAP 1
function porConsola(numero1, numero2){

}

function porPantalla(numero1, numero2){
    
}
//FUNCIONES
/* Una funcion es una agrupacion reutilizable de un conjunto
de instrucciones*/
//definir la funcion cada que se llame
function calculadora(numero1, numero2, mostrar = false){

    // se ejecutan el conjunto de instrucciones
    if(mostrar == false);
    console.log("suma = " + (numero1 + numero2));
    console.log("resta = " + (numero1 - numero2));
    console.log("multiplicacion = " + (numero1 * numero2));
    console.log("divicion = " + (numero1 / numero2));
    console.log(mostrar);
    console.log("***********************************");
}else{
    document.write("suma = " + (numero1 + numero2));
    document.write("resta = " + (numero1 - numero2));
    document.write("multiplicacion = " + (numero1 * numero2));
    document.write("divicion = " + (numero1 / numero2));
    document.write(mostrar);
    document.write("***********************************");
}
    
    /* return "hola soy la calculadora"; */
    
   //console.log(calculadora(),calculadora());

//invocar o llamar a la funcion
//calculadora()
 calculadora(1, 4);
 calculadora(2, 5, true);
/* calculadora(12, 8);
calculadora(98, 2);


for(var i = 1; i <= 10; i++){
    console.log(i);

    calculadora(i, 8); */
//}