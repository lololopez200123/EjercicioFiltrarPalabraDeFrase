/* eslint-disable linebreak-style */
const frase1 = 'hola soy una FRASE, de prueba con pruebas de cosas, que hay en la prueba final.';
const frase2 = 'hola soy otra frase pero ahora lo que voy a buscar son varias cosas... mas las que hay que buscar, en la palabra "BUSCAR"';

const contarPalabras = (frase, palabra) => {
  const palabraParse = frase.toLowerCase().replace(/!¡\?¿,.-/g, '').split(' ');
  let contador = 0;
  palabraParse.forEach((e) => {
    if (e.includes(palabra)) {
      contador += 1;
    }contador += 0;
  });
  const solucion = `la cantidad de veces que se repite la palabra: "${palabra}" es ${contador}`;
  console.log(solucion);
};

contarPalabras(frase2, 'buscar');
