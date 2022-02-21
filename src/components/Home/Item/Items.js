import React from "react";
import "swiper/css";

const Item = ({ item, handleClick }) => {
  // setArr(item);
  // arr==='center'? setProduct(item): null;
  return (
    <div
      onClick={() => {
        handleClick(item.id);
      }}
      style={{ textAlign: "center" }}
    >
      <img
        style={{ border: "5px solid yellow", borderRadius: "25px" }}
        width="40%"
        src={item.img}
        alt=""
      />
    </div>
  );
};

export default Item;
