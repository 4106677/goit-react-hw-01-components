import PropTypes from 'prop-types';

import { Friend } from './Friend';
import { FriendList, FriendItem } from './Friends.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <Friend friend={friend} />
        </FriendItem>
      ))}
    </FriendList>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
