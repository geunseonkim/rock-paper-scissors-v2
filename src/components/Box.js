import React from "react";

const Box = (props) => {
  console.log("props", props);
  return (
    <div className={`box ${props.victory}`}>
      <h2>{props.title}</h2>
      <img className="item-img" src={props.item && props.item.img} />
      <h3>{props.victory}</h3>
    </div>
  );
};

export default Box;
