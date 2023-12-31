const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className={isOnline ? 'status online' : 'status offline'}></span>
      <img className="avatar" src={avatar} alt={`User ${name} avatar`} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;