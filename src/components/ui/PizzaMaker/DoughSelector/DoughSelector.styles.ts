import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.md};
  `}
`;

export const DoughContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.secondary};
    border-radius: ${theme.shapes.radius.md};
    overflow: hidden;
    display: flex;
  `}
`;

export const DoughPhoto = styled.img`
  width: 30%;
  height: 250px;
  object-fit: cover;
`;

export const DoughDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.spacing.md};
  `}
`;
