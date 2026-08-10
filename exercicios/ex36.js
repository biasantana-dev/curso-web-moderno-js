const vetor = [3, 5, 12, 2, 8, 13];

function multiplicarVetor(vetor, multiplicador) {
   let resultado1 = [];
   vetor.forEach(e => resultado1.push(e * multiplicador));
   return resultado1;
}

function multiplicarMaiorQue5(vetor, multiplicador) {
   let resultado2 = [];
   if (multiplicador < 5) return;
   vetor.forEach(e=> resultado2.push(e * multiplicador));
   return resultado2;
}

console.log(multiplicarVetor(vetor, 4));
console.log(multiplicarMaiorQue5(vetor, 10))