import React, {useState, useEffect} from 'react';
import Axios from "axios";
import styled from 'styled-components';
import PhotoCard from "../photoCard/photoCard";

const ReactBody = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
`; 

export default function Body() {
    const [nasaData,
        setNasaData] = useState([]);

    useEffect(() => {
        Axios
            .get("https://api.nasa.gov/planetary/apod?api_key=WogsqgP4VnTq0mLXxsrGf2tqxu6nMRzMSVIC" +
                "KVUA")
            .then((resp) => {
                console.log(resp.data);
                setNasaData(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [])

    return (
        <ReactBody className="bodyDiv">
            <PhotoCard
                title={nasaData.title}
                date={nasaData.date}
                blurb={nasaData.explanation}
                imgSrc={nasaData.url}/>
        </ReactBody>
    );
}