import PropTypes from 'prop-types';
import {
  SocialData,
  CardBox,
  PersonalInfo,
  Avatar,
  SocialDataList,
  SocialQuantity,
  UserName,
  UserLocation,
} from './Profile.styled';

export const Profile = ({
  user: { avatar, username, tag, location, stats },
}) => {
  return (
    <CardBox>
      <PersonalInfo>
        <Avatar src={avatar} alt="" />

        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <UserLocation>{location}</UserLocation>
      </PersonalInfo>

      <SocialData>
        <SocialDataList>
          <span>Followers</span>
          <SocialQuantity>{stats.followers}</SocialQuantity>
        </SocialDataList>
        <SocialDataList>
          <span>Views</span>
          <SocialQuantity>{stats.views}</SocialQuantity>
        </SocialDataList>
        <SocialDataList>
          <span>Likes</span>
          <SocialQuantity>{stats.likes}</SocialQuantity>
        </SocialDataList>
      </SocialData>
    </CardBox>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
