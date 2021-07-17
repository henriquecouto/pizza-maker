import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing.lg};
    display: flex;
    flex-direction: column;
  `}
`;
