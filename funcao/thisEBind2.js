function Pessoa() {
   this.idade = 0;

   const self = this; // como essa linha está sendo executada diretamente na função pessoa, significa que nessa linha obrigatoriamente o this é o objeto que de fato eu quero apontar
   setInterval(function() { // setInterval recebe a função e o intervalo
      self.idade++; // substituir o this por self
      console.log(self.idade);
   }/*.bind(this)*/, 1000); //1000 é o intervalo, passado em milisegundos
}

new Pessoa;