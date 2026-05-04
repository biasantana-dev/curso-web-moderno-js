const pessoa = {
   saldacao: 'Bom dia!',
   falar () {
      console.log(this.saldacao);
   }
};

pessoa.falar();
const falar = pessoa.falar; // dará erro pois está apontando para um this diferente 
falar(); // conflito entre paradigmas: funcional e OO (orientado a objetos)

const falarDePessoa = pessoa.falar.bind(pessoa); // bind: passa um objeto do qual você quer que seja resolvido o this; 
falarDePessoa(); // voltou a apontar para o objeto certo