/* eslint-disable linebreak-style */
const frase1 = 'hola soy una FRASE, de prueba con pruebas de cosas, que hay en la prueba final.';

const contarPalabras = (frase, palabra) => {
  const palabraParse = frase.toLowerCase().replace(/!¡\?¿,.-/g, '').split(' ').filter((e) => !/[.;,]/g.test(e));
  let contador = 0;
  palabraParse.forEach((e) => {
    if (e.includes(palabra)) {
      contador += 1;
    }contador += 0;
  });
  return `la cantidad de veces que se repite la palabra:${palabra} es ${contador}`;
};

contarPalabras(frase1, 'prueba');
