import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const Steps = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing.md} 0;
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    background-color: ${theme.palette.background.secondary};
    border-radius: ${theme.shapes.radius.sm};
  `}
`;
