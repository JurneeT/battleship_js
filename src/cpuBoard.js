import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import {cpuBoard, CPU} from './playGame.js';
import React from 'react';
import {useState} from 'react';

// variables for checking guesses

export const Guess = {
    prevHits: [],
    prevMisses: [],
    cpuGuesses: [],
    playerGuesses:[],
    cpuHits: [],
    cpuMisses: []
  };


let playerHitCount = 0;
let cpuHitCount = 0;
let win = false;
let target = null;



// winCheck --> check for win to be called within checkHit
export function winCheck() {
    if (playerHitCount === 14) {
      alert("YOU WIN!");
      return true;
    } else if (cpuHitCount === 14) {
      alert("CPU WINS!");
      return true;
    } else return false;
  }

/////////////////////////
function removePeg(num){
  if(cpuBoard[num-1] === 5){
    CPU.ships.battleship.size-=1;
    if(CPU.ships.battleship.size === 0){
      CPU.ships.battleship.isSunk=true;
      console.log("Battleship is down")

    }

  }
  else if(cpuBoard[num-1] === 4){
    
    CPU.ships.cruiser.size-=1;
    if(CPU.ships.cruiser.size === 0){
      CPU.ships.cruiser.isSunk=true;
      alert("Cruiser is down");

    }

  }
  else if(cpuBoard[num-1] === 3){
    CPU.ships.sub.size-=1;
    if(CPU.ships.sub.size === 0){
      CPU.ships.sub.isSunk=true;
      alert("Sub is down");
    }

  }
  else if(cpuBoard[num-1] === 2){
    CPU.ships.destroyer.size-=1;
    if(CPU.ships.destroyer.size === 0){
      CPU.ships.destroyer.isSunk=true;
      alert("Destroyer is down");
    }
}
}
////////////////////////

