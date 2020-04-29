import React, {useState, useEffect} from 'react';
import Axios from "axios";

import "./body.css";
import PhotoCard from "../photoCard/photoCard";

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
        <div className="bodyDiv">
            <PhotoCard
                title={nasaData.title}
                date={nasaData.date}
                blurb={nasaData.explanation}
                imgSrc={nasaData.url}/>
        </div>
    );
}