const  pontuacoesString = '24, 33, 51, 19, 55, 62, 58, 27, 63';

function avaliarPontuacoes(pontuacoesString) {
   const pontuacoes = pontuacoesString.split(', ');
   let bateuRecorde = 0;
   let piorJogo = 1;
   let maiorPontuacao = pontuacoes[0];
   let menorPontuacao = pontuacoes[0];

   for (let i = 1; i < pontuacoes.length; i++) {
      if (Number(pontuacoes[i]) > Number(maiorPontuacao)) {
         maiorPontuacao = pontuacoes[i];
         bateuRecorde++;
      } else if (Number(pontuacoes[i]) < Number(menorPontuacao)) {
         menorPontuacao = pontuacoes[i];
         piorJogo = i + 1;
      }
   }
   return [bateuRecorde, piorJogo];
}

console.log(avaliarPontuacoes(pontuacoesString));