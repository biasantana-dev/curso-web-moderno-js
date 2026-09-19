let a = 2; // visivel apenas dentro do módulo

// visivel para fora do modulo
module.exports = {
   bomDia: 'Bom dia',
   boaNoite() {
      return 'Boa noite';
   }
}