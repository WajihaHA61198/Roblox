import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="tc grow bg-light-green br2 pa3 ma2 dib bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} className=""/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
