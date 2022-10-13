import React from "react";

const Card = (props) => {
  const { Title, Year, Poster, Type, imdbID } = props.movie;

  return (
    <div className="row">
      <div className="col s12 m3">
        <div className="card">
          <div className="card-image">
            <img
              alt=""
              src={
                Poster == "N/A"
                  ? "https://via.placeholder.com/300x150 "
                  : Poster
              }
            />
            <span className="card-title"></span>
          </div>
          <div className="card-content">
            <p className="title-movie">{Title}</p>
            <p>{Type}</p>
            <p>{Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
