import React from "react";

function UserHeader({ userData: { avatar_url, followers, login } }) {
  return (
    <div>
      <img src={avatar_url} />
      <p>name: {login}</p>
      <p>followers: {followers} </p>
    </div>
  );
}

export default UserHeader;