function CPUGrid(){

  const [position, setPosition] = useState(0);
  const [miss, setMiss] = useState(false);
  const [hit, setHit] = useState(false);

  // function that reads in guesses from player and CPU
  function checkHit(pos){

    setPosition(pos);
    //change gameBoard to cpuBoard
    // If the player's guess is invalid
    if(Guess.playerGuesses.includes(pos) === true){
      alert("You Already Shot Here");
      //checkHit();
    }// If the player's guess is valid
    else if (Guess.playerGuesses.includes(pos) === false){
      if (cpuBoard[pos - 1] == null) // If the the cell is empty
      {
        setMiss(true);
        Guess.playerGuesses.push(pos);
        Guess.prevMisses.push(pos);
        //alert("This is the prev misses array: " + Guess.prevMisses);
      }else if (cpuBoard[pos - 1] !== null) // if the cell is occupied
    {// increment hit count and check if win
      playerHitCount += 1;
      //alert("Hit count: " + playerHitCount);
      setHit(true);
      removePeg(pos);
      win = winCheck();
      if (win === true){
        alert("YOU WIN!");
      }else{ //if not a win
        Guess.prevHits.push(pos);
        Guess.playerGuesses.push(pos);
      }  
    } 
  }
}


    return(
      
    <div className="CPU-Board-div">
      {hit === true ?
      <h1>You got a HIT at cell ({position})</h1>: miss === true ?
      <h1>You MISSED at cell ({position})</h1>:null
      }
      
    <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
           <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="CPU-Tile">
               <Paper elevation={4} onClick={()=> checkHit(1)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(1) ? "gray": Guess.prevHits.includes(1) ? "red":"#07102c"}}>
                   -1
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(2)} style={{color:"white", backgroundColor: Guess.prevHits.includes(2) ? "red": Guess.prevMisses.includes(2) ? "gray": "#07102c"}}>
                   -2
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(3)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(3) ? "gray": Guess.prevHits.includes(3) ? "red":"#07102c"}}>
                   -3
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(4)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(4) ? "gray": Guess.prevHits.includes(4) ? "red":"#07102c"}}>
                   -4
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(5)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(5) ? "gray": Guess.prevHits.includes(5) ? "red":"#07102c"}}>
                   -5
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(6)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(6) ? "gray": Guess.prevHits.includes(6) ? "red":"#07102c"}}>
                   -6
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(7)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(7) ? "gray": Guess.prevHits.includes(7) ? "red":"#07102c"}}>
                   -7
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(8)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(8) ? "gray": Guess.prevHits.includes(8) ? "red":"#07102c"}}>
                   -8
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(9)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(9) ? "gray": Guess.prevHits.includes(9) ? "red":"#07102c"}}>
                   -9
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(10)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(10) ? "gray": Guess.prevHits.includes(10) ? "red":"#07102c"}}>
                   -10
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(11)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(11) ? "gray": Guess.prevHits.includes(11) ? "red":"#07102c"}}>
                   -11
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(12)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(12) ? "gray": Guess.prevHits.includes(12) ? "red":"#07102c"}}>
                   -12
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(13)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(13) ? "gray": Guess.prevHits.includes(13) ? "red":"#07102c"}}>
                   -13
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(14)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(14) ? "gray": Guess.prevHits.includes(14) ? "red":"#07102c"}}>
                   -14
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(15)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(15) ? "gray": Guess.prevHits.includes(15) ? "red":"#07102c"}}>
                   -15
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(16)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(16) ? "gray": Guess.prevHits.includes(16) ? "red":"#07102c"}}>
                   -16
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(17)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(17) ? "gray": Guess.prevHits.includes(17) ? "red":"#07102c"}}>
                   -17
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(18)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(18) ? "gray": Guess.prevHits.includes(18) ? "red":"#07102c"}}>
                   -18
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(19)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(19) ? "gray": Guess.prevHits.includes(19) ? "red":"#07102c"}}>
                   -19
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(20)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(20) ? "gray": Guess.prevHits.includes(20) ? "red":"#07102c"}}>
                   -20
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(21)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(21) ? "gray": Guess.prevHits.includes(21) ? "red":"#07102c"}}>
                   -21
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(22)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(22) ? "gray": Guess.prevHits.includes(22) ? "red":"#07102c"}}>
                   -22
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(23)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(23) ? "gray": Guess.prevHits.includes(23) ? "red":"#07102c"}}>
                   -23
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(24)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(24) ? "gray": Guess.prevHits.includes(24) ? "red":"#07102c"}}>
                   -24
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(25)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(25) ? "gray": Guess.prevHits.includes(25) ? "red":"#07102c"}}>
                   -25
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(26)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(26) ? "gray": Guess.prevHits.includes(26) ? "red":"#07102c"}}>
                   -26
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(27)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(27) ? "gray": Guess.prevHits.includes(27) ? "red":"#07102c"}}>
                   -27
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(28)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(28) ? "gray": Guess.prevHits.includes(28) ? "red":"#07102c"}}>
                   -28
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(29)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(29) ? "gray": Guess.prevHits.includes(29) ? "red":"#07102c"}}>
                   -29
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(30)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(30) ? "gray": Guess.prevHits.includes(30) ? "red":"#07102c"}}>
                   -30
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(31)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(31) ? "gray": Guess.prevHits.includes(31) ? "red":"#07102c"}}>
                   -31
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(32)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(32) ? "gray": Guess.prevHits.includes(32) ? "red":"#07102c"}}>
                   -32
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(33)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(33) ? "gray": Guess.prevHits.includes(33) ? "red":"#07102c"}}>
                   -33
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(34)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(34) ? "gray": Guess.prevHits.includes(34) ? "red":"#07102c"}}>
                   -34
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(35)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(35) ? "gray": Guess.prevHits.includes(35) ? "red":"#07102c"}}>
                   -35
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(36)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(36) ? "gray": Guess.prevHits.includes(36) ? "red":"#07102c"}}>
                   -36
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(37)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(37) ? "gray": Guess.prevHits.includes(37) ? "red":"#07102c"}}>
                   -37
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(38)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(38) ? "gray": Guess.prevHits.includes(38) ? "red":"#07102c"}}>
                   -38
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(39)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(39) ? "gray": Guess.prevHits.includes(39) ? "red":"#07102c"}}>
                   -39
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(40)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(40) ? "gray": Guess.prevHits.includes(40) ? "red":"#07102c"}}>
                   -40
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(41)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(41) ? "gray": Guess.prevHits.includes(41) ? "red":"#07102c"}}>
                   -41
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(42)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(42) ? "gray": Guess.prevHits.includes(42) ? "red":"#07102c"}}>
                   -42
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(43)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(43) ? "gray": Guess.prevHits.includes(43) ? "red":"#07102c"}}>
                   -43
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(44)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(44) ? "gray": Guess.prevHits.includes(44) ? "red":"#07102c"}}>
                   -44
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(45)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(45) ? "gray": Guess.prevHits.includes(45) ? "red":"#07102c"}}>
                   -45
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(46)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(46) ? "gray": Guess.prevHits.includes(46) ? "red":"#07102c"}}>
                   -46
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(47)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(47) ? "gray": Guess.prevHits.includes(47) ? "red":"#07102c"}}>
                   -47
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(48)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(48) ? "gray": Guess.prevHits.includes(48) ? "red":"#07102c"}}>
                   -48
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(49)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(49) ? "gray": Guess.prevHits.includes(49) ? "red":"#07102c"}}>
                   -49
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(50)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(50) ? "gray": Guess.prevHits.includes(50) ? "red":"#07102c"}}>
                   -50
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(51)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(51) ? "gray": Guess.prevHits.includes(51) ? "red":"#07102c"}}>
                   -51
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(52)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(52) ? "gray": Guess.prevHits.includes(52) ? "red":"#07102c"}}>
                   -52
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(53)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(53) ? "gray": Guess.prevHits.includes(53) ? "red":"#07102c"}}>
                   -53
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(54)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(54) ? "gray": Guess.prevHits.includes(54) ? "red":"#07102c"}}>
                   -54
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(55)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(55) ? "gray": Guess.prevHits.includes(55) ? "red":"#07102c"}}>
                   -55
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(56)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(56) ? "gray": Guess.prevHits.includes(56) ? "red":"#07102c"}}>
                   -56
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(57)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(57) ? "gray": Guess.prevHits.includes(57) ? "red":"#07102c"}}>
                   -57
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(58)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(58) ? "gray": Guess.prevHits.includes(58) ? "red":"#07102c"}}>
                   -58
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(59)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(59) ? "gray": Guess.prevHits.includes(59) ? "red":"#07102c"}}>
                   -59
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(60)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(60) ? "gray": Guess.prevHits.includes(60) ? "red":"#07102c"}}>
                   -60
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(61)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(61) ? "gray": Guess.prevHits.includes(61) ? "red":"#07102c"}}>
                   -61
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(62)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(62) ? "gray": Guess.prevHits.includes(62) ? "red":"#07102c"}}>
                   -62
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(63)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(63) ? "gray": Guess.prevHits.includes(63) ? "red":"#07102c"}}>
                   -63
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(64)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(64) ? "gray": Guess.prevHits.includes(64) ? "red":"#07102c"}}>
                   -64
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(65)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(65) ? "gray": Guess.prevHits.includes(65) ? "red":"#07102c"}}>
                   -65
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(66)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(66) ? "gray": Guess.prevHits.includes(66) ? "red":"#07102c"}}>
                   -66
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(67)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(67) ? "gray": Guess.prevHits.includes(67) ? "red":"#07102c"}}>
                   -67
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(68)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(68) ? "gray": Guess.prevHits.includes(68) ? "red":"#07102c"}}>
                   -68
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(69)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(69) ? "gray": Guess.prevHits.includes(69) ? "red":"#07102c"}}>
                   -69
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(70)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(70) ? "gray": Guess.prevHits.includes(70) ? "red":"#07102c"}}>
                   -70
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(71)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(71) ? "gray": Guess.prevHits.includes(71) ? "red":"#07102c"}}>
                   -71
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(72)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(72) ? "gray": Guess.prevHits.includes(72) ? "red":"#07102c"}}>
                   -72
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(73)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(73) ? "gray": Guess.prevHits.includes(73) ? "red":"#07102c"}}>
                   -73
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(74)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(74) ? "gray": Guess.prevHits.includes(74) ? "red":"#07102c"}}>
                   -74
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(75)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(75) ? "gray": Guess.prevHits.includes(75) ? "red":"#07102c"}}>
                   -75
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(76)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(76) ? "gray": Guess.prevHits.includes(76) ? "red":"#07102c"}}>
                   -76
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(77)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(77) ? "gray": Guess.prevHits.includes(77) ? "red":"#07102c"}}>
                   -77
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(78)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(78) ? "gray": Guess.prevHits.includes(78) ? "red":"#07102c"}}>
                   -78
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(79)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(79) ? "gray": Guess.prevHits.includes(79) ? "red":"#07102c"}}>
                   -79
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(80)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(80) ? "gray": Guess.prevHits.includes(80) ? "red":"#07102c"}}>
                   -80
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(81)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(81) ? "gray": Guess.prevHits.includes(81) ? "red":"#07102c"}}>
                   -81
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(82)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(82) ? "gray": Guess.prevHits.includes(82) ? "red":"#07102c"}}>
                   -82
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(83)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(83) ? "gray": Guess.prevHits.includes(83) ? "red":"#07102c"}}>
                   -83
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(84)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(84) ? "gray": Guess.prevHits.includes(84) ? "red":"#07102c"}}>
                   -84
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(85)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(85) ? "gray": Guess.prevHits.includes(85) ? "red":"#07102c"}}>
                   -85
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(86)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(86) ? "gray": Guess.prevHits.includes(86) ? "red":"#07102c"}}>
                   -86
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(87)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(87) ? "gray": Guess.prevHits.includes(87) ? "red":"#07102c"}}>
                   -87
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(88)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(88) ? "gray": Guess.prevHits.includes(88) ? "red":"#07102c"}}>
                   -88
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(89)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(89) ? "gray": Guess.prevHits.includes(89) ? "red":"#07102c"}}>
                   -89
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(90)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(90) ? "gray": Guess.prevHits.includes(90) ? "red":"#07102c"}}>
                   -90
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(91)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(91) ? "gray": Guess.prevHits.includes(91) ? "red":"#07102c"}}>
                   -91
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(92)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(92) ? "gray": Guess.prevHits.includes(92) ? "red":"#07102c"}}>
                   -92
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(93)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(93) ? "gray": Guess.prevHits.includes(93) ? "red":"#07102c"}}>
                   -93
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(94)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(94) ? "gray": Guess.prevHits.includes(94) ? "red":"#07102c"}}>
                   -94
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(95)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(95) ? "gray": Guess.prevHits.includes(95) ? "red":"#07102c"}}>
                   -95
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(96)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(96) ? "gray": Guess.prevHits.includes(96) ? "red":"#07102c"}}>
                   -96
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(97)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(97) ? "gray": Guess.prevHits.includes(97) ? "red":"#07102c"}}>
                   -97
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(98)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(98) ? "gray": Guess.prevHits.includes(98) ? "red":"#07102c"}}>
                   -98
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(99)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(99) ? "gray": Guess.prevHits.includes(99) ? "red":"#07102c"}}>
                   -99
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(100)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(100) ? "gray": Guess.prevHits.includes(100) ? "red":"#07102c"}}>
                   -100
               </Paper>
             </Grid>
           </Grid>
        </Grid>
    </Grid>
    </div>
    )

}export default CPUGrid;