//==============con el siclo for==============

// const nombre = (palabra) =>{
//    let contador=0
//     for (var i = 0; i < palabra.length; i++) {
//         contador+=1
//         console.log(contador, " ", palabra[i]);
//     }
// }

// palabra="Anny Sofia Montaño Jimenez";
// nombre(palabra)


//==============con el siclo while ==============

// const nombre = (palabra) =>{
//    let i=0;
//    let contador=0
//    while (i < palabra.length) { 
//     contador+=1
//     console.log(contador, " ", palabra[i]);
//     i++
//    }
// }

// palabra="Anny Sofia Montaño Jimenez";
// nombre(palabra)


//==============no cuente los espacios entre las letras ==============
const nombre = (palabra) => {
   let i = 0;
   let contador = 0;
   while (i < palabra.length) {
       if (palabra[i] !== ' ') {  
           contador++;
           console.log(contador, palabra[i]);
       }
      i++;
   }
}

nombre("Anny Sofia Montaño Jimenez");



