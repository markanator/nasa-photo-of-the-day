import React from 'react';
import "./photoCard.css";

 function PhotoCard(props){
     if(!props){
         return (
             <div>
                 <h3>Loading...</h3>
             </div>
         );
     }
    return (
        <div className="photoCard">
            <h2>{props.title}</h2>
            <h4>{props.date}</h4>
            <img alt="nasa" src={props.imgSrc} />
            <p>{props.blurb}</p>
        </div>
    );
}

export default PhotoCard;