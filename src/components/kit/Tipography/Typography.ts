import styled, { css } from 'styled-components';
import theme from 'styles/theme';

type Weight = keyof typeof theme.typography.weight;
type Color = keyof typeof theme.palette.tipography;

type TypographyProps = {
  weight?: Weight;
  color?: Color;
};

const modifiers = {
  weight: (weight: Weight) =>
    css`
      font-weight: ${theme.typography.weight[weight]};
    `,
  color: (color: Color) => css`
    color: ${theme.palette.tipography[color]};
  `,
};

const applyModifiers = ({ weight, color }: TypographyProps) => css`
  ${weight && modifiers.weight(weight)}
  ${color && modifiers.color(color)}
`;

const H1 = styled.h1<TypographyProps>`
  ${({ theme, ...props }) => css`
    font-size: ${theme.typography.size.h1};
    font-weight: ${theme.typography.weight.bold};

    ${applyModifiers(props)}
  `}
`;

const H2 = styled.h2<TypographyProps>`
  ${({ theme, ...props }) => css`
    font-size: ${theme.typography.size.h2};

    ${applyModifiers(props)}
  `}
`;

const H3 = styled.h3<TypographyProps>`
  ${({ theme, ...props }) => css`
    font-size: ${theme.typography.size.h3};

    ${applyModifiers(props)}
  `}
`;

const Body = styled.span<TypographyProps>`
  ${({ theme, ...props }) => css`
    font-size: ${theme.typography.size.body};

    ${applyModifiers(props)}
  `}
`;

export const Typography = { H1, H2, H3, Body };
