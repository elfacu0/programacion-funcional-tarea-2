import fp from 'lodash/fp';

export const fibo = (n, calculated = [1, 1]) => {
  if (n < 0) return 0;
  const N = calculated.length;
  if (N - 1 >= n) {
    return calculated[n - 1];
  }
  const lastCalculated = calculated[N - 1];
  const penultimateCalculated = calculated[N - 2];
  const newNumber = lastCalculated + penultimateCalculated;
  return fibo(n, [...calculated, newNumber]);
};

export const factorial = (n) => {
  if (n < 0) return 0;
  if (n == 1) return 1;
  if (n) {
    return n * factorial(n - 1);
  }
};

export const multiplicacion = (nums = []) =>
  nums.reduce((acum, curr) => acum * curr, 1);
// Funciones de lodash/fp que les pueden ser útiles a partir de este punto:
// Las vistas en la clase (particularmente fp.flow y fp.curry)
// fp.sortBy (para ordenar un array)
// fp.reverse (para dar vuelta un array)
// fp.first (para obtener el primer valor de un array)

export const atributo = (attr) => (obj) => obj[attr];
export const multiplicarAtributo = fp.curry((attr, obj) =>
  multiplicacion(atributo(attr)(obj))
);
export const ordenarPor = fp.curry((attr, objs) =>
  fp.reverse(fp.sortBy(atributo(attr), objs))
);
export const mayorPersona = fp.flow(
  fp.sortBy('edad'),
  fp.reverse,
  fp.first,
  atributo('nombre')
);
