import React, { useState } from 'react';
import Header from "./comp/header";
import HO from "./comp/home";
import AB from "./comp/about";
import PFO from "./comp/portfolio";
import CTS from "./comp/contact";
import FTR from "./comp/footer";
function App() {
  return (
    <>
    <Header/>
    <HO/>
    <AB/>
    <PFO/>
    <CTS/>
    <FTR/>
    </>
  );
}

export default App;
