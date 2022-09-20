import React, { useEffect, useState } from "react";
import { accessToken } from "../token";
import RepoCard from "./RepoCard";

export default function ReposList({ reposUrl }) {
  const [reposList, setReposList] = useState([]);

  useEffect(() => {
    fetch(reposUrl, {
      headers: { authorization: `token ${accessToken}` },
    })
      .then((res) => res.json())
      .then((data) => setReposList(data));
  }, []);

  
  return (
    <div>
      {reposList.length ? (
        reposList.map((repo) => <RepoCard repo={repo} />)
      ) : (
        <h4> No repos</h4>
      )}
    </div>
  );
}
