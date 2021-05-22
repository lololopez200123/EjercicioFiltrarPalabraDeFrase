/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */

export const contarPalabras = (frase, palabra) => {
  const palabraParse = frase.toLowerCase().replace(/!¡\?¿,.-/g, '').split(' ');
  let contador = 0;
  palabraParse.forEach((e) => {
    if (e.includes(palabra)) {
      contador += 1;
    }contador += 0;
  });
  return `la cantidad de veces que se repite la palabra: "${palabra}" es ${contador}`;
};

