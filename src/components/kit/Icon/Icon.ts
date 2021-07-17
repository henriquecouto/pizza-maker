import styled, { css } from 'styled-components';
import * as Icons from 'assets/icons';

export type IconNames = keyof typeof Icons;

type IconProps = {
  name: IconNames;
  size?: number;
  margin?: string;
  color?: string;
};

const modifiers = {
  margin: (margin: string) => css`
    margin: ${margin};
  `,
  size: (size: number) => css`
    width: ${size}px;
    height: ${size}px;
  `,
  color: (color: string) => css`
    color: ${color};
  `,
};

const applyModifiers = ({ size, margin, color }: IconProps) => css`
  ${margin && modifiers.margin(margin)}
  ${size && modifiers.size(size)}
  ${color && modifiers.color(color)}
`;

export const Icon = styled.svg.attrs<IconProps>(({ name }) => ({
  as: Icons[name],
}))<IconProps>`
  ${({ theme, ...props }) => css`
    width: ${theme.spacing.md}px;
    height: ${theme.spacing.md}px;
    color: white;

    ${applyModifiers(props)}
  `}
`;
