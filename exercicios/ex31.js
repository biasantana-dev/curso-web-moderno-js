function numerosNegativos(vetor) {
   let qtsNegativos = 0;
   for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] < 0) {
         qtsNegativos++;
      }
   }
   return qtsNegativos;
}

vetor = [-1, -2, 8, -5, 10, -20, 4]
console.log(numerosNegativos(vetor))

