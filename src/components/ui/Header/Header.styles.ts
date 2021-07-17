import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacing.xl};
    padding-bottom: ${theme.spacing.xxl};
    background-color: ${theme.palette.primary.main};
  `}
`;

export const LogoContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing.md};
  `}
`;

export const ScoreContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    height: min-content;
  `}
`;

export const ScoreDesc = styled.div`
  ${() =>
    css`
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    `}
`;
