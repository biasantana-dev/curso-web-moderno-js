function maiorEMenor(vetor) {
   let maior;
   let menor;
   for (let i = 0; i < vetor.length; i++) {
      if (maior === undefined && menor === undefined) {
         maior = vetor[i];
         menor = vetor[i];
      } else {
         if (vetor[i] > maior) {
            maior = vetor[i];
         }
         if (vetor[i] < menor) {
            menor = vetor[i];
         }
      }
   }
   return [maior, menor];
}

vetor = [8, 12, 3, 6, 5, 21, 20, 2];
console.log(maiorEMenor(vetor))