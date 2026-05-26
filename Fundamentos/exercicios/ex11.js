function calcularAnoBissexto(ano) {
   if (ano % 400 === 0) {
      return true;
   } else if (ano % 100 === 0) {
      return false;
   } else if (ano % 4 === 0) {
      return true;
   } else {
      return false;
   }
}

console.log(calcularAnoBissexto(1992));
console.log(calcularAnoBissexto(2001));
console.log(calcularAnoBissexto(2027));
console.log(calcularAnoBissexto(1888));
console.log(calcularAnoBissexto(1746));
console.log(calcularAnoBissexto(2064));