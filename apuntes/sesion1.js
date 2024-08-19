
// let 
let edadUsuario=25;
console.log()
edadUsuario=26; // si puedo volver a modificarlo  motear un objeto 

//const
const nombreUsuario="Maria"; //variable que no puede cambiar, no puedo asignarle otro valor 
console.log("nombre"=nombreUsuario)

//condicion vieja js nativo
if (condition) {
    
} else {
    
}

//condicion ecmascript 6

//condition ? return true : return false ---condicion terniaria---

// ejercisio

const edadMinima=18;
const usuario={"nombre":"maria", "edad": 20}

if (usuario.edad >= edadMinima){
    console.log("puedes entrar a la discoteca : ")
} 
if (usuario.nombre === "Maria") {
    console.log("puedes entrar a la discoteca c: ")
} 
else {
    console.log("no puedes entrar a la discoteca c: ")
}
//finally {
 // se suele utlizar para casos TRY-CATCH 
//}

const numero=2; 
const numeroStr="2";

console.log(typeof numeroStr); // typeof se utiliza para saber el tipo de variable de la persona 

//---modo estritcto--
// operador '==='

//operador terciario 

const bandera = true; // cabe recalcar que si coloque una constante ecmascript ya se asume que se coloca en true 
bandera ? console.log("viva colombia") : console.log("ya no vive en colombia"); // es un if else
!bandera ? console.log("viva colombia") : console.log("ya no vive en colombia");; // es una negacion por que "!"

const pais ="colombia";
const fruta="mango"
const comida= "bandeja paisa"

bandera && pais == "colombia" ? crossOriginIsolated.log("viva colombia") : conosola.log("ya no vive en colombia") // ambos operadores deben de ser verdaderos
bandera && pais == "colombia" ? crossOriginIsolated.log("viva colombia") : conosola.log("ya no vive en colombia")

bandera || pais === "colombia" ?  console.log("viva colombia") : conosola.log("ya no vive en colombia")// || or validar cualquiera de las dos 
//(bandera && pais === "colombia") || comida === "mango" ? console.log("viva colombia") : conosola.log("ya no vive en colombia")

let name= null
const name2 = name ?? "defecto"
console.log(name2) // ?? imprime el primer valor que no sea nul o unedefine, no considera al 0 como uno de ellos 
//a diferencia del ||, que si considera al 0 como falso.

const totalPares= 0
const totalImpares= 0

constInicio= 1;
const fin=20;

// for in posisiciones 
// for of valores

for (let i = inicio; i <= fin; i++) {
    if (i % 2 == 0){
        totalPares++;
        console.log(`el numero ${i} es par `);
    } else{
        totalImpares++;
        console.log(`el numero${totalPares} es impar`);
    }

}

// while

const limite= 100;
let suma=0;
let numero1=1;

while (suma > limite){
    suma += numero 
    console.log(`numero ${numero}, suma acumulada: ${suma}`)
    numero ++
}
console.log(`la suma supero el limite de ${limite}`)
console.log(`el ultimo numero sumado fue ${numero1-1}`)

//==============funciones==============
 
// function name(params) { funcion antigua
    
// }

const calculadoraAreaCirculo= (radio) => {
    const area =math.PI * Math.pow(radio,2);
    return area
}

const radio=5;
const respuesta =calculadoraAreaCirculo(radio)
console.log(respuesta)

const calaculadaoraaa =(a,b) => {
    const suma= a+b
    return suma;

}

const respuestaSuma=calaculadaoraaa(5,5)
console.log(respuestaSuma)

//==============arreglos==============
 //nombre=clave y valor puede ser un areglo
 //los objetos tienen clave y valor 
 //los arreglos no tiene claves

 let tareas = ["lavar la ropa","hacer la compra","estudiar js"]
 console.log("1.",tareas)
 tareas.push("llamar a mi mama")
 tareas.push("2.",tareas)
 tareas.shift()//eliminar el primero valor del arreglo 
 console.log("3.",tareas)
 //tareas.pop 
 //.filter solo se ve lo que le corresponde al usuario
 //fint
 //.map recorre todo y lo ve imprimiendo 

 const indice= tareas.indexOf("hacaer la compra")// recorre uno por uno y devuelve la posisicon 
 if (indice !== -1){
    tareas.splice(indice, 1) //elimina el elemento buscado, se ubica en la posicion 1 y elimina solo 1 
 }
 console.log("4.",tareas)

 tareas.map((tarea) => {
    console.log(tarea)
 }) // se imprimen todos los datos 
 
