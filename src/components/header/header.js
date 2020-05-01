import React from "react";

import styled from 'styled-components';

const SiteTitle = styled.h1`
    color: #2b283a;
    text-shadow: 4px 4px white;
    font-weight: 700;
`;

export default function Header(){


    
    return (
        <div className="Header">
            <SiteTitle>Astronomy Photo of The Day!</SiteTitle>
        </div>
    );
}