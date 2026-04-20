// Função sem retorno
function imprimirSoma(a, b) {
   console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); // Resultado NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8); // Ignora o que vem apos o segundo valor
imprimirSoma(); // NaN

// Função com retorno
function soma(a, b = 1) { // Aqui 0 é o valor padrão
   return a + b
} 

console.log(soma(2, 3));
console.log(soma(2)); // 2 + 1
console.log(soma());