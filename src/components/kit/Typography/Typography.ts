import styled, { css } from 'styled-components';
import theme from 'styles/theme';

type Weight = keyof typeof theme.typography.weight;
type Color = keyof typeof theme.palette.typography;
type LineHeight = keyof typeof theme.typography.lineHeight;

type TypographyProps = {
  weight?: Weight;
  color?: Color;
  margin?: string;
  lineHeight?: LineHeight;
  size?: number;
};

const modifiers = {
  weight: (weight: Weight) =>
    css`
      font-weight: ${theme.typography.weight[weight]};
    `,
  color: (color: Color) => css`
    color: ${theme.palette.typography[color]};
  `,
  margin: (margin: string) => css`
    margin: ${margin};
  `,
  lineHeight: (lineHeight: LineHeight) => css`
    line-height: ${theme.typography.lineHeight[lineHeight]};
  `,
  size: (size: number) => css`
    font-size: ${size}px;
  `,
};

const applyModifiers = ({
  weight,
  color,
  margin,
  lineHeight,
  size,
}: TypographyProps) => css`
  ${weight && modifiers.weight(weight)}
  ${color && modifiers.color(color)}
  ${margin && modifiers.margin(margin)}
  ${lineHeight && modifiers.lineHeight(lineHeight)}
  ${size && modifiers.size(size)}
`;

const H1 = styled.h1<TypographyProps>`
  ${({ theme, ...props }) => css`
    font-size: ${theme.typography.size.h1};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.palette.typography.primary};

    ${applyModifiers(props)}
  `}
`;

const H2 = styled.h2<TypographyProps>`
  ${({ theme, ...props }) => css`
    font-size: ${theme.typography.size.h2};
    color: ${theme.palette.typography.primary};

    ${applyModifiers(props)}
  `}
`;

const H3 = styled.h3<TypographyProps>`
  ${({ theme, ...props }) => css`
    font-size: ${theme.typography.size.h3};
    color: ${theme.palette.typography.primary};

    ${applyModifiers(props)}
  `}
`;

const Body = styled.span<TypographyProps>`
  ${({ theme, ...props }) => css`
    font-size: ${theme.typography.size.body};
    color: ${theme.palette.typography.primary};

    ${applyModifiers(props)}
  `}
`;

export const Typography = { H1, H2, H3, Body };
