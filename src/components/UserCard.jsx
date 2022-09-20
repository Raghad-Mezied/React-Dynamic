import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { accessToken } from "../token";
import ReposList from "./ReposList";
import UserHeader from "./UserHeader";

function UserCard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const username = "AhmedSafi973";
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`, {
      headers: { authorization: `token ${accessToken}` },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("err");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setUserData(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <h1>{error}</h1>;
  if (!userData || loading) return <h1>Loading</h1>;

  return (
    <div>
      <UserHeader userData={userData} />
      <ReposList reposUrl={userData.repos_url} />
    </div>
  );
}

export default UserCard;
