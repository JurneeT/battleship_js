import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import winCheck from './cpuBoard';
import {Guess} from './cpuBoard.js';
import {gameBoard} from './cell.js';

let cell = 0;
let win = false;
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
      alert("CPU MISSED at cell " + cell);
      Guess.cpuMisses.push(cell);
    }else if (gameBoard[cell - 1] !== null){
    alert("CPU HIT at cell " + cell);
      Guess.cpuHits.push(cell);
      window.cpuHitCount += 1;
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

function SwapButton({setTurn, turn}){

    return(
        <Button variant="outlined" id="play-button" onClick={()=>swapTurn({setTurn, turn})} style={{color:"black", backgroundColor:"white", fontWeight:"bold"}}>
                        {"Change Turn"}
                    </Button>
    )
}export default SwapButton;