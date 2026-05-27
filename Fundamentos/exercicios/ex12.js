function calcularFatorial(numero) {
   if (numero === 0 || numero === 1) return 1;
   let resultado = 1;
   for (let i = 2; i <= numero; i++) {
      resultado *= i;
   }
   return resultado;
}

console.log(calcularFatorial(5));
console.log(calcularFatorial(3));
console.log(calcularFatorial(10));
console.log(calcularFatorial(8));
console.log(calcularFatorial(7));
