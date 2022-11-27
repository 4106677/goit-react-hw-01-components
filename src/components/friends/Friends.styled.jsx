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

export const Status = styled.span`
  width: 15px;
  height: 15px;

  border-radius: 100%;

  /*
  background-color: ${props => {
    console.log(props.isOnline);
    switch (props.isOnline) {
      case 'true':
        return 'black';
      default:
        return 'red';
    }
  }};
  */

  background-color: ${props => {
    console.log(props.isOnline);
    if (props.isOnline) {
      return '#43b247';
    } else {
      return '#e80808';
    }
  }}};
`;

export const FriendItem = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid rgb(192 205 220);
  }

  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px 10px 10px 20px;
`;

export const FriendAvatar = styled.img`
  margin: 0 15px;
`;
