import React, {useState, useEffect} from 'react';
import Axios from "axios";
import styled from 'styled-components';
import PhotoCard from "../photoCard/photoCard";
import moment from 'moment';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReactBody = styled.div `
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: auto;
`;

const PickDate = styled.div`
    padding: 20px 0;
`;

export default function Body() {
    const [nasaData,
        setNasaData] = useState([]);

    const [pickerValue,
        setPickerValue] = useState(new Date());


    const queryUrl = 'https://api.nasa.gov/planetary/apod?';
    const queryKey = 'api_key=WogsqgP4VnTq0mLXxsrGf2tqxu6nMRzMSVICKVUA';
    let queryDate = "&date=" + moment(pickerValue).format('YYYY-MM-DD') + "&";
    let nasaUrl = `${queryUrl}${queryKey}${queryDate}`;

    const changeDate = (date)=> {
        setPickerValue(date);
    }


    useEffect(() => {
        Axios
            .get(nasaUrl)
            .then((resp) => {
                console.log(resp.data);
                setNasaData(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [nasaUrl])

    return (
        <ReactBody>
            <PickDate>
                <DatePicker selected={pickerValue} onChange={changeDate}  />
            </PickDate>
            <PhotoCard
                title={nasaData.title}
                date={nasaData.date}
                blurb={nasaData.explanation}
                media_type={nasaData.media_type}
                url={nasaData.url}/>
        </ReactBody>
    );
}