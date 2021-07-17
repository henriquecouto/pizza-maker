import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from 'components/kit';
import { Stepper } from './Stepper';
import * as S from './PizzaMaker.styles';

const stepByUrl = {
  '/': 1,
  '/ingredientes': 2,
  '/tamanho': 3,
};

export const PizzaMaker: FC = ({ children }) => {
  const location = useLocation();

  return (
    <S.Container>
      <Typography.H3>Ou monte sua pizza</Typography.H3>
      <Stepper
        actual={stepByUrl[location.pathname as keyof typeof stepByUrl]}
        steps={[
          { name: 'Selecione sua massa' },
          { name: 'Selecione seus ingredientes' },
          { name: 'Selecione o tamanho' },
        ]}
      />
      {children}
    </S.Container>
  );
};
