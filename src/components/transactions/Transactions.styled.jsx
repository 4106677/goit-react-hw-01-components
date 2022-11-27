import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 30px auto;
  padding: 0;

  box-shadow: 0 0 10px #c6cccced;
  border-radius: 10px;

  background-color: #fff;

  border-collapse: collapse;
  table-layout: fixed;
`;

export const TableHeader = styled.thead`
  color: #fff;

  width: 100%;
`;

export const TableHeaderGroup = styled.tr`
  display: flex;
  justify-content: space-around;

  width: 100%;

  padding: 10px;

  background-color: #25bcd5;
  border-radius: 10px 10px 0 0;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableRow = styled.tr`
  :nth-child(2n) {
    background-color: #ecf1f3;
  }

  :last-child {
    border-radius: 0 0 10px 10px;
  }
  width: 100%;

  display: flex;

  padding: 5px;
`;

export const RowType = styled.td`
  width: calc(100% / 3);
  padding-left: 70px;

  text-transform: capitalize;
`;

export const RowAmount = styled.td`
  width: calc(100% / 3);
  text-align: right;

  padding-right: 85px;
`;

export const Currency = styled.td`
  width: calc(100% / 3);
  text-align: center;
`;
