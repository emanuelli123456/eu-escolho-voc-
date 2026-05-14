import React from "react";
import{Link}from"react-router-dom";
import "./nome.css"
import imagemTreinador from "..assets/how-can-i-make-custom-battle-backgrounds-v0-d9spuwer2c491"; 

function Trainer(){
    return(
     <div className="home">
    <img className= "image"></img>
    <div className= "container">
    <img className="image" src={imagemTreinador} alt="Foto do Treinador" /> 

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