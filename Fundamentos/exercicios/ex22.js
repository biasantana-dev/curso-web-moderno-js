function calcularValor(mes, valor) {
   if (mes > 0 && mes < 13) {
      let atraso = mes - 1;
      return (valor * ((1 + (5/100))** atraso)).toFixed(2);
   } else {
      return 'Erro!';
   }
}

console.log(calcularValor(1, 200));
console.log(calcularValor(2, 200));
console.log(calcularValor(12, 200));
console.log(calcularValor(5, 200));
console.log(calcularValor(9, 200));

