import React from "react";

function ImgCard(props) {
  return (
        <img className="click-item" key={props.id} alt={props.name} src={props.image} name= {props.name} onClick={props.handleIncrement} />
  );
}

export default ImgCard;
