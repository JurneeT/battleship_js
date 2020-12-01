import logo from './logo.png';
import './App.css';
import SelectShip from './ships.js'
import PlayerGrid from './cell.js';
import React, { useState } from 'react';
import PlayGame from './playGame.js';
import SwapButton from './swapTurn';
import CPUGrid from './cpuBoard';
import LoginButton from './login_button.js'
import {Button} from '@material-ui/core'



let start = 0;
let dir = 0;

function App() {
  const [shipStatePlace, setShipStatePlace] = useState(false);
  const [shipStateDirection, setShipStateDirection] = useState(false);
  const [turn, setTurn] = useState("CPU");
  const [start, setStart] = useState(false);
const [mainMenu, setmainMenu]= useState(true);
const [user, setUser]= useState(null);

const [location, setLocation] = useState(0);
const [cpumiss, setCPUMiss] = useState(false);
const [cpuhit, setCPUHit] = useState(false);


  return (
    

    <div className="App">
       <img src={logo}  width="25%" height="25%" class="logo" alt="Bison Boggle Logo" /> 
      <h1 id="">BattleShip</h1> 


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
    <SelectShip
      setShipStatePlace={(state) => setShipStatePlace(state)}/>:null
    }
      

    {start === false & shipStatePlace === false & shipStateDirection === false &mainMenu ===false?
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
    {mainMenu===false ?
    <p >
        <PlayGame setTurn={(state) => setTurn(state)}
      turn={(turn)}
      setStart={(state) => setStart(state)}
      start={(start)}/>
      </p>:null
  }
      
      
      
      
  <div className="Input-select-size">
  </div>
  {cpuhit === true & turn === "CPU" ?
              <h1>CPU HIT your ship at cell ({location})</h1>: cpumiss === true & turn === "CPU"?
              <h1>CPU MISSED at cell ({location})</h1>:null
              }

  {turn === "CPU" &mainMenu ===false? <PlayerGrid
   setShipStatePlace={(state) => setShipStatePlace(state)} 
   setShipStateDirection={(state) => setShipStateDirection(state)}
   shipStatePlace={(shipStatePlace)}
   shipStateDirection={(shipStateDirection)}
   />:null}

   {turn === "user" &mainMenu ===false? <CPUGrid/>:null}
   
   
{mainMenu ===false?
    <p><SwapButton
    setTurn={(state) => setTurn(state)}
    setCPUHit={(state) => setCPUHit(state)}
    setCPUMiss={(state) => setCPUMiss(state)}
    setLocation={(state) => setLocation(state)}
    turn={(turn)}/></p>:null
    }
    </div>
    
  );
}

export default App; 
