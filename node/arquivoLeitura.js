const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

// sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
   const config = JSON.parse(conteudo);
   console.log(`${config.db.host}:${config.db.port}`); // será executa por último
});

const config = require('./arquivo.json');
console.log(config.db);

fs.readdir(__dirname, (err, arquivos) => { // __dirname é uma constante presente em todos os módulos Node
   console.log('Conteúdo da pasta...');
   console.log(arquivos);
});