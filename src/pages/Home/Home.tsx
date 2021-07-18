import { Outlet } from 'react-router-dom';
import { PizzaMaker, PizzaRecomendation } from 'components/ui';
import { useScore } from 'stores/score';
import { usePizzaRecomendation } from 'useCases';
import * as S from './Home.styles';

export const Home = () => {
  const { pizza } = usePizzaRecomendation();
  const { add } = useScore();

  return (
    <S.Container>
      <PizzaRecomendation
        pizza={pizza}
        onChoose={(pizza) => add(pizza.score)}
      />
      <PizzaMaker>
        <Outlet />
      </PizzaMaker>
    </S.Container>
  );
};
