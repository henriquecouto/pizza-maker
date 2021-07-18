import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export const SizesContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.secondary};
    border-radius: ${theme.shapes.radius.sm};
    margin-bottom: ${theme.spacing.md};
    padding: ${theme.spacing.md};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const Size = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacing.sm};
    background-color: ${theme.palette.background.alternative}44;
    border-radius: ${theme.shapes.radius.sm};
    margin: ${theme.spacing.sm};
  `}
`;
