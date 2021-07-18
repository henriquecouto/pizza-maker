import { useEffect, useState } from 'react';
import { Dough } from 'entities/Dough';
// eslint-disable-next-line no-restricted-imports
import doughsMock from 'mocks/pizzas/doughs';

export const usePizzaDoughs = () => {
  const [doughs, setDoughs] = useState<Array<Dough>>();

  useEffect(() => {
    setDoughs(doughsMock?.map((dough) => new Dough(dough)));
  }, []);

  return { doughs };
};
