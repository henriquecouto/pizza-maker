/* eslint-disable no-restricted-imports */
import neapolitanImage from 'mocks/images/neapolitan.jpeg';
import silicianImage from 'mocks/images/silician.jpeg';
import newYorkerImage from 'mocks/images/new-yorker.jpeg';

export default [
  {
    name: 'Pizza Napolitana',
    photo: neapolitanImage,
    dough: 'napolitana',
    ingredients: [
      'mussarela',
      'peito de perú',
      'palmito',
      'parmesão',
      'orégano',
    ],
    price: 37,
    score: 50,
  },
  {
    name: 'Pizza Siliciana',
    photo: silicianImage,
    dough: 'siliciana',
    ingredients: ['mussarela', 'tomate', 'filé de aliche', 'sfincione'],
    price: 32,
    score: 50,
  },
  {
    name: 'Pizza Nova Yorquina',
    photo: newYorkerImage,
    dough: 'nova-iorquina',
    ingredients: [
      'mussarela',
      'palmito',
      'calabresa',
      'azeitona',
      'orégano',
      'tomate',
    ],
    price: 40,
    score: 50,
  },
];
