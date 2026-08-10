const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [5, 6, 7, 8, 9, 10];

function adicionarVetor(vetorInicial, vetorAdicionar) {
   for (let i = 0; i < vetorAdicionar.length; i++) {
      vetorInicial.push(vetorAdicionar[i]);
   }
   console.log(`Vetor Adicionado: ${vetorAdicionar} \nVetor Resultado: ${vetorInicial}`);
}

adicionarVetor(vetorPilha, vetorAdiciona);