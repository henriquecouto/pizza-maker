/* eslint-disable @typescript-eslint/ban-types */
import { SizeName } from 'entities/Size';
import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const PIZZA_MAKER_KEY = 'pizza-maker';

const DEFAULT_VALUES = {
  dough: '',
  ingredients: [],
  size: 'M' as SizeName,
};

type StateType = typeof DEFAULT_VALUES;

export const usePizzaMaker = () => {
  const [state, setState] = useState<StateType>(DEFAULT_VALUES);
  const { get, set } = useLocalStorage();

  useEffect(() => {
    const exist = get(PIZZA_MAKER_KEY);
    if (!exist) {
      set(PIZZA_MAKER_KEY, DEFAULT_VALUES);
    } else {
      setState(exist);
    }
  }, []);

  const change = (value: object) => {
    const oldValue = get(PIZZA_MAKER_KEY);
    const newValue = { ...oldValue, ...value };
    set(PIZZA_MAKER_KEY, newValue);
    setState(newValue);
  };

  return { change, state };
};
