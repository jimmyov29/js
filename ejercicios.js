// ejercicio 1 contar los caracteres de una cadena de texto
// mi metodo
// let cadena = "Hola como estas?";

// (cadena==="")? console.log("No hay una cadena"):console.log(cadena.length);
// function contarCaracteres(cadena=""){
//     if(!cadena){
//         console.warn("No ingresaste una cadena");
//     }
//     else{
//         console.info(`La cadena tiene ${cadena.length} caracteres`)
//     }

// }


// const contarCaracteres = (cadena="")=> (!cadena) ? console.warn("No ingresaste una cadena"):console.info(`La cadena tiene ${cadena.length} caracteres`);

// contarCaracteres("Hola como estas");





// ejercicio 2
// const funcionRecortar =(cadena = "", largo)=> console.log(cadena.slice(0,largo));

// funcionRecortar("cadena",2)
////////////////////////////////////////////////////////////////////////////////////
// const recortarTexto = ( cadena = "", long = undefined)=> (!cadena)? console.warn("falta la cadena"): console.info(cadena.slice(0,long));

// recortarTexto("Hola panas", 2);






//ejercicio 3

// const funcionSeparar =(cadena= "",caracterSeparador="") => console.log(cadena.split(caracterSeparador));
// funcionSeparar("esto es una cadena", " ");

// const cadenaAArreglo =(cadena="", separador = undefined) => (!cadena)?console.warn("No ingresaste cadena")
// :(separador === undefined)? console.warn("No ingresaste el separadador")
// :console.log(cadena.split(separador));

// cadenaAArreglo("este es un mensaje"," ");






//ejercicio 4

// const funcionRepetir4Veces =(cadena="", veces) =>{
//     let i=1;
//     while(i <= veces){
//         console.log(cadena);
//         i++;

// }

// }


// funcionRepetir4Veces("cadena", 4)



// const repetirTexto=(texto="",veces =undefined)=>{
//     if(!texto) return console.log("La cadena viene vacia");
    
//     if(veces === undefined) return console.log("No ingreso la cantidad de veces");

//     if(veces === 0) return console.log("No puede ser 0");

//     if(Math.sign(veces)===-1) return console.log("No se puede usar un negativo");

//     for(let i = 1; i<= veces; i++){
//         console.log(`${texto}, ${i}`)
//     }
    

// }

// repetirTexto("hola Mundo", 4);





//ejercicio 5


// const revertirCadena=(cadena="")=> console.log(cadena.split("").reverse().join(""));


// revertirCadena("Hola mundo")

// const invertirCadena=(cadena = "") => (!cadena) ? console.warn("No ingresaste cadena de texto")
// : console.log(cadena.split("").reverse().join(""));

// invertirCadena("esto es una cadena");





//ejercicio 6

// const contarPalabrasRepetidas=( cadena="", palabra ="")=> {
//     let contador= 0, i=0;
    
//     while(i!== -1){
//         i =cadena.indexOf(palabra,i);
//         if(i!==-1){
//             i++;
//             contador++;
//         }

//     }
//     return(console.log(`la palabra ${palabra} se repitio ${contador}`))
// }

// contarPalabrasRepetidas("hola hola hola","hola")



// const textoEnCadena = (cadena = "", palabra ="")=>{
//     if(cadena === "") return console.log("No ingreso la cadena");
    
//     if(palabra === "") return console.log("No ingreso la palabra");

//     let i=0, contador = 0;

//     while(i!== -1){
//         i = cadena.indexOf(palabra,i);
//         if(i!==-1){
//             i++;
//             contador ++;
//         }
//     }
//     return console.log(`la palabra ${palabra} se repite ${contador} veces`);
// }


// textoEnCadena("este es un texto y un ejemplo", "un");




///ejercicio 7 palindromo


// const palindromo= (cadena ="")=>{
//     if(!cadena) return console.log("Ingresa una palabra");

//     cadena = cadena.toLowerCase();
//     let alReves = cadena.split("").reverse().join("");

//     if(cadena === alReves) return console.log(`la cadena ${cadena} es un palindromo`);
//     else console.log("No es un palindromo");
// }

// palindromo("anas")





//ejercicio 8 programa que elimine cierto patron de caracteres de un texto


// const eliminarCaracteres= (texto= "", patron="")=> (!texto)?
// console.log("No se escribio la cadena"):(!patron)?
// console.log("No se escribio el patron"):
// console.log(texto.replace(new RegExp(patron, "ig"), ""));

// eliminarCaracteres("a1,a2,a3,a4", "a");






// ejercicio 9

// const aleatorio=()=>console.log(Math.round((Math.random()*100)+500))

// aleatorio();






//ejercicio 10


// const capicua = (numero=0)=>{
//     if(!numero) return console.log("No ingresaste un numero");
//     if(typeof numero !== "number") return console.log(`el numero ${numero} NO es un numero`);

//     numero = numero.toString();
//     let alReves = numero.split("").reverse().join("");

//     (numero === alReves)? console.log(" si es un numero capicua"): console.log(" no es un numero capicua");  

// }

// capicua(212)






//ejercicio 11 factorial


// const factorial=(numero = undefined)=>{
//     if(numero === undefined) return console.log("Debes ingresar un numero");
//     if(numero > 0){
//         let factorial = 1;
//         for(let i=numero ; i>1 ; i--){
//             factorial = factorial*i;
//             //tambien se puede poner factorial*=i;
//         }
//         return console.log(`el factorial de ${numero} es ${factorial}` );
//     } 
//     else {
//         console.log("El numero no puede ser 0 o un numero negativo");
        
//     }
// }

// factorial("5");






/// ejercicio 12   par o impar

// const numeroPrimo=(numero = undefined)=>{
//     if(!numero) return console.log("No ingresaste un numero");

//     if(typeof numero !== "number") return console.log("Tiene que ser una numero");

//     if(numero <=0) return console.log("El numero debe de ser mayor que 0");

//     let divisible = false;

//     for(let i=2; i<numero ; i++ ){
//         if((numero%i)===0)
//             divisible = true;
//             break;

//         } 
//     }

//     return(divisible)
//     ?console.log(`El numero ${numero} no es primo`)
//     :console.log(`El numero ${numero} si es primo`);
    
// }


// numeroPrimo(7)







////ejercicio 13


// const numeroPar=(numero = undefined)=> {
//     if(numero=== undefined) return console.log("no ingresaste un numero");
//     if(typeof numero !== "number") return console.log("Tiene que ser un numero");

//     return (numero%2 ===0)
//     ?console.log(`El numero ${numero} es PAR`)
//     :console.log(`El numero ${numero} es IMPAR`)
    

// }

// numeroPar(2)
// numeroPar(3)
