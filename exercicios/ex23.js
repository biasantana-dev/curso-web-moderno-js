function calcularMedia(alunoCod, nota1, nota2, nota3) {
   let notas = [];
   notas.push(nota1);
   notas.push(nota2);
   notas.push(nota3);
   notas.sort((a, b) => a < b ? 1 : -1);

   let media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10;
   console.log(`Código do aluno: ${alunoCod}. \nNotas: ${nota1}, ${nota2}, ${nota3}. \n${media < 5 ? 'Reprovado' : 'Aprovado'}.`)
} 

calcularMedia(98, 8.4, 5.5, 6.1);
calcularMedia(82, 5, 4.2, 3.5);
