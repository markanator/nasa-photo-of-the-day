import React from "react";

import styled from 'styled-components';

const ShoeBox = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    padding-bottom: 20px;
    font-size: 16px;
    color: #a2a2a2;
`;
const WaveFooter = styled.svg`
    margin-top: -55px;
    vertical-align: bottom;
    margin-bottom: -1px;
    width: 100%;
    height: auto;
    fill: white;
`;
const Socials = styled.div`
    padding: 5px 0;
    background: white;
`;
const AIcon = styled.a `
    padding: 0 5px;
    font-size: 3rem;
    text-decoration: none;
    color: #4b4d4f; 
`;

export default function Footer() {
    return (
        <ShoeBox className="Footer">
            <WaveFooter viewBox="0 0 1440 82" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 18L120 12.7C240 6.99997 480 -3.00003 720 1.99997C960 6.99997 1200 29 1320 39.3L1440 50V82H1320C1200 82 960 82 720 82C480 82 240 82 120 82H0V18Z"></path>
            </WaveFooter>
            <p>© 2020 Mark Ambrocio</p>
            <Socials className="social-icons">
                <AIcon href="https://github.com/markanator">
                    <i className="fab fa-github"></i>
                </AIcon>
                <AIcon href="https://www.linkedin.com/in/mark-ambro/">
                    <i className="fab fa-linkedin"></i>
                </AIcon>
            </Socials>
        </ShoeBox>
    );
}