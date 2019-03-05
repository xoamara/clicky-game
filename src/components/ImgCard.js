import React from "react";

function ImgCard(props) {
  return (
        <img className="click-item" alt={props.name} src={props.image} onClick={() => props.handleIncrement(props.id)}  />
  );
}

export default ImgCard;
