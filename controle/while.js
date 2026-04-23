function getInteiroAleatorioEntre(min, max) {
   const valor = Math.random() * (max - min) + min;
   return Math.floor(valor);
}

let opcao = 0;

while(opcao != -1) { // Enquanto a expressão for verdadeira continue executando; pare quando a expressão for falsa...
   opcao = getInteiroAleatorioEntre(-1, 10); 
   console.log(`Opção escolhida foi ${opcao}.`);
} 

console.log('Até a proxima!');
