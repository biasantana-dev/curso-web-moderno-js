function intervalo(vetor) {
   let numerosNoIntervalo = 0;
   for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] >= 10 && vetor[i] <= 20) {
         numerosNoIntervalo++;
      }
   }
   return `${numerosNoIntervalo} numeros dentro do intervalo.`;
}

const vetor = [8, 9, 10, 12, 14, 16, 18, 20, 21, 22];
console.log(intervalo(vetor));