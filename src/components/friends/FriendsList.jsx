import PropTypes from 'prop-types';

import { Friend } from './Friend';

export const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <Friend friend={friend} />
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
