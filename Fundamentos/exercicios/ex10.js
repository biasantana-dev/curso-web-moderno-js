function verificarNumero(numero) {
   if (numero % 3 === 0) {
      return true;
   } else {
      return false;
   }
}

console.log(verificarNumero(12));
console.log(verificarNumero(5));
console.log(verificarNumero(15));
console.log(verificarNumero(2));
console.log(verificarNumero(90));