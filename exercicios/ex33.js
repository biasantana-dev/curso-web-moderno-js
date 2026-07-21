let vetorInteiro = [1, 2, 3, 4];
let vetorString = ['Marcos', 'Gabriela', 'João', 'Alice'];
let vetorDouble = [8.5, 2.1, 4.2, 5.6]; 

function concatenar (...el) {
   let resultado = [];
   for (let i = 0; i < el.length; i++) {
      resultado = resultado.concat(el[i]);
   }
   return resultado;
}
;
console.log(concatenar(vetorInteiro, vetorString, vetorDouble));