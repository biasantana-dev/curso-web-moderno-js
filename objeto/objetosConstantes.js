// pessoa -> 123 -> {...} - pessoa aponta para um endereço de mémoria, e o endereço aponta para o objeto 
const pessoa = { nome: 'João'};
// a constante pessoa não pode ser alterada, mas o objeto que está sendo apontado nesse endereço pode ser alterado
pessoa.nome = 'Pedro';
console.log(pessoa);


// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' };

Object.freeze(pessoa);

pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);
