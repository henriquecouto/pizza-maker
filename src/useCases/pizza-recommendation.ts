import { Pizza } from 'entities/Pizza';
import { SizeName } from 'entities/Size';
// eslint-disable-next-line no-restricted-imports
import pizzas from 'mocks/pizzas/pizzas';
import { useState } from 'react';

const random = Math.floor(Math.random() * pizzas.length);

export const usePizzaRecomendation = () => {
  const [pizza] = useState<Pizza>(
    new Pizza({ ...pizzas[random], size: pizzas[random].size as SizeName })
  );

  return { pizza };
};
