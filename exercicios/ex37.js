function progressaoAritmetica(n, a1, r) {
   for (let i = 0; i < n; i++) {
      console.log(a1 + r * i);
   }
   console.log(`Soma: ${(n * (a1 + ((n- 1) * r)))}`)
}

progressaoAritmetica(10, 10, 15);

function progressaoGeometrica(n, a1, r) {
   for (let i = 0; i < n; i++) {
      console.log(a1 * (r ** i));
   }
   console.log(`Soma: ${a1 * ((r ** n) - 1) / (r - 1)}`);
}

progressaoGeometrica(8, 8, 3);