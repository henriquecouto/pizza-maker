import { ButtonHTMLAttributes, forwardRef } from 'react';
import { IconNames, Icon, Typography } from 'components/kit';
import * as S from './Button.styles';
import { useTheme } from 'styled-components';

type ButtonProps = {
  children: string;
  icon?: IconNames;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon, ...props }, ref) => {
    const theme = useTheme();
    return (
      <S.Button ref={ref} {...props}>
        <Typography.Body color='white' weight='bold'>
          {children}
        </Typography.Body>
        {icon && <Icon name={icon} margin={`0 0 0 ${theme.spacing.md}`} />}
      </S.Button>
    );
  }
);
