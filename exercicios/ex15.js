function comprarCarro(automoveis) {
   switch (automoveis) {
      case 'hatch':
         return 'Compra efetuada com sucesso.';
      case 'sedans':
      case 'motocicletas':
      case 'caminhonetes':
         return 'Tem certeza que não prefere este modelo?';
      default:
         return 'Não trabalhamos com este tipo de automóvel aqui.';
   }
}

console.log(comprarCarro('hatch'));
console.log(comprarCarro('sedans'));
console.log(comprarCarro('motocicletas'));
console.log(comprarCarro('caminhonetes'));
console.log(comprarCarro('quadriciclo'));