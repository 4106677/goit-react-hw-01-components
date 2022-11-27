import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;

  margin: 30px auto;

  box-shadow: 0 0 10px #c6cccced;
  border-radius: 10px;

  color: #566776;
  background-color: #fff;

  width: 400px;
  height: 125px;
`;

export const Header = styled.h2`
  text-transform: uppercase;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 100%;

  padding: 0;
  margin: 0;

  border-top: 1px solid rgb(192 205 220);
`;

export const StatsItem = styled.li`
  width: calc(100% / 5);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;

  color: #fff;

  &:last-child {
    border-radius: 0 0 10px 0;
  }

  &:first-child {
    border-radius: 0 0 0 10px;
  }
`;
