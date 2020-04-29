import React from 'react';
import "./photoCard.css";

 function PhotoCard(props){
    return (
        <div className="photoCard">
            <h2>{props.title}</h2>
            <h4>{props.date}</h4>
            <img alt="nasa" src={props.imgSrc} />}
            <p>{props.blurb}</p>
        </div>
    );
}

export default PhotoCard;