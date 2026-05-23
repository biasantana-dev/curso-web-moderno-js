function jurosSimples(capitalInicial, juros, tempo) {
   return capitalInicial + (capitalInicial * juros * tempo);
}

function jurosCompostos(capitalInicial, juros, tempo) {
   return capitalInicial * (1 + juros) ** tempo;
}


console.log(jurosSimples(1000, 5/100, 4));
console.log(jurosCompostos(1000, 8/100, 5));