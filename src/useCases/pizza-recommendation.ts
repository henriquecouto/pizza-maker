import { Pizza } from 'entities/Pizza';
// eslint-disable-next-line no-restricted-imports
import pizzas from 'mocks/pizzas/pizzas';

export const usePizzaRecomendation = () => {
  const random = Math.floor(Math.random() * pizzas.length);
  return new Pizza(pizzas[random]);
};
