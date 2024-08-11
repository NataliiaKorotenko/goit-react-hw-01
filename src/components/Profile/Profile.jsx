
import css from "../Profile/Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
    <div className={css.contProfile}>
    <div className={css.userName}>
    <img className={css.userImg} src={image} alt={name}/>
    <p className={css.userName}>{name}</p>
    <p className={css.userTag}>@{tag}</p>
    <p className={css.userLocation}>{location}</p>

    <ul className={css.userList}>
      <li className={css.userStats}>
      <span className={css.userInd}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.userStats}>
      <span className={css.userInd}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.userStats}>
      <span className={css.userInd}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
</div>
    </>
  );
};

export default Profile;
