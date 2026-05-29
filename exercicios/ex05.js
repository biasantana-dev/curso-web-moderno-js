function valorDecimal(valor) {
   valorReais = `R$ ${valor.toFixed(2).replace(".", ",")}`;  
   console.log(valorReais);
}

valorDecimal(0.5000042556000);