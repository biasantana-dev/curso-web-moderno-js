let comparaComThis = function (param) { // aponta para o global
   console.log(this === param);
}

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param); // não aponta para o global
comparaComThisArrow(global); 
comparaComThisArrow(module.exports); 

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);