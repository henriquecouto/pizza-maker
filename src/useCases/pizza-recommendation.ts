import { Pizza } from 'entities/Pizza';
// eslint-disable-next-line no-restricted-imports
import pizzas from 'mocks/pizzas/pizzas';
import { useState } from 'react';

const random = Math.floor(Math.random() * pizzas.length);

export const usePizzaRecomendation = () => {
  const [pizza] = useState<Pizza>(new Pizza(pizzas[random]));

  return { pizza };
};
