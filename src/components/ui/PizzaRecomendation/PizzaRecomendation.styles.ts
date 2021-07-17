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

export const PizzaInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: min-content;
    margin-top: ${theme.spacing.md};
  `}
`;

export const PizzaPhoto = styled.img`
  ${({ theme }) => css`
    border-bottom-left-radius: ${theme.shapes.radius.sm};
    border-top-left-radius: ${theme.shapes.radius.sm};
    margin-right: ${theme.spacing.lg};
    width: 170px;
    min-height: 220px;
    object-fit: cover;
  `}
`;

export const PizzaDesc = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const Action = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const BadgeWrapper = styled.div`
  ${() => css`
    position: absolute;
    right: -42px;
    top: -80px;

    & > div {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      & > span {
        position: absolute;
      }
      & > svg {
        filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.7));
      }
    }
  `}
`;
