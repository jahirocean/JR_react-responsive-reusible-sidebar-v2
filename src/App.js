import React, { useState } from "react";
import * as s from "./App.styles";
import MainView from "./components/MainView/MainView";
import Sidebar from "./components/Sidebar/Sidebar";
import { GlobalStyle } from "./GlobalStyles";
import { sidebarItemData } from "./components/Data/sidebarItemData";

function App() {
 

  return (
    <s.AppContainer>
      <GlobalStyle />
      <Sidebar
       
        sidebarItemData={sidebarItemData}
      />
      <MainView />
    </s.AppContainer>
  );
}

export default App;
