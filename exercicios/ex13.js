/* exibir se dia é util, fim de samana ou dia inválido 
   domingo é o dia 1 e sabádo é o 7
*/
function diaSemana(numero) {
   switch(numero) {
      case 1: 
         return 'Fim de samana';
      case 2: 
      case 3: 
      case 4: 
      case 5: 
      case 6: 
         return 'Dia útil';
      case 7: 
         return 'Fim de semana';
      default: 
         return 'Dia inválido';
   }
}

console.log(diaSemana(1));
console.log(diaSemana(2));
console.log(diaSemana(3));
console.log(diaSemana(4));
console.log(diaSemana(5));
console.log(diaSemana(6));
console.log(diaSemana(7));
console.log(diaSemana(8));