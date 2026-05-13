import React from "react";
import{Route,BrowserRouter,Routes}from"react-router-dom";
import Pokezin from"./pokezin";

import Trainer from "./nome";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Trainer/>}/>
            <Route path= "/pokezin" element={<Pokezin/>}/>
        </Routes>

        </BrowserRouter>
      
    ) //routes= rotas      path=caminho
}

export default App;