import { Typography, Button, Icon } from 'components/kit';
import { Pizza } from 'entities/Pizza';
import { FC } from 'react';
import { useTheme } from 'styled-components';
import { numberToMoney } from 'utils';
import * as S from './PizzaRecomendation.styles';

type PizzaRecomendationProps = {
  children?: null;
  pizza: Pizza;
  onChoose: (pizza: Pizza) => void;
};

export const PizzaRecomendation: FC<PizzaRecomendationProps> = ({
  onChoose,
  pizza,
}) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.BadgeWrapper>
        <div>
          <Icon name='IcBadge' color={theme.palette.primary.light} size={200} />
          <Typography.Body
            size={35}
            weight='bold'
            color='white'
            margin='-20px 0 0 0'
          >
            {pizza.score}
          </Typography.Body>
          <Typography.Body color='white' margin='40px 0 0 0'>
            pontos
          </Typography.Body>
        </div>
      </S.BadgeWrapper>
      <Typography.H3 color='secondary'>Pizza do dia:</Typography.H3>
      <S.PizzaInfo>
        <S.PizzaPhoto src={pizza.photo} />
        <S.PizzaDesc>
          <Typography.H3 color='primary' lineHeight='sm'>
            {pizza.name}
          </Typography.H3>
          <Typography.Body color='secondary' weight='bold' lineHeight='xs'>
            Massa:
          </Typography.Body>
          <Typography.Body>{pizza.dough}</Typography.Body>
          <Typography.Body
            color='secondary'
            weight='bold'
            lineHeight='xs'
            margin={`${theme.spacing.sm} 0 0 0`}
          >
            Ingredientes:
          </Typography.Body>
          <Typography.Body>{pizza.ingredients.join(', ')}.</Typography.Body>
          <S.Action>
            <Typography.Body color='info' weight='bold' size={32}>
              {numberToMoney(pizza.price)}
            </Typography.Body>
            <Button icon='IcCheck' onClick={() => onChoose(pizza)}>
              quero!
            </Button>
          </S.Action>
        </S.PizzaDesc>
      </S.PizzaInfo>
    </S.Container>
  );
};
