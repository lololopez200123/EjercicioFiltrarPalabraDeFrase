/* eslint-disable linebreak-style */
import { contarPalabras } from "./index"

const frase1 = 'hola soy una FRASE, de prueba con pruebas de cosas, que hay en la prueba final.';
const frase2 = 'hola soy otra frase a buscar pero ahora lo que voy a buscar son varias cosas... mas las que hay que buscar, en la palabra "BUSCAR"';

describe('Contador de Palabras en Frase', () => {
  test('Buscamos la cantidad de veces que se repite la palabra en frase1', () => {
    const palabra = 'pruebas';
    expect(contarPalabras(frase1, palabra)).toBe(`la cantidad de veces que se repite la palabra: "${palabra}" es 1`);
  });
  test('Buscamos la cantidad de veces que se repite la palabra en frase2', () => {
    const palabra = 'buscar';
    expect(contarPalabras(frase2, palabra)).toBe(`la cantidad de veces que se repite la palabra: "${palabra}" es 4`);
  });
  
});
