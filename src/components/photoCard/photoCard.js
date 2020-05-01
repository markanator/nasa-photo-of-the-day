import React from 'react';
import styled from 'styled-components';
import moment from "moment";

const PhotoCardy = styled.div `
    flex-direction: column;
    justify-content: center;
    align-self: center;
    width: 600px;
    background-color: white;
    color: #4b4d4f;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0,0,0,.2);
    margin-bottom: 50px;

    p {
        padding: 20px 0;
        font-weight: 400;
    }

    h2,h4{
        font-weight: 700;
    }

    img{
        width: 90%;
        height: auto;
      }
    
`;

function PhotoCard(props) {

    return (
        <PhotoCardy>
            <h2>{props.title}</h2>
            <h4>{moment(props.date).format('MM-DD-YYYY')}</h4>
            {props.media_type === "video"
                ? <iframe title="video" src={props.url} width='480px' height='320px'></iframe>
                : <img alt="nasa" src={props.url}/>}

            <p>{props.blurb}</p>
        </PhotoCardy>
    );

}

export default PhotoCard;