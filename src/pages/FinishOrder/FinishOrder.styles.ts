import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing.lg};
    margin-top: -${theme.spacing.xl};
    border-radius: ${theme.shapes.radius.md};
    background-color: ${theme.palette.background.secondary};
    padding: ${theme.spacing.lg};
    position: relative;
  `}
`;
