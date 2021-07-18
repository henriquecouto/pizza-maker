import { Typography } from 'components/kit';
import { usePizzaMaker } from 'hooks';
import * as S from './FinishOrder.styles';

export const FinishOrder = () => {
  const { state } = usePizzaMaker();
  return (
    <S.Container>
      <Typography.H3>Seu pedido: </Typography.H3>
      {JSON.stringify(state)}
    </S.Container>
  );
};
