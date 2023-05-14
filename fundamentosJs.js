// let a = 2;
// let b = new Number(1);
// let c = 7.19;
// let d = "5.6"

// console.log(a,b);
// console.log(c.toFixed(1));
// console.log(parseInt(c));

// console.log(typeof c, typeof d)
// console.log(a+b)
// console.log(c+parseInt(d))
// console.log(c+parseFloat(d))


// //booleanos

// let verdadero = true;
// let falso = false;

// console.log(Boolean(0));
// console.log(Boolean(-7));
// console.log(Boolean(""));
// console.log(Boolean("."));

// /////////null undefined NaN
// undefined representar un valor ausente pero esta no ha sido inicializada
// null si es inicializada pero es un valor ausente

// let indefinida;
// let nula = null;

// NaN not a number
// let noEsUnNumero


// //////////////Funciones/////////////////

// funciones son bloques de codigo autocontenido. tambien son definidas como objetos. se pueden pasar como argumento.
// funciones declaradas
// function estoEsUnaFuncion(){
//     console.log("Uno");
//     console.log("Dos");
//     console.log("Tres");
// }

// /invocacion de funciones
// estoEsUnaFuncion(); 

// /funcion con parametros

// function saludar(nombre,edad){
//     console.log(`hola mi nombre es ${nombre} y tengo ${edad} anios`);
// }

// saludar("pedro", 8);
// saludar();


// Funciones declaradas VS funciones expresadas
// function funcionDeclarada(){
//     console.log("Esto es una funcion declarada, puede invocarse en cualquier parte del codigo, incluso antes de que la funcion sea declarada");

// }

// funciones expresadas

// const funcionExpresada = function () {
//     console.log("Esto es una funcion expresada, es una funcion que se le ha asignado  como valor a una variable, si invocamos esta funcion antes de su definicion JS nos dira...");
    
// }

// funcionExpresada();


////////////////////arreglos


// const a = [];
// let b = [1, true, "Hola"];

// console.log(a);
// console.log(b.length);

// /// otra forma
//  const c = Array.of("X","Y","Z",8,9,7);
//  const d = Array(100).fill(false);

// el metodo push agrega un elemento al final del arreglo

/// el metodo pop eliminar el ultimo elemento del arreglo

// colores.forEach(function(el) {
    
// });
  

///////////////////objetos

// let a = new String("Hola");

// let jimmy = {
//     nombre: "Jimmy",
//     apellido: "Oliva",
//     edad: 24,
//     pasatiempos: ["comer", "ejercitarse", "coding"],
//     soltero: true,
//     contacto:{
//         email: "jimmy@yopmail.com",
//         twitter: "@jimmy",
//         movil : "9999999"

//     },
//     saludar:function () {
//         console.log(`hola :)  `);
        
//     },

//     decirMiNombre: function(){
//         console.log(`hola mi nombre es ${this.nombre} y me puedes llamar al ${this.contacto.movil}`)
//     }

// }
// console.log(jimmy);
// console.log(jimmy["nombre"]);
// console.log(jimmy.apellido);
// console.log(jimmy.edad);
// console.log(jimmy.pasatiempos[1]);


// jimmy.decirMiNombre();
// console.log(jimmy.hasOwnProperty("nombre"));

////////////////////////////////////////////////operadores aritmeticos


// let a = 5+5;

// console.log(a); 


// = es asignacion de variable
// == comparacion de valores
// === comparacion de tipo de dato y valor

// operador unario


// i=i+1;
// ++i;

// i=i-1;
// --i

//////////////////CONDICIONALES


// let edad = 17;
// if (edad>17){
//     console.log("Eres mayor de edad");
// }else{
//     console.log("Eres menor de edad");
// }


// let edad2 = 18;
// if (edad2>=17){
//     console.log("Eres mayor de edad");
// }else{
//     console2.log("Eres menor de edad");
// }


//////////////////////////loops


// let cont =1;

// while(cont<=10){
//     console.log(cont);
//     cont++;
// }

// for(let i=0;i<10;i++){
//     console.log("for "+i)
// }

//  let numeros= [10,20,30,40,50,60,70,80,90];

// for(let i; i<numeros.length;i++){
//     console.log(numeros[i])
// }

// const jimmy={
//     nombre: "Jimmy",
//     apellido : "oliva",
//     edad: 24
// }

// for(const propiedad in jimmy){
//     console.log(`key: ${jimmy.nombre}, value: ${[jimmy.propiedad]}`);
// }

