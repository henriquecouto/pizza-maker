import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './Radio.styles';

type RadioProps = {
  id: string;
} & InputHTMLAttributes<HTMLInputElement>;

const radify = (id: string) => `#radio:${id}`;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ id, ...props }, ref) => (
    <S.Container onClick={props.onClick}>
      <S.Input {...props} ref={ref} type='radio' id={radify(id)} />
      <S.Label htmlFor={radify(id)}>
        <div />
      </S.Label>
    </S.Container>
  )
);
