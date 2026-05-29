// plano = A B C
// aumento = 10% 15% 20% 

function aumentoSalarial(plano, salario) {
   switch (plano) {
      case 'A': 
         return salario * 1.1;
      case 'B':
         return salario * 1.15;
      case 'C': 
         return salario * 1.2;
      default:
         return 'Plano inválido.';
   }
}

console.log(aumentoSalarial('A', 2000));
console.log(aumentoSalarial('B', 2000));
console.log(aumentoSalarial('C', 2000));
console.log(aumentoSalarial('D', 2000));