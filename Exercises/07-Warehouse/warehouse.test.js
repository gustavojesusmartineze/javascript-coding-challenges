const { contains } = require('./warehouse');
const { expect } = require('@jest/globals');

test('should return true', () => {
  const warehouse = {
    'estanteria1': {
      'cajon3': ' hola',
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta'
      }
    }
  };

  const product =  'camiseta';
  const expected = true;

  const result = contains(warehouse, product);

  expect(result).toBe(expected);
});

test('should return false', () => {
  const warehouse = {
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
      }
    }
  };

  const product =  'camiseta';
  const expected = false;

  const result = contains(warehouse, product);

  expect(result).toBe(expected);
});
