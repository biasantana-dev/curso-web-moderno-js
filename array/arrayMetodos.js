const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // remove o ultimo elemento 
console.log(pilotos);

pilotos.push('Verstappen'); // adiciona novo elemento no fim do array
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona um elemento na primeira posição
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa'); // adicionar no índice 2, não remove nenhum elemento (0), Bottas'e  'Massa' são os elementos adicionados
console.log(pilotos);

// remover 
pilotos.splice(3, 1); // remove o elemento de índice 3 e remove somente 1 elemento
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // slice retorna um novo array; o novo array começará do índice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // primeiro é o índice que começará o novo array; e o segundo é até qual índice o novo array irá; o índice 4 não entra, somente o 1, 2 e 3
console.log(algunsPilotos2); 