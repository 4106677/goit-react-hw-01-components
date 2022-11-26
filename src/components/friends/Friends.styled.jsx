import styled from 'styled-components';

export const FriendList = styled.ul`
  width: 400px;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 30px auto;
  padding: 0;

  box-shadow: 0 0 10px #c6cccced;
  border-radius: 10px;

  background-color: #fff;
`;

export const FriendItem = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid rgb(192 205 220);
  }

  width: 100%;

  display: flex;
  flex-direction: row;

  padding: 10px;
`;

export const FriendAvatar = styled.img`
  margin: 0 10px;
`;
