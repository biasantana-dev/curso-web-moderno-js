function paresImpares(numerosVetor) {
   let qtdPar = 0;
   let qtdImpar = 0;
   for (let i = 0; i < numerosVetor.length; i++) {
      if (numerosVetor[i] % 2 === 0) {
         qtdPar++;
      } else {
         qtdImpar++;
      }
   }
   console.log(`Números Pares: ${qtdPar} \nNúmeros impares: ${qtdImpar}`);
}

const vetor = [10, 7, 4, 23, 5, 9, 18, 3, 102, 6, 22, 34, 1];
paresImpares(vetor); 