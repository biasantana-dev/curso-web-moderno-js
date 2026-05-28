function calcularValor(idade) {
   if (idade < 10) {
      return 180; 
   } else if (idade >= 10 && idade <= 30) {
      return 150;
   } else if (idade > 30 && idade <= 60) {
      return 195;
   } else if (idade > 60) {
      return 230;
   }
}

console.log(calcularValor(5));
console.log(calcularValor(22));
console.log(calcularValor(49));
console.log(calcularValor(71));