// for in es mas para objetos


// for(const elemento of numeros){
//     console.log(elemento);
// }

// let cadena= "Hola mundo";

// for(const caracter of cadena){
//     console.log(caracter);
// }

// for of es mas para arreglos





/////////////////////////////////////////////try catch




// try{
//     console.log
// }
// catch(error)
// {
//     console.log("Error ocurrido")
// }
// finally{
//     console.log("Este siempre se ejecutara en el final de un bloque try-catch");
// }

// try{
//     let numero =10;
//     if(isNaN(numero)){
//         throw new Error("El caracter introducido no es un numero");
//     }
// }
// catch(error)
// {
//     console.log(`se produjo el siguiente error: ${error}`);
// }
// finally{
//     console.log("Este siempre se ejecutara en el final de un bloque try-catch");
// }

// break cierra el corta el flujo

// continue omite esa instruccion

///////////////destructuracion


// const[one, two, three] =numeros;


// const jimmy={
//     nombre: "Jimmy",
//     apellido : "oliva",
//     edad: 24
// }

// let{nombre, edad, apellido} = persona;
// console.log(nombre,apellido,edad);



//////////////////////objetos literales






/////////////////// rest operadores spread

///rest son una forma de virtualmente ir agregando parametros infinitos a una variable o funcion.

// function sumar (a, b, ...c){
//     let resultado = a+b;
//     c.forEach(function(n){
//         resultado+= n
//     });
//     return resultado;

// }

// console.log(sumar(1,2))
// console.log(sumar(1,2,3))
// console.log(sumar(1,2,4,5,6))


//////////////////////////////////spread operator


// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9,0];

// console.log(arr1,arr2);

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);


/////////////////////////////////////arrow functions

// const saludar =() =>console.log(`Hola`);
// const saludar2 =(nombre) =>console.log(`Hola ${nombre}`);

// saludar2("imra");


// let sumar = function(a,b){
//     return a+b;
// }

// const funcionVariasLineas =() => {
//     console.log("Uno")
//     console.log("dos")
//     console.log("tres")

// }

// let numero = [1,2,3,4,5];

// numero.forEach((el,index) => console.log(`${el} esta en la posicion ${index}`) );

// const Perro = {
//     nombre: "kenai",
//     ladrar(){
//         console.log(this)
//     }
    
// }

// Perro.ladrar();



////////////////////////////////prototipos

//////clases
/////objetos
///////atributos --- es una caracteristica o propiedad del objeto
///////metodos------ son las acciones que un objeto puede realizar

// const animal ={
//     nombre: "Snoopy",
//     sonar(){
//         console.log("Hago sonidos porque estoy vivo");
//     }
// }

// console.log(animal);


// ////////////// clases

// function Animal(nombre, genero){
//     this.nombre = nombre;
//     this.genero = genero;

//     this.sonar=function(){
//         console.log("Hago sonidos porque estoy vivo");

//     }
// }


// const snoopy = new Animal("Snoopu", "macho");
// lolabunny = new Animal()


/////////////// herencia prototipica


// function Perro(nombre, genero,tamanio){
//     this.super = Animal;
//     this.super(nombre, genero);
//     this.tamanio = tamanio;
// }

//sobrescritura del etodo del prototype del padre en el hijo
// Perro.prototype.sonar = function(){
//     console.log("Soy un perro y mi sonidos es un ladrido");
// }

// Perro.prototype.ladrar = function(){
//     console.log("Guauuu guauuu")
// }


// //Perro esta heredando de Animal
// Perro.prototype = new Animal();
// Perro.prototype.constructor = Perro;



//////////////////////Ejemplo de herencia prototipica de clases////////////////////////

///funcion constructoraa

// class Animal{

//     //el constructor es un metodo especial que se ejecuta en el momento de instanciar a la clase
//     constructor(nombre, genero){
//         //atributos
//         this.nombre = nombre;
//         this.genero = genero;    
//     }

//     //Metodos
//     sonar(){
//         console.log("Hago sonidos por que estoy vivo");
//     }

//     saludar(){
//         console.log(`Hola me llamo ${this.nombre}`);
//     }


// }


// class Perro extends Animal{
//     constructor(nombre, genero, tamanio){
//     //con el metodo super() se manada a llmaar el constructor de la clase padre
//     super(nombre, genero);
//     this.tamanio = tamanio;
//     this.raza = null;

//     }

//          sonar(){
//             console.log("Sou un perro y mi sonido es un ladrido");
//          }

