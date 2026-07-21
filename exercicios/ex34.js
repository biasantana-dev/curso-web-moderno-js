function verificarStrings(string1, string2) {
   let contemCaractere = true;
   for (let i = 0; i < string1.length; i++) {
      let string1Caractere = string1.charAt(i).toLowerCase();
      for (let j = 0; j < string2.length; j++) {
         let string2Caractere = string2.charAt(j).toLowerCase();
         if (string1Caractere == string2Caractere) {
            contemCaractere = true;
            break
         } else {
            contemCaractere = false;
         }
      }

      if (!contemCaractere) {
         return contemCaractere;
      }

   }

   for (let i = 0; i < string2.length; i++) {
      let string1Caractere = string2.charAt(i).toLowerCase()

      for (let j = 0; j < string2.length; j++) {
         let string2Caractere = string2.charAt(j).toLowerCase()

         if (string2Caractere == string1Caractere) {
            contemCaractere = true
            break
         } else {
            contemCaractere = false
         }
      }
      if (!contemCaractere) {
         return contemCaractere
      }
      return contemCaractere
   }
}

console.log(verificarStrings('Marcos', 'Marcos'));