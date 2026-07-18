function calcularMedia(vetor) {
   let soma = 0;
   for (let i = 0; i < vetor.length; i++) {
      soma += vetor[i];
   }
   return soma / vetor.length;
}

vetor = [5, 3, 8, 10, 2];
console.log(calcularMedia(vetor))