//          ladrar(){
//             console.log("guau guau!!");
//          }

//          //Un metodo estatico se pueden ejecutar sin necesidad de instanciarla classe
//          static queEres(){
//             console.log("Esta es una explicacion de que es un perro")
//          }


//          // los metodos getters y setter son metodos especiales para estableces y obtener valores de atributos de nuestra clase

//          get getRaza(){
//             return this.raza;
//          }

//          set setRaza(raza){
//             this.raza = raza;
//          }

// }

// const mimi = new Animal("Mimi", "Hembra"),
// scooby = new Perro("Scooby", "Macho", "Gigante");

// console.log(mimi);
// mimi.saludar();
// mimi.sonar();
// console.log(scooby)


// Perro.queEres();

// scooby.saludar();
// scooby.sonar();
// scooby.ladrar();

// console.log(scooby.getRaza);
// scooby.setRaza = "Gran Danes"
// console.log(scooby.getRaza);

///////////////////objeto console ////////////////////////////////

// console.log("Este es un registro de lo que ha pasado");
// console.error("Este es un mensaje de error");
// console.warn("Este es un mensaje de aviso");
// console.info("Este es un mensaje informativo");
// console.clear("Este limpia la consola");
// console.dir(window); // muestra todos los objetos, constructores y todo del objeto window
// console.dir(document); // muestra todo lo del dom 
// console.table(Object.entries(console).sort());


// const vocales = ["a","e","i","o","u",];
// const numeros = [1,2,3,4,5];

// console.table(numeros);
// console.table(vocales);

// console.time("tiempo que toma");

// const array = array[1000];

// for(let i = 0;i < array.length; i++){
//    array[i] = i;
// }

// console.timeEnd("tiempo que toma"); // ese tiempo que toma es como un alias


// for(let i = 0;i < array.length; i++){
//    array[i] = i;
// }


// let x = 1, y =2, pruebaxy ="Se espera que X siempre sea menor que Y";

// console.assert(x<y, {x,y,pruebaxy}) // este sirve para hacer pequenias pruebas




//////////////////////////////////objeto Date ///////////////////////////////////

// let fecha = new Date();
// console.log(fecha.toDateString());
// console.log(fecha.toLocaleDateString());
// console.log(fecha.getUTCDate());
// console.log(fecha.getTimezoneOffset());
// console.log(date.now());

// //Momentjs.com para cuestiones de horas

// let cumple = new Date(1998,9,29);
// console.log(cumple)

/////////////////////operador cortocircuito////////////////


// cortoCicuito con OR cuando el valor de la izq en la expresion siempre pueda validar a true, es el valor que se cargara por defecto

// function saludar(nombre){
//     nombre = nombre || "Desconocido"
//     console.log(`Hola ${nombre}`);
// }

// saludar("John");
// saludar();
// console.log(false||"Valor de la derecha");

// cortoCicuito con AND cuando el valor de la izq en la expresion siempre pueda validar a false, es el valor que se cargara por defecto


// function saludar2(nombre){
//     nombre = nombre || "Desconocido"
//     console.log(`Hola ${nombre}`);
// }

// saludar2("John");
// saludar2();
// console.log(false && "Valor de la derecha");


/////////////////////////////////Confirm, alert, prompt/////////////////////


// console.log(window)
// // alert("Hola este es una alerta");
// // confirm("Hola este es una confirmacion");
// // prompt("Este es un prompt y permite ingresar");
// let alerta = alert("alert"),
// confirmacion = confirm("Confirm"),
// aviso+ prompt("esto es una aviso");

// console.log(alerta);
// console.log(confirmacion);
// console.log(aviso);




///////////////////////////////////////expresiones regulares//////////////////////

//las expresiones regulares se usan bastante para la busqueda de caracteres dentro de una cadena


// hay dos formas, de la forma directa y la forma constructora

//constructora

// let cadena = "lorem ipsum no se que"

// let expReg = new RegExp("lorem", "");

// // segunda forma
// let expReg2 = /lorem{1}/ig;

// console.log(expReg.test(cadena));
// console.log(expReg.exec(cadena)); // devuelve un arreglo


/////////////////////////////////////////////////funciones anonimas autoejecutables

// (
//     function () {
//         console.log("Mi primer IIFE");

//     })();

// ( function(d,w,c)
// {
//     console.log("Mi segundo IIFE");
// })(document,window,console);




//////////////////////////////////// modulos import/ export