import React from "react";
import{Route,BrowserRouter,Routes}from"react-router-dom";
import Pokezin from"./pages/pokezin";

import Trainer from "./pages/nome";

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