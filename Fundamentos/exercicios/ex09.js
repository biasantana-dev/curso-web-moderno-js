function avaliarAluno(nota) {
   let notaArredondada = arredondar(nota);

   if (notaArredondada < 40) {
      console.log(`Aluno REPROVADO! Nota: ${notaArredondada}. `);
   } else {
      console.log(`Aluno APROVADO! Nota: ${notaArredondada}.`);
   }
}

function arredondar(nota) {
   if (nota % 5 > 2) {
      return nota + (5 - (nota % 5));
   } else {
      return nota;
   }
}

avaliarAluno(73);
avaliarAluno(38);
avaliarAluno(50);
avaliarAluno(27);
