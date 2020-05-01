import React from "react";

import styled from 'styled-components';

import Header from "./components/header/header";
import Body from "./components/Body/body";
import Footer from './components/Footer/footer';

const AppDiv = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

function App() {

  
  return (
    <AppDiv>
      <Header />
      <Body />
      <Footer />
    </AppDiv>
  );
}

export default App;
