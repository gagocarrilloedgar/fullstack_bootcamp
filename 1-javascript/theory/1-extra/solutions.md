## Problema 1: Calcular el área de un rectángulo

Escribe una función de JavaScript llamada `calcularAreaRectangulo` que tome dos parámetros, `ancho` y `alto`, y devuelva el área del rectángulo.

```javascript
function calcularAreaRectangulo(ancho, alto) {
  return ancho * alto
}

// Ejemplo de uso:
const area = calcularAreaRectangulo(5, 8)
console.log(area) // Resultado: 40
```

## Problema 2: Convertir Fahrenheit a Celsius

Escribe una función de JavaScript llamada `convertirFahrenheitACelsius` que tome una temperatura en Fahrenheit como parámetro y devuelva la temperatura equivalente en Celsius.

```javascript
function convertirFahrenheitACelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

// Ejemplo de uso:
const temperaturaCelsius = convertirFahrenheitACelsius(68)
console.log(temperaturaCelsius) // Resultado: 20
```

## Problema 3: Invertir una cadena

Escribe una función de JavaScript llamada `invertirCadena` que tome una cadena como parámetro y devuelva la cadena invertida. Por ejemplo, si la entrada es "hola", la salida debería ser "aloh".

```javascript
function invertirCadena(cadena) {
  let invertida = ''
  for (let i = cadena.length - 1; i >= 0; i--) {
    invertida += cadena[i]
  }
  return invertida
}

// Ejemplo de uso:
const cadenaInvertida = invertirCadena('hola')
console.log(cadenaInvertida) // Resultado: "aloh"
```

## Problema 4: Encontrar el factorial de un número

Escribe una función de JavaScript llamada `factorial` que tome un número entero positivo como parámetro y devuelva su factorial. El factorial de un número es el producto de todos los números enteros positivos menores o iguales a ese número. Por ejemplo, el factorial de 5 (escrito como 5!) es 5 _ 4 _ 3 _ 2 _ 1 = 120.

```javascript
function factorialRecursive(num) {
  if (num === 0 || num === 1) return 1

  return num * factorialRecursive(num - 1)
}

function factorialIterative(num) {
  let result = 1
  for (let i = 2; i <= num; i++) {
    result *= i
  }
  return result
}

// Ejemplo de uso:
const valorFactorial = factorialRecursive(5)
const valorFactorial2 = factorialIterative(5)
console.log(valorFactorial) // Resultado: 120
console.log(valorFactorial2) // Resultado: 120
```

## Problema 5: Verificar si una cadena es un palíndromo

Escribe una función de JavaScript llamada `esPalindromo` que tome una cadena como parámetro y devuelva true si la cadena es un palíndromo (se lee igual de adelante hacia atrás que de atrás hacia adelante) y false en caso contrario.

```javascript
function esPalindromo(cadena) {
  const cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
  const cadenaInvertida = cadenaLimpia.split('').reverse().join('');
  return cadenaLimpia === cadenaInvertida;
}

// Ejemplo de uso:
console.log(esPalindromo('nivel')); // Resultado: true
console.log(esPal
```
