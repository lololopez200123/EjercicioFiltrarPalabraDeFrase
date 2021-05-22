/* eslint-disable linebreak-style */
const frase1 = 'hola soy una frase, de prueba con pruebas de cosas, que hay en la prueba final.';
console.log(frase1);

const contarPalabras = (frase) => {
  const PalabraParse = frase.split("").filter((e) => !/[.;,; ]/g.test(e));
  console.log(PalabraParse);
};

contarPalabras(frase1);
