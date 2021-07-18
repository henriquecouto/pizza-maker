/* eslint-disable @typescript-eslint/ban-types */
import { Dough } from 'entities/Dough';
import { Ingredient } from 'entities/Ingredient';
import { Size } from 'entities/Size';
import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const PIZZA_MAKER_KEY = 'pizza-maker';

const DEFAULT_VALUES: StateType = {
  dough: undefined,
  ingredients: [],
  size: undefined,
};

type StateType = {
  dough?: Dough;
  ingredients?: Array<Ingredient>;
  size?: Size;
};

export const usePizzaMaker = () => {
  const [state, setState] = useState<StateType>(DEFAULT_VALUES);
  const { get, set, remove } = useLocalStorage();

  useEffect(() => {
    const exist = get(PIZZA_MAKER_KEY);
    if (!exist) {
      set(PIZZA_MAKER_KEY, DEFAULT_VALUES);
    } else {
      setState(exist);
    }
  }, []);

  const change = (value: StateType) => {
    const oldValue = get(PIZZA_MAKER_KEY);
    const newValue = { ...oldValue, ...value };
    set(PIZZA_MAKER_KEY, newValue);
    setState(newValue);
  };

  const clean = () => remove(PIZZA_MAKER_KEY);

  return { change, state, clean };
};
