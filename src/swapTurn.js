import { Button } from '@material-ui/core';
import winCheck from './cpuBoard';
import {Guess} from './cpuBoard.js';
import {gameBoard} from './cell.js';
import {Player} from './cell.js';
import {useState} from 'react';

let cell = 0;
let win = false;
let index = null;


function SwapButton({setTurn, setCPUHit, setCPUMiss, setLocation, turn}){
    /*const [location, setLocation] = useState(0);
    const [cpuhit, setCPUHit] = useState(false);
    const [cpumiss, setCPUMiss] = useState(false);*/
    

    // generate random attack function

function generate_random_attack(hits,misses)
{
    // Get a random value
    var x =  Math.floor(Math.random() * (100 - 1) + 1);

    // If the value is in hits or in misses
    if (hits.includes(x) === true || misses.includes(x))
    {
      var untouched_cell = false;
      // continue to search for an open space
      while (untouched_cell === false)
      {
        x = Math.floor(Math.random() * (100 - 0) + 0);
        if (hits.includes(x) === true || misses.includes(x))
        {
          continue;
        }
        else
        {
          untouched_cell = true;
        }
      }
    }
    return x;
} 

// checkHit Function for CPU
function checkHit(){

    cell = generate_random_attack(Guess.cpuHits, Guess.cpuMisses)
    if (gameBoard[cell - 1] === null){
      Guess.cpuMisses.push(cell);
      setCPUMiss(true);
      setCPUHit(false);
      //alert("cpumiss " + cpumiss);
    }else if (gameBoard[cell - 1] !== null){
      Guess.cpuHits.push(cell);
      window.cpuHitCount += 1;
      setCPUMiss(false);
      setCPUHit(true);
      //remove peg from ship
      removePeg(cell);
      //check if ship is sunk
      checkSunk();
      win = winCheck();
      if (win === true)
      {
        alert("GAME OVER!");
      }
      else
      {
        Guess.cpuGuesses.push(cell);
      }    
    }
    setLocation(cell);
}
function removePeg(num){
    if (Player.ships.battleship.pegs.includes(num)){
        index = Player.ships.battleship.pegs.indexOf(num);
        Player.ships.battleship.pegs.splice(index, 1);
      }else if (Player.ships.cruiser.pegs.includes(num)){
        index = Player.ships.cruiser.pegs.indexOf(num);
        Player.ships.cruiser.pegs.splice(index, 1);
      }else if (Player.ships.sub.pegs.includes(num)){
        index = Player.ships.sub.pegs.indexOf(num);
        Player.ships.sub.pegs.splice(index, 1);
      }else if (Player.ships.destroyer.pegs.includes(num)){
        index = Player.ships.destroyer.pegs.indexOf(num);
        Player.ships.destroyer.pegs.splice(index, 1);
      }
}

function checkSunk(){
    if (Player.ships.battleship.pegs.length === 0){
      alert("They sunk your Battleship!");
    }else if (Player.ships.cruiser.pegs.length === 0){
      console.log("They sunk your Cruiser!");
    }else if (Player.ships.sub.pegs.length === 0){
      alert("They sunk your Sub");
    }else if (Player.ships.destroyer.pegs.length === 0){
      alert("They sunk your Destroyer");
    }
  }

function swapTurn({setTurn, turn}) {
    
    if (turn === "CPU"){
        setTurn("user");
        //alert(turn);
    }else if (turn === "user"){
        setTurn("CPU");
        //alert(turn);
        //run check hit function
        checkHit();
    }
}

    return(
        <Button variant="outlined" id="play-button" onClick={()=>swapTurn({setTurn, turn})} style={{color:"black", backgroundColor:"white", fontWeight:"bold"}}>
                        {"Change Turn"}
                    </Button>
    )
}export default SwapButton;