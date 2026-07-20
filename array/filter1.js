const produtos = [
   { nome: 'Notebook', preco: 2499, fragil: true },
   { nome: 'IPad Pro', preco: 4199, fragil: true },
   { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
   { nome: 'Copo de Plastico', preco: 18.99, fragil: false }

];

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil; // não precisa de comparação, pois já retorna true

console.log(produtos.filter(caro).filter(fragil));