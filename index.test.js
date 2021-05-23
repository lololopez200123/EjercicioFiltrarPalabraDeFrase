/* eslint-disable linebreak-style */
import { describe, expect } from "@jest/globals";
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
    expect(contarPalabras(frase2, palabra)).toBe(`la cantidad de veces que se repite la palabra: "${palabra}" es 4`)
  });
  test("le pasamos a la funcion un string vacio",()=>{
    expect(contarPalabras("", "palabraRandom")).toBe(`la cantidad de veces que se repite la palabra: "palabraRandom" es 0`)
  });
  test("le pasamos a la funcion un elemento undefined",()=>{
    expect(contarPalabras(frase2, undefined)).toBe(`la cantidad de veces que se repite la palabra: "undefined" es 0`)
  });
  test("le pasamos a la funcion un null object",()=>{
    expect(contarPalabras(frase2, null)).toBe(`la cantidad de veces que se repite la palabra: "null" es 0`)
  });
  
});
