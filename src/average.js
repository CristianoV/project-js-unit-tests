/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (numeros) => {
  let media = 0;
    if (numeros.length === 0) {
      return undefined;
    }
    for (let index = 0; index < numeros.length; index += 1) {
      if (typeof numeros[index] !== 'number') {
        return undefined;
      } media += numeros[index];
    }
    media /= numeros.length;
    return Math.round(media);
  };

module.exports = average;

// let test = [1, 2, 3, 4, 5.6, 1];
// let teste = typeof test[5];
// console.log(teste);
