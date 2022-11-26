export const Profile = ({
  user: { avatar, username, tag, location, stats },
}) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="" />

        <h2>{username}</h2>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
