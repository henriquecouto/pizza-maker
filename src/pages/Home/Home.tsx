import { Outlet } from 'react-router-dom';
import { PizzaMaker, PizzaRecomendation } from 'components/ui';
import { useScore } from 'stores/score';
import {
  usePizzaDoughs,
  usePizzaIngredients,
  usePizzaRecomendation,
  usePizzaSizes,
} from 'useCases';
import * as S from './Home.styles';
import { Pizza } from 'entities/Pizza';
import { usePizzaMaker } from 'hooks';

export const Home = () => {
  const { pizza } = usePizzaRecomendation();
  const { add } = useScore();
  const { change } = usePizzaMaker();
  const { doughs } = usePizzaDoughs();
  const { ingredients } = usePizzaIngredients();
  const { sizes } = usePizzaSizes();

  const handleChoose = (pizza: Pizza) => {
    add(pizza.score);
    change({
      dough: doughs?.find((dough) => dough.name === pizza.dough),
      ingredients: ingredients?.filter((ingredient) =>
        pizza.ingredients.includes(ingredient.name)
      ),
      size: sizes?.find((size) => size.name === pizza.size),
    });
  };

  return (
    <S.Container>
      <PizzaRecomendation pizza={pizza} onChoose={handleChoose} />
      <PizzaMaker>
        <Outlet />
      </PizzaMaker>
    </S.Container>
  );
};
