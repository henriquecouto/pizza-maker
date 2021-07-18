import styled, { css } from 'styled-components';

export const TableContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.secondary};
    border-radius: ${theme.shapes.radius.sm};
    margin-bottom: ${theme.spacing.md};
  `}
`;

export const Table = styled.table`
  ${({ theme }) => css`
    border-collapse: collapse;
    width: 100%;
    thead {
      border-bottom: 1px solid black;
    }

    th:not(:first-child),
    td:not(:first-child) {
      border-left: 1px solid black;
      border-left: 1px solid black;
    }

    th,
    td {
      padding: ${theme.spacing.sm} ${theme.spacing.lg};
      text-align: center;
    }

    th:first-child {
      width: 30px;
    }
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;
