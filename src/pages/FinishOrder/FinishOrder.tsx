import { Typography, Button } from 'components/kit';
import routes from 'constants/routes';
import { usePizzaMaker } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { numberToMoney } from 'utils';
import * as S from './FinishOrder.styles';

export const FinishOrder = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { state, clean } = usePizzaMaker();

  const price =
    (state.dough?.price || 0) +
    (state.size?.price || 0) +
    (state.ingredients
      ?.map((ig) => ig.price)
      .reduce((acc, price) => acc + price, 0) || 0);

  const handleExit = () => {
    navigate(routes.root);
    clean();
  };

  return (
    <S.Container>
      <S.PriceContainer>
        <Typography.Body color='info' weight='bold' size={36}>
          {numberToMoney(price)}
        </Typography.Body>
      </S.PriceContainer>
      <Typography.H3>Pedido Realizado </Typography.H3>
      <Typography.Body>
        Sua Pizza está sendo preparada e logo será entregue!
      </Typography.Body>
      <S.PizzaDetails>
        <Typography.H3 color='primary' lineHeight='sm'>
          Massa {state.dough?.name}
        </Typography.H3>
        <Typography.Body
          color='secondary'
          weight='bold'
          lineHeight='xs'
          margin={`${theme.spacing.sm} 0 0 0`}
        >
          Ingredientes:{' '}
        </Typography.Body>
        <Typography.Body>
          {state.ingredients?.map((ig) => ig.name).join(', ')}.
        </Typography.Body>
      </S.PizzaDetails>
      <Button icon='IcCheck' onClick={handleExit}>
        concluído
      </Button>
    </S.Container>
  );
};
