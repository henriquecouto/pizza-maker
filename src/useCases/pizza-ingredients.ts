import { useEffect, useState } from 'react';
import { Ingredient } from 'entities/Ingredient';
// eslint-disable-next-line no-restricted-imports
import ingredientsMock from 'mocks/pizzas/ingredients';

export const usePizzaIngredients = () => {
  const [ingredients, setIngredients] = useState<Array<Ingredient>>();

  useEffect(() => {
    setIngredients(
      ingredientsMock?.map((ingredient) => new Ingredient(ingredient))
    );
  }, []);

  return { ingredients };
};
