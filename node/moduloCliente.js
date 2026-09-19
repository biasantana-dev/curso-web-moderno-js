const moduloA = require('./moduloA'); // requerer o arquivo 
const moduloB = require('./moduloB'); // arquivos dentro do projetos são acessados com ./

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());