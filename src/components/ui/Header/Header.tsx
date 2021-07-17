import { IcScore, IcPizza } from 'assets/icons';
import { Typography } from 'components/kit';
import { FC } from 'react';
import { useScore } from 'stores/score';
import { useTheme } from 'styled-components';
import * as S from './Header.styles';

const PIZZA_ICON_SIZE = 120;
const SCORE_ICON_SIZE = 50;

type HeaderProps = {
  children?: null;
};

export const Header: FC<HeaderProps> = () => {
  const theme = useTheme();
  const { score } = useScore();
  return (
    <S.Container>
      <S.LogoContainer>
        <IcPizza
          width={PIZZA_ICON_SIZE}
          height={PIZZA_ICON_SIZE}
          color={theme.palette.accent.main}
        />
        <S.Title>
          <Typography.H1 color='white'>PizzaStoom</Typography.H1>
          <Typography.H3 color='accent'>é pizza, sim.</Typography.H3>
        </S.Title>
      </S.LogoContainer>
      <S.ScoreContainer>
        <IcScore
          width={SCORE_ICON_SIZE}
          height={SCORE_ICON_SIZE}
          color={theme.palette.accent.main}
        />
        <S.ScoreDesc>
          <Typography.Body color='accent' weight='bold'>
            StoomPoints
          </Typography.Body>
          <Typography.Body color='accent' weight='bold'>
            <Typography.Body color='white'>{score}</Typography.Body> pontos.
          </Typography.Body>
        </S.ScoreDesc>
      </S.ScoreContainer>
    </S.Container>
  );
};
