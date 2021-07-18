import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './Checkbox.styles';

type CheckboxProps = {
  id: string;
} & InputHTMLAttributes<HTMLInputElement>;

const checkboxify = (id: string) => `#checkbox:${id}`;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, ...props }, ref) => (
    <S.Container onClick={props.onClick}>
      <S.Input {...props} ref={ref} type='checkbox' id={checkboxify(id)} />
      <S.Label htmlFor={checkboxify(id)}>
        <div />
      </S.Label>
    </S.Container>
  )
);
