import React from "react";
import{Link}from"react-router-dom";
import "./nome.css"

function Trainer(){
    return(
     <div className="home">
    <img className= "image"></img>
    <div className= "container">


  <p className= "nome">Nome completo</p>
 
<p>Idade</p>

<p>Nickname</p>

<p>Quantidade de pokemon</p>

<p>Quantidade de badges</p> 

<p>Pokebolas para acessar seus pokemons</p>
<Link to="/pokezin">Litten</Link>
</div>
  </div>

 );
}
export default Trainer;