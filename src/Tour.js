import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,removeTour}) => {
  const[readmore,setReadmore]=useState(false);
  return (
    <div className="single-tour">
      <div className="tour-img">
        <img src={image} alt={name} />
      </div>
      <div className="tour-content">
        <h3 className="name">{name}</h3>
        <p className="info">{readmore ? info : `${info.substring(0,200)}...`}
        <button className="readmore" onClick={()=>{
            setReadmore(!readmore)
          }}>

            {readmore ? "show less" : "read more"}
          </button>
        </p>
        <p className="price">Price : {price} $</p>
        <button className="delete" onClick={()=>removeTour(id)}>not intrested</button>
      </div>
    </div>
  );
};

export default Tour;
