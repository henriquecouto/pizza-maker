import { Typography, Button, Icon } from 'components/kit';
// eslint-disable-next-line no-restricted-imports
import PizzaPhotoMock from 'mocks/images/napolitan.jpeg';
import { useTheme } from 'styled-components';
import * as S from './PizzaRecomendation.styles';

export const PizzaRecomendation = () => {
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
            50
          </Typography.Body>
          <Typography.Body color='white' margin='40px 0 0 0'>
            pontos
          </Typography.Body>
        </div>
      </S.BadgeWrapper>
      <Typography.H3 color='secondary'>Pizza do dia:</Typography.H3>
      <S.PizzaInfo>
        <S.PizzaPhoto src={PizzaPhotoMock} />
        <S.PizzaDesc>
          <Typography.H3 color='primary' lineHeight='sm'>
            Pizza Napolitana
          </Typography.H3>
          <Typography.Body color='secondary' weight='bold' lineHeight='xs'>
            Massa:
          </Typography.Body>
          <Typography.Body>Napolitana</Typography.Body>
          <Typography.Body
            color='secondary'
            weight='bold'
            lineHeight='xs'
            margin={`${theme.spacing.sm} 0 0 0`}
          >
            Ingredientes:
          </Typography.Body>
          <Typography.Body>
            mussarela, peito de peru, palmito, parmesão, orégano.
          </Typography.Body>
          <S.Action>
            <Typography.Body color='info' size={32}>
              R${' '}
              <Typography.Body color='info' weight='bold' size={32}>
                37,00
              </Typography.Body>
            </Typography.Body>
            <Button icon='IcCheck'>quero!</Button>
          </S.Action>
        </S.PizzaDesc>
      </S.PizzaInfo>
    </S.Container>
  );
};
