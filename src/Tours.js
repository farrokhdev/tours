import React from 'react';
import Tour from './Tour';
const Tours = ({tours ,removeTour,fetchTours}) => {

  let tourTitle ="";

    if(tours.length<5) {
      tourTitle=
      <>
      <h1 className="lower-heading">
        {tours.length === 0 ? "There is no tours Please refresh the page to see all tours" :
        "Please refresh the page to see all tours"}
      </h1>
      <button className="refresh" onClick={fetchTours}>Refresh</button>
      </>
    }
    
    else{
      tourTitle=<h1>All Tours</h1>;
    }

  return(
    <div className="tours-section">
      <div className="title">
       {tourTitle}
      </div>
      <div className="tours-list">
        {tours.map((tour)=>{
          return(
            <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
          )
        })}
      </div>
    </div>
  );
};

export default Tours;
