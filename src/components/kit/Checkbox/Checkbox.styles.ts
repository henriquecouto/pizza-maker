import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: min-content;
  height: min-content;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    border: 3px solid rgba(0, 0, 0, 0.2);
    border-radius: ${theme.shapes.radius.sm};
    padding: ${theme.spacing.md};
    background-color: ${theme.palette.white};
    transition: 0.2s;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      position: absolute;
      background-color: ${theme.palette.info.main};
      border-radius: ${theme.shapes.radius.sm};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    display: none;

    &:checked + ${Label} {
      border: solid 3px ${theme.palette.info.main};
      background-color: ${theme.palette.info.main}33;
      & > div {
        padding: ${theme.spacing.sm};
      }
    }
  `}
`;
