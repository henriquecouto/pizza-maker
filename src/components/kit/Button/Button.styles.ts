import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.palette.info.main};
    border-radius: ${theme.shapes.radius.sm};
    border: none;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `}
`;
