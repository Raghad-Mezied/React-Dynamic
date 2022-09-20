import React from "react";

function RepoCard({ repo: { description, name, html_url } }) {
  return (
    <div>
      <a href={html_url}>{name}</a>
      <p>desc: {description} </p>
    </div>
  );
}

export default RepoCard;
