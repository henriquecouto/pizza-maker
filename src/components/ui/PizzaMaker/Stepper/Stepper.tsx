import { Typography } from 'components/kit';
import { FC } from 'react';
import * as S from './Stepper.styles';

export type Step = {
  name: string;
};

type StepperProps = {
  children?: null;
  steps: Array<Step>;
  actual: number;
};

export const Stepper: FC<StepperProps> = ({ steps, actual }) => (
  <S.Container>
    <Typography.Body weight='bold' color='subtitle'>
      {steps[actual - 1].name}
    </Typography.Body>
    <S.Steps>
      <Typography.Body
        weight='bold'
        size={16}
      >{`${actual} / ${steps.length}`}</Typography.Body>
    </S.Steps>
  </S.Container>
);
