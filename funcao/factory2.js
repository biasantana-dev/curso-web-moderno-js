function criarProduto(nome, preco) { // poderia passar o parâmentro desconto com o valor padrão aqui também
   return {
      nome,
      preco,
      desconto: 0.1
   }
}

console.log(criarProduto('Notebook', 3199.49));
console.log(criarProduto('TV', 3990.90));
console.log(criarProduto('Celular', 1997.99));


