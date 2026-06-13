function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
   if (altura1 === altura2) {
      if (taxa1 > taxa2) {
         return 'A 1ª criança irá ultrapassar a 2ª criança em 1 ano.';
      } else if (taxa1 < taxa2) {
         return 'A 2ª criança irá ultrapassar a 1ª criança em 1 ano.';
      } else {
         return 'As crianças tem altura e taxa de crescimento iguais.'
      }
   } else {
      if (altura1 > altura2) {
         if (taxa1 >= taxa2) {
            return 'A criança menor não ultrapassará a maior.';
         } else {
            return `A criança menor ultrapassará a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos`;
         }
      } else {
         if (taxa1 <= taxa2) {
            return 'A criança menor não ultrapassará a maior.';
         } else {
            return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos.`;
         }
      }
   }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) {
   let anos = 0;
   while (alturaMenor < alturaMaior) {
      alturaMenor += taxaAlturaMenor;
      alturaMaior += taxaAlturaMaior;
      anos++;
   }

   return anos;
}


console.log(calcularCrescimento(150, 2, 130, 4));
console.log(calcularCrescimento(158, 3, 158, 3));
console.log(calcularCrescimento(145, 4, 156, 1));
console.log(calcularCrescimento(140, 4, 136, 1));

