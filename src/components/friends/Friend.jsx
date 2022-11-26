import PropTypes from 'prop-types';
import { FriendAvatar } from './Friends.styled';

export const Friend = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <>
      <span>{isOnline}</span>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
