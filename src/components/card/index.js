import React, { useState } from "react";

const Card = ({ title, album, release, cover, link }) => {
  return (
    <a href={link} className="card">
      <h3 className="card-titles">
        Song:<span className="card-values">{title}</span>
      </h3>
      <h3 className="card-titles">
        Album:<span className="card-values">{album}</span>
      </h3>
      <h3 className="card-titles">
        Release Date: <span className="card-values">{release}</span>
      </h3>
      <img className="cover-img" src={cover}></img>
    </a>
  );
};

export default Card;
