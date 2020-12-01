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
import LoginButton from './login_button.js'



let start = 0;
let dir = 0;

function App() {
const [user,setUser] = useState(null);
const [shipStatePlace, setShipStatePlace] = useState(false);
const [shipStateDirection, setShipStateDirection] = useState(false);
const [turn, setTurn] = useState("CPU");
const [start, setStart] = useState(false);
const [mainMenu, setmainMenu]= useState(true);

  return (
    

    <div className="App">
      
       <img src={logo}  width="25%" height="25%" class="logo" alt="Bison Boggle Logo" /> 
       { user===null ?
       
       <h1 id="">BattleShip</h1> :<h1 id="">Welcome to the  Battleship  {user.displayName}</h1>

          
       }
      

      {mainMenu===true &&
      
      <h5>
        <p >
        <Button variant="outlined" id="play-button" onClick={()=>setmainMenu(false)} style={{color:"black", backgroundColor:"white", fontWeight:"bold"}}>
        Play vs CPU
        </Button>
        </p>
        
       
      </h5>
      
      }
      {mainMenu ===true & user === null ?
       <p >
       <LoginButton setUser={setUser}/>
      </p>:null

      }

    
      {mainMenu===false ?
      <p>
      <SelectShip
      setShipStatePlace={(state) => setShipStatePlace(state)}/>
        </p>:null
      }

    {start === false & shipStatePlace === false & shipStateDirection === false &mainMenu===false ?
    <h1 id="user-prompt">
    <p id="prompt">Please select a ship to place</p>
    </h1>:null
    }
    {shipStatePlace === true & shipStateDirection === false &mainMenu===false ?
    <h1 id="user-prompt">
    <p id="prompt">Select a start space to place your ship</p>
    </h1>:null 
    }
    {shipStatePlace === false & shipStateDirection === true &mainMenu===false ?
    <h1 id="user-prompt">
    <p id="prompt">Select an adjacent space left, right, up, or down to set the direction</p>
    </h1>:null 
    }
    {turn === "user" &mainMenu===false ?
    <h1 id="user-prompt">
    <p id="prompt">It's your turn! Fire away!!!</p>
    </h1>:null 
    }
    {turn === "CPU" & start === true  &mainMenu===false?
    <h1 id="user-prompt">
    <p id="prompt">CPU is firing!!!</p>
    </h1>:null 
    }
    {mainMenu===false ?
    <p  >
      <PlayGame
      setTurn={(state) => setTurn(state)}
      turn={(turn)}
      setStart={(state) => setStart(state)}/>
    </p>:null
    }
  

  {turn === "CPU" &mainMenu===false ?
  <p >
  <PlayerGrid
   setShipStatePlace={(state) => setShipStatePlace(state)} 
   setShipStateDirection={(state) => setShipStateDirection(state)}
   shipStatePlace={(shipStatePlace)}
   shipStateDirection={(shipStateDirection)}
   />
   </p>:null
   }
   {turn === "user" &mainMenu===false?
   <p > 
     <CPUGrid/>
     </p>:null
   
   }
   
   
   {mainMenu===false?
    <p><SwapButton
    setTurn={(state) => setTurn(state)}
    turn={(turn)}/></p>:null
   }
    </div>
    
  );
}

export default App; 
