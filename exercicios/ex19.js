function avaliarPedido(codigoItem, quantidade) {
   switch (codigoItem) {
      case 100: 
         return quantidade * 3;
      case 200: 
         return quantidade * 4;
      case 300: 
         return quantidade * 5.5;
      case 400: 
         return quantidade * 7.5;
      case 500: 
         return quantidade * 3.5;
      case 600: 
         return quantidade * 2.8;
      default: 
         return 'Produto não existe.';
   }
}

console.log(avaliarPedido(100, 4));
console.log(avaliarPedido(200, 1));
console.log(avaliarPedido(300, 2));
console.log(avaliarPedido(400, 5));
console.log(avaliarPedido(500, 3));
console.log(avaliarPedido(600, 2));
console.log(avaliarPedido(700, 2));