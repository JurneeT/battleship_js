import logo from './logo.png';
import './App.css';
import { Grid } from '@material-ui/core';
//import { MenuItem } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
//import { FormControl } from '@material-ui/core';
//import { Select } from '@material-ui/core';
//import { FormHelperText } from '@material-ui/core';
import SelectShip from './ships.js'
//import { Box } from '@material-ui/core';
import PlayerGrid from './cell.js';
import React, { useState } from 'react';
import PlayGame from './playGame.js';
import SwapButton from './swapTurn';
import CPUGrid from './cpuBoard';



let start = 0;
let dir = 0;

function App() {
const [shipStatePlace, setShipStatePlace] = useState(false);
const [shipStateDirection, setShipStateDirection] = useState(false);
const [turn, setTurn] = useState("CPU");
const [start, setStart] = useState(false);


  return (
    <body style={{
      backgroundColor:  "lightskyblue"}}>

    <div className="App">
       <img src={logo}  width="25%" height="25%" class="logo" alt="Bison Boggle Logo" /> 
      <h1 id="">BattleShip</h1> 
    
      <SelectShip
      setShipStatePlace={(state) => setShipStatePlace(state)}/>

    {start === false & shipStatePlace === false & shipStateDirection === false ?
    <h1 id="user-prompt">
    <div id="prompt">Please select a ship to place</div>
    </h1>:null
    }
    {shipStatePlace === true & shipStateDirection === false ?
    <h1 id="user-prompt">
    <div id="prompt">Select a start space to place your ship</div>
    </h1>:null 
    }
    {shipStatePlace === false & shipStateDirection === true ?
    <h1 id="user-prompt">
    <div id="prompt">Select an adjacent space left, right, up, or down to set the direction</div>
    </h1>:null 
    }
    {turn === "user" ?
    <h1 id="user-prompt">
    <div id="prompt">It's your turn! Fire away!!!</div>
    </h1>:null 
    }
    {turn === "CPU" & start === true ?
    <h1 id="user-prompt">
    <div id="prompt">CPU is firing!!!</div>
    </h1>:null 
    }

      <PlayGame
      setTurn={(state) => setTurn(state)}
      turn={(turn)}
      setStart={(state) => setStart(state)}/>
      
  <div className="Input-select-size">
  </div>

  {turn === "CPU" && <PlayerGrid
   setShipStatePlace={(state) => setShipStatePlace(state)} 
   setShipStateDirection={(state) => setShipStateDirection(state)}
   shipStatePlace={(shipStatePlace)}
   shipStateDirection={(shipStateDirection)}
   />}
   {turn === "user" && <CPUGrid/>}
   
   

    <div><SwapButton
    setTurn={(state) => setTurn(state)}
    turn={(turn)}/></div>
    </div>
    </body>
  );
}

export default App; 
