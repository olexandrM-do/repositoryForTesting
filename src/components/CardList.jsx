import React, { useEffect, useState } from "react";
import Card from "./Card";
const CardList = (props) => {
  return (
    <div className="movies">
      {props.list.map((movieObject) => (
        <Card movie={movieObject} key={movieObject.imdbID} />
      ))}
    </div>
  );
};

export default CardList;
