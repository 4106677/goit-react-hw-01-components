import styled from 'styled-components';

export const CardBox = styled.div`
  width: 400px;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 30px auto;

  box-shadow: 0 0 10px #c6cccced;
  border-radius: 10px;
`;

export const PersonalInfo = styled.div`
  background-color: #fff;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px 10px 0 0;
`;

export const Avatar = styled.img`
  padding: 40px;
  width: 280px;
  height: 280px;

  border-radius: 100%;

  display: block;
  object-fit: cover;
`;

export const UserName = styled.h2`
  margin: 0;
`;

export const UserLocation = styled.p`
  margin-top: 0;
  margin-bottom: 40px;
`;

export const SocialData = styled.ul`
  display: flex;
  justify-content: space-evenly;

  width: 100%;
  margin: 0;
  padding: 0;

  background-color: rgb(243 246 249);
  border-radius: 0 0 10px 10px;

  border-top: 1px solid rgb(192 205 220);
`;

export const SocialDataList = styled.li`
  &:not(:last-child) {
    border-right: 1px solid rgb(192 205 220);
  }

  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: calc(100% / 3);
`;

export const SocialQuantity = styled.span`
  font-weight: bold;
`;
