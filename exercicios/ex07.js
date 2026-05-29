function bhaskara(ax2, bx, c) {
   let resultado = [];
   let delta = (bx ** 2) - (4 * ax2 * c);

   if (delta < 0) {
      return 'Delta negativo';
   }

   let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
   let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
   resultado.push(x1);
   resultado.push(x2);

   return resultado;
}

console.log(bhaskara(1, -6, 5));
console.log(bhaskara(3, -5, 12));
