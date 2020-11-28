import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import App from './App.js';
import shipState from './App.js';

const Player = {
    ships: {
      battleship: {
        pegs: [null, null, null, null, null],
        isSunk: false,
      },
      cruiser: {
        pegs: [null, null, null, null],
        isSunk: false,
      },
      sub: {
        pegs: [null, null, null],
        isSunk: false,
      },
      destroyer: {
        pegs: [null, null],
        isSunk: false,
      },
    },
  };

  let gameBoard = [];
  for (let i = 0; i < 100; i++) {
    gameBoard[i] = null;
  }

function PlayerGrid({setShipStatePlace, setShipStateDirection, shipStatePlace, shipStateDirection}){
  const [position, setPosition] = useState();
  //const [dir, setDir] = useState(0);

  /*useEffect(()=>{
    if (shipStatePlace === true && shipStateDirection === false){
      window.start = position;
      setShipStatePlace(false);
      setShipStateDirection(true);
      alert('start: ' + position);
    }
    else if (shipStatePlace === false && shipStateDirection === true){
      window.dir = position;
      setShipStatePlace(false);
      setShipStateDirection(false);
      alert('dir: ' + position);
    }else{
      alert('undefined');
      alert('place: ' + shipStatePlace);
    }

  }, [grid]);*/
  

  function placeShip(pos){
    //alert("shipLength:" + window.shipLength);
    if (shipStatePlace === true && shipStateDirection === false){
      window.start = pos;
      setShipStatePlace(false);
      setShipStateDirection(true);
      // setting the 1st peg, and start place on the board array
      if (window.shipLength === 5){
        if(Player.ships.battleship.pegs.every(element => element === null)){
           Player.ships.battleship.pegs[0] = parseInt(window.start);
          gameBoard[window.start - 1] = window.shipLength;
        }
      }else if (window.shipLength === 4){
        if(Player.ships.cruiser.pegs.every(element => element === null)){
           Player.ships.cruiser.pegs[0] = window.start;
          gameBoard[window.start - 1] = window.shipLength;
        }
      }else if (window.shipLength === 3){
        if(Player.ships.sub.pegs.every(element => element === null)){
           Player.ships.sub.pegs[0] = window.start;
          gameBoard[window.start - 1] = window.shipLength;
        }
      }else if (window.shipLength === 2){
        if(Player.ships.destroyer.pegs.every(element => element === null)){
           Player.ships.destroyer.pegs[0] = window.start;
          gameBoard[window.start - 1] = window.shipLength;
        }
      } 
      alert('start: ' + pos);
      // next set the direction
    }
    else if (shipStatePlace === false && shipStateDirection === true){
      window.dir = pos;
      setShipStatePlace(false);
      setShipStateDirection(false);
      // selected ship to the left
      if (window.dir === window.start - 1){
        for (let i = window.shipLength; i > 0; i--){
          gameBoard[window.dir-i+1] = window.shipLength;
          //put if statements for ships
        }
      }
  
      // selected cell to the right
      else if (window.start === window.dir - 1){
        for (let i = 0; i < window.shipLength-1; i++){
          gameBoard[i+window.dir-1] = window.shipLength;
        }
      }
      // selected cell to the bottom
      else if (window.dir === window.start + 10){
        let x = window.dir;
        for (let i = 0; i < window.shipLength-1; i++){
          gameBoard[x-1] = window.shipLength;
          x += 10;
          console.log()
        }
      }
      // selected cell to the top
      else if (window.dir === window.start - 10){
        let x = window.dir;
        for (let i = 0; i < window.shipLength-1; i++){
          gameBoard[x-1] = window.shipLength;
          console.log(x);
          x -= 10;
        }
      }
      else if (
        window.start + 10 !== window.dir |
        window.start - 10 !== window.dir |
        window.start + 1 !== window.dir |
        window.start - 1 !== window.dir
      ) {
        alert("NOT A VALID SELECTION");
        placeShip();
      }
      fillPegs();
      alert('dir: ' + pos);
      alert('gameboard: ' + gameBoard);
      //alert('battleship: ' + Player.ships.battleship.pegs);

    }else{
      alert('undefined');
      alert('place: ' + shipStatePlace);
    }
    
  }

    //fill the ships pegs
  function fillPegs(){
    if (window.shipLength === 5){
     if (window.dir === window.start - 1) {
          Player.ships.battleship.pegs[1] = window.dir;
          Player.ships.battleship.pegs[2] = window.dir - 1;
          Player.ships.battleship.pegs[3] = window.dir - 2;
          Player.ships.battleship.pegs[4] = window.dir - 3;
        }else if (window.dir === window.start + 1) {
          Player.ships.battleship.pegs[1] = window.dir;
          Player.ships.battleship.pegs[2] = window.start + 2;
          Player.ships.battleship.pegs[3] = window.start + 3;
          Player.ships.battleship.pegs[4] = window.start + 4;
        }else if (window.dir === window.start - 10) {
          Player.ships.battleship.pegs[1] = window.dir;
          Player.ships.battleship.pegs[2] = window.dir - 10;
          Player.ships.battleship.pegs[3] = window.dir - 20;
          Player.ships.battleship.pegs[4] = window.dir - 30;
        }else if (window.dir === window.start + 10) {
          Player.ships.battleship.pegs[1] = window.dir;
          Player.ships.battleship.pegs[2] = window.dir + 10;
          Player.ships.battleship.pegs[3] = window.dir + 20;
          Player.ships.battleship.pegs[4] = window.dir + 30;
        }
      }
      else if (window.shipLength === 4) {
        if (window.dir === window.start - 1) {
          Player.ships.cruiser.pegs[1] = window.dir;
          Player.ships.cruiser.pegs[2] = window.dir - 1;
          Player.ships.cruiser.pegs[3] = window.dir - 2;
        }else if (window.dir === window.start + 1) {
          Player.ships.cruiser.pegs[1] = window.dir;
          Player.ships.cruiser.pegs[2] = window.start + 2;
          Player.ships.cruiser.pegs[3] = window.start + 3;
        }else if (window.dir === window.start - 10) {
          Player.ships.cruiser.pegs[1] = window.dir;
          Player.ships.cruiser.pegs[2] = window.dir - 10;
          Player.ships.cruiser.pegs[3] = window.dir - 20;
        }else if (window.dir === window.start + 10) {
          Player.ships.cruiser.pegs[1] = window.dir;
          Player.ships.cruiser.pegs[2] = window.dir + 10;
          Player.ships.cruiser.pegs[3] = window.dir + 20;
        }
      }
      else if (window.shipLength === 3){
        if (window.dir === window.start - 1) {
          Player.ships.sub.pegs[1] = window.dir;
          Player.ships.sub.pegs[2] = window.dir - 1;
        }else if (window.dir === window.start + 1) {
          Player.ships.sub.pegs[1] = window.dir;
          Player.ships.sub.pegs[2] = window.start + 2;
        }else if (window.dir === window.start - 10) {
          Player.ships.sub.pegs[1] = window.dir;
          Player.ships.sub.pegs[2] = window.dir - 10;
          }else if (window.dir === window.start + 10) {
          Player.ships.sub.pegs[1] = window.dir;
          Player.ships.sub.pegs[2] = window.dir + 10;
        }
      }
      else if (window.shipLength === 2){
        if (window.dir === window.start - 1) {
          Player.ships.destroyer.pegs[1] = window.dir;
        }else if (window.dir === window.start + 1) {
          Player.ships.destroyer.pegs[1] =window.dir;
        }else if (window.dir  === window.start - 10) {
          Player.ships.destroyer.pegs[1] = window.dir;
        }else if (window.dir === window.start + 10) {
          Player.ships.destroyer.pegs[1] = window.dir;
        }
      }
    }
   
  
    /*function placeShip(){
        if (window.shipLength === 5){
          if(Player.ships.battleship.pegs.every(element => element === null)){
             Player.ships.battleship.pegs[0] = parseInt(e.currentTarget.id);
            gameBoard[e.currentTarget.id - 1] = window.shipLength;
            alert(Player.ships.battleship.pegs[0]);
            /*SetDirection();
    
            if (dir == start - 1) {
              Player.ships.battleship.pegs[1] = parseInt(dir);
              Player.ships.battleship.pegs[2] = dir - 1;
              Player.ships.battleship.pegs[3] = dir - 2;
              Player.ships.battleship.pegs[4] = dir - 3;
            }else if (parseInt(dir) == parseInt(start) + 1) {
              Player.ships.battleship.pegs[1] = parseInt(dir);
              Player.ships.battleship.pegs[2] = parseInt(start) + 2;
              Player.ships.battleship.pegs[3] = parseInt(start) + 3;
              Player.ships.battleship.pegs[4] = parseInt(start) + 4;
            }
            else if (parseInt(dir) == parseInt(start) - 10) {
            Player.ships.battleship.pegs[1] = parseInt(dir);
            Player.ships.battleship.pegs[2] = parseInt(dir) - 10;
            Player.ships.battleship.pegs[3] = parseInt(dir) - 20;
            Player.ships.battleship.pegs[4] = parseInt(dir) - 30;
            }else if (parseInt(dir) == parseInt(start) + 10) {
            Player.ships.battleship.pegs[1] = parseInt(dir);
            Player.ships.battleship.pegs[2] = parseInt(dir) + 10;
            Player.ships.battleship.pegs[3] = parseInt(dir) + 20;
            Player.ships.battleship.pegs[4] = parseInt(dir) + 30;
            }
          }
        }
        else if (window.shipLength == 4){
          if(Player.ships.cruiser.pegs.every(element => element === null)){
             Player.ships.cruiser.pegs[0] = parseInt(start);
            gameBoard[start - 1] = window.shipLength;
    
            SetDirection();
    
            if (dir == start - 1) {
              Player.ships.cruiser.pegs[1] = parseInt(dir);
              Player.ships.cruiser.pegs[2] = dir - 1;
              Player.ships.cruiser.pegs[3] = dir - 2;
            }else if (parseInt(dir) == parseInt(start) + 1) {
              Player.ships.cruiser.pegs[1] = parseInt(dir);
              Player.ships.cruiser.pegs[2] = parseInt(start) + 2;
              Player.ships.cruiser.pegs[3] = parseInt(start) + 3;
            }
            else if (parseInt(dir) == parseInt(start) - 10) {
            Player.ships.cruiser.pegs[1] = parseInt(dir);
            Player.ships.cruiser.pegs[2] = parseInt(dir) - 10;
            Player.ships.cruiser.pegs[3] = parseInt(dir) - 20;
            }else if (parseInt(dir) == parseInt(start) + 10) {
            Player.ships.cruiser.pegs[1] = parseInt(dir);
            Player.ships.cruiser.pegs[2] = parseInt(dir) + 10;
            Player.ships.cruiser.pegs[3] = parseInt(dir) + 20;
            }
          }
        }
        else if (shipLength == 3){
          if(Player.ships.sub.pegs.every(element => element === null)){
             Player.ships.sub.pegs[0] = parseInt(start);
            gameBoard[start - 1] = window.shipLength;
    
            SetDirection();
    
            if (dir == start - 1) {
              Player.ships.sub.pegs[1] = parseInt(dir);
              Player.ships.sub.pegs[2] = dir - 1;
            }else if (parseInt(dir) == parseInt(start) + 1) {
              Player.ships.sub.pegs[1] = parseInt(dir);
              Player.ships.sub.pegs[2] = parseInt(start) + 2;
            }
            else if (parseInt(dir) == parseInt(start) - 10) {
            Player.ships.sub.pegs[1] = parseInt(dir);
            Player.ships.sub.pegs[2] = parseInt(dir) - 10;
            }else if (parseInt(dir) == parseInt(start) + 10) {
            Player.ships.sub.pegs[1] = parseInt(dir);
            Player.ships.sub.pegs[2] = parseInt(dir) + 10;
            }
          }
        }
        else if (window.shipLength == 2){
          if(Player.ships.destroyer.pegs.every(element => element === null)){
             Player.ships.destroyer.pegs[0] = parseInt(start);
            gameBoard[start - 1] = window.shipLength;
    
            SetDirection();
    
            if (dir == start - 1) {
              Player.ships.destroyer.pegs[1] = parseInt(dir);
            }else if (parseInt(dir) == parseInt(start) + 1) {
              Player.ships.destroyer.pegs[1] = parseInt(dir);
            }
            else if (parseInt(dir) == parseInt(start) - 10) {
            Player.ships.destroyer.pegs[1] = parseInt(dir);
            }else if (parseInt(dir) == parseInt(start) + 10) {
            Player.ships.destroyer.pegs[1] = parseInt(dir);
            }
          }*/
        //}}
        return(
            <div className="Board-div">
    <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
           <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(1)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(1) ? "orchid": Player.ships.cruiser.pegs.includes(1) ? "orange": Player.ships.sub.pegs.includes(1) ? "green": Player.ships.destroyer.pegs.includes(1) ? "yellow":"dodgerblue"}}>
                   1
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile" >
               <Paper elevation={4} onClick={() => placeShip(2)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(2) ? "orchid": Player.ships.cruiser.pegs.includes(2) ? "orange": Player.ships.sub.pegs.includes(2) ? "green": Player.ships.destroyer.pegs.includes(2) ? "yellow":"dodgerblue"}}>
                   2
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(3)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(3) ? "orchid": Player.ships.cruiser.pegs.includes(3) ? "orange": Player.ships.sub.pegs.includes(3) ? "green": Player.ships.destroyer.pegs.includes(3) ? "yellow":"dodgerblue"}}>
                   3
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(4)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(4) ? "orchid": Player.ships.cruiser.pegs.includes(4) ? "orange": Player.ships.sub.pegs.includes(4) ? "green": Player.ships.destroyer.pegs.includes(4) ? "yellow":"dodgerblue"}}>
                   4
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(5)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(5) ? "orchid": Player.ships.cruiser.pegs.includes(5) ? "orange": Player.ships.sub.pegs.includes(5) ? "green": Player.ships.destroyer.pegs.includes(5) ? "yellow":"dodgerblue"}}>
                   5
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(6)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(6) ? "orchid": Player.ships.cruiser.pegs.includes(6) ? "orange": Player.ships.sub.pegs.includes(6) ? "green": Player.ships.destroyer.pegs.includes(6) ? "yellow":"dodgerblue"}}>
                   6
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(7)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(7) ? "orchid": Player.ships.cruiser.pegs.includes(7) ? "orange": Player.ships.sub.pegs.includes(7) ? "green": Player.ships.destroyer.pegs.includes(7) ? "yellow":"dodgerblue"}}>
                   7
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(8)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(8) ? "orchid": Player.ships.cruiser.pegs.includes(8) ? "orange": Player.ships.sub.pegs.includes(8) ? "green": Player.ships.destroyer.pegs.includes(8) ? "yellow":"dodgerblue"}}>
                   8
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(9)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(9) ? "orchid": Player.ships.cruiser.pegs.includes(9) ? "orange": Player.ships.sub.pegs.includes(9) ? "green": Player.ships.destroyer.pegs.includes(9) ? "yellow":"dodgerblue"}}>
                   9
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(10)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(10) ? "orchid": Player.ships.cruiser.pegs.includes(10) ? "orange": Player.ships.sub.pegs.includes(10) ? "green": Player.ships.destroyer.pegs.includes(10) ? "yellow":"dodgerblue"}}>
                   10
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(11)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(11) ? "orchid": Player.ships.cruiser.pegs.includes(11) ? "orange": Player.ships.sub.pegs.includes(11) ? "green": Player.ships.destroyer.pegs.includes(11) ? "yellow":"dodgerblue"}}>
                   11
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(12)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(12) ? "orchid": Player.ships.cruiser.pegs.includes(12) ? "orange": Player.ships.sub.pegs.includes(12) ? "green": Player.ships.destroyer.pegs.includes(12) ? "yellow":"dodgerblue"}}>
                   12
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(13)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(13) ? "orchid": Player.ships.cruiser.pegs.includes(13) ? "orange": Player.ships.sub.pegs.includes(13) ? "green": Player.ships.destroyer.pegs.includes(13) ? "yellow":"dodgerblue"}}>
                   13
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(14)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(14) ? "orchid": Player.ships.cruiser.pegs.includes(14) ? "orange": Player.ships.sub.pegs.includes(14) ? "green": Player.ships.destroyer.pegs.includes(14) ? "yellow":"dodgerblue"}}>
                   14
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(15)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(15) ? "orchid": Player.ships.cruiser.pegs.includes(15) ? "orange": Player.ships.sub.pegs.includes(15) ? "green": Player.ships.destroyer.pegs.includes(15) ? "yellow":"dodgerblue"}}>
                   15
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(16)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(16) ? "orchid": Player.ships.cruiser.pegs.includes(16) ? "orange": Player.ships.sub.pegs.includes(16) ? "green": Player.ships.destroyer.pegs.includes(16) ? "yellow":"dodgerblue"}}>
                   16
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(17)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(17) ? "orchid": Player.ships.cruiser.pegs.includes(17) ? "orange": Player.ships.sub.pegs.includes(17) ? "green": Player.ships.destroyer.pegs.includes(17) ? "yellow":"dodgerblue"}}>
                   17
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(18)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(18) ? "orchid": Player.ships.cruiser.pegs.includes(18) ? "orange": Player.ships.sub.pegs.includes(18) ? "green": Player.ships.destroyer.pegs.includes(18) ? "yellow":"dodgerblue"}}>
                   18
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(19)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(19) ? "orchid": Player.ships.cruiser.pegs.includes(19) ? "orange": Player.ships.sub.pegs.includes(19) ? "green": Player.ships.destroyer.pegs.includes(19) ? "yellow":"dodgerblue"}}>
                   19
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(20)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(20) ? "orchid": Player.ships.cruiser.pegs.includes(20) ? "orange": Player.ships.sub.pegs.includes(20) ? "green": Player.ships.destroyer.pegs.includes(20) ? "yellow":"dodgerblue"}}>
                   20
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(21)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(21) ? "orchid": Player.ships.cruiser.pegs.includes(21) ? "orange": Player.ships.sub.pegs.includes(21) ? "green": Player.ships.destroyer.pegs.includes(21) ? "yellow":"dodgerblue"}}>
                   21
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(22)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(22) ? "orchid": Player.ships.cruiser.pegs.includes(22) ? "orange": Player.ships.sub.pegs.includes(22) ? "green": Player.ships.destroyer.pegs.includes(22) ? "yellow":"dodgerblue"}}>
                   22
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(23)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(23) ? "orchid": Player.ships.cruiser.pegs.includes(23) ? "orange": Player.ships.sub.pegs.includes(23) ? "green": Player.ships.destroyer.pegs.includes(23) ? "yellow":"dodgerblue"}}>
                   23
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(24)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(24) ? "orchid": Player.ships.cruiser.pegs.includes(24) ? "orange": Player.ships.sub.pegs.includes(24) ? "green": Player.ships.destroyer.pegs.includes(24) ? "yellow":"dodgerblue"}}>
                   24
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(25)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(25) ? "orchid": Player.ships.cruiser.pegs.includes(25) ? "orange": Player.ships.sub.pegs.includes(25) ? "green": Player.ships.destroyer.pegs.includes(25) ? "yellow":"dodgerblue"}}>
                   25
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(26)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(26) ? "orchid": Player.ships.cruiser.pegs.includes(26) ? "orange": Player.ships.sub.pegs.includes(26) ? "green": Player.ships.destroyer.pegs.includes(26) ? "yellow":"dodgerblue"}}>
                   26
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(27)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(27) ? "orchid": Player.ships.cruiser.pegs.includes(27) ? "orange": Player.ships.sub.pegs.includes(27) ? "green": Player.ships.destroyer.pegs.includes(27) ? "yellow":"dodgerblue"}}>
                   27
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(28)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(28) ? "orchid": Player.ships.cruiser.pegs.includes(28) ? "orange": Player.ships.sub.pegs.includes(28) ? "green": Player.ships.destroyer.pegs.includes(28) ? "yellow":"dodgerblue"}}>
                   28
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(29)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(29) ? "orchid": Player.ships.cruiser.pegs.includes(29) ? "orange": Player.ships.sub.pegs.includes(29) ? "green": Player.ships.destroyer.pegs.includes(29) ? "yellow":"dodgerblue"}}>
                   29
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(30)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(30) ? "orchid": Player.ships.cruiser.pegs.includes(30) ? "orange": Player.ships.sub.pegs.includes(30) ? "green": Player.ships.destroyer.pegs.includes(30) ? "yellow":"dodgerblue"}}>
                   30
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(31)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(31) ? "orchid": Player.ships.cruiser.pegs.includes(31) ? "orange": Player.ships.sub.pegs.includes(31) ? "green": Player.ships.destroyer.pegs.includes(31) ? "yellow":"dodgerblue"}}> 
                   31
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(32)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(32) ? "orchid": Player.ships.cruiser.pegs.includes(32) ? "orange": Player.ships.sub.pegs.includes(32) ? "green": Player.ships.destroyer.pegs.includes(32) ? "yellow":"dodgerblue"}}>
                   32
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(33)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(33) ? "orchid": Player.ships.cruiser.pegs.includes(33) ? "orange": Player.ships.sub.pegs.includes(33) ? "green": Player.ships.destroyer.pegs.includes(33) ? "yellow":"dodgerblue"}}>
                   33
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(34)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(34) ? "orchid": Player.ships.cruiser.pegs.includes(34) ? "orange": Player.ships.sub.pegs.includes(34) ? "green": Player.ships.destroyer.pegs.includes(34) ? "yellow":"dodgerblue"}}>
                   34
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(35)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(35) ? "orchid": Player.ships.cruiser.pegs.includes(35) ? "orange": Player.ships.sub.pegs.includes(35) ? "green": Player.ships.destroyer.pegs.includes(35) ? "yellow":"dodgerblue"}}>
                   35
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(36)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(36) ? "orchid": Player.ships.cruiser.pegs.includes(36) ? "orange": Player.ships.sub.pegs.includes(36) ? "green": Player.ships.destroyer.pegs.includes(36) ? "yellow":"dodgerblue"}}>
                   36
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(37)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(37) ? "orchid": Player.ships.cruiser.pegs.includes(37) ? "orange": Player.ships.sub.pegs.includes(37) ? "green": Player.ships.destroyer.pegs.includes(37) ? "yellow":"dodgerblue"}}>
                   37
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(38)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(38) ? "orchid": Player.ships.cruiser.pegs.includes(38) ? "orange": Player.ships.sub.pegs.includes(38) ? "green": Player.ships.destroyer.pegs.includes(38) ? "yellow":"dodgerblue"}}>
                   38
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(39)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(39) ? "orchid": Player.ships.cruiser.pegs.includes(39) ? "orange": Player.ships.sub.pegs.includes(39) ? "green": Player.ships.destroyer.pegs.includes(39) ? "yellow":"dodgerblue"}}>
                   39
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(40)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(40) ? "orchid": Player.ships.cruiser.pegs.includes(40) ? "orange": Player.ships.sub.pegs.includes(40) ? "green": Player.ships.destroyer.pegs.includes(40) ? "yellow":"dodgerblue"}}>
                   40
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(41)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(41) ? "orchid": Player.ships.cruiser.pegs.includes(41) ? "orange": Player.ships.sub.pegs.includes(41) ? "green": Player.ships.destroyer.pegs.includes(41) ? "yellow":"dodgerblue"}}>
                   41
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(42)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(42) ? "orchid": Player.ships.cruiser.pegs.includes(42) ? "orange": Player.ships.sub.pegs.includes(42) ? "green": Player.ships.destroyer.pegs.includes(42) ? "yellow":"dodgerblue"}}>
                   42
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(43)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(43) ? "orchid": Player.ships.cruiser.pegs.includes(43) ? "orange": Player.ships.sub.pegs.includes(43) ? "green": Player.ships.destroyer.pegs.includes(43) ? "yellow":"dodgerblue"}}>
                   43
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(44)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(44) ? "orchid": Player.ships.cruiser.pegs.includes(44) ? "orange": Player.ships.sub.pegs.includes(44) ? "green": Player.ships.destroyer.pegs.includes(44) ? "yellow":"dodgerblue"}}>
                   44
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(45)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(45) ? "orchid": Player.ships.cruiser.pegs.includes(45) ? "orange": Player.ships.sub.pegs.includes(45) ? "green": Player.ships.destroyer.pegs.includes(45) ? "yellow":"dodgerblue"}}>
                   45
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(46)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(46) ? "orchid": Player.ships.cruiser.pegs.includes(46) ? "orange": Player.ships.sub.pegs.includes(46) ? "green": Player.ships.destroyer.pegs.includes(46) ? "yellow":"dodgerblue"}}>
                   46
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(47)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(47) ? "orchid": Player.ships.cruiser.pegs.includes(47) ? "orange": Player.ships.sub.pegs.includes(47) ? "green": Player.ships.destroyer.pegs.includes(47) ? "yellow":"dodgerblue"}}>
                   47
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(48)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(48) ? "orchid": Player.ships.cruiser.pegs.includes(48) ? "orange": Player.ships.sub.pegs.includes(48) ? "green": Player.ships.destroyer.pegs.includes(48) ? "yellow":"dodgerblue"}}>
                   48
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(49)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(49) ? "orchid": Player.ships.cruiser.pegs.includes(49) ? "orange": Player.ships.sub.pegs.includes(49) ? "green": Player.ships.destroyer.pegs.includes(49) ? "yellow":"dodgerblue"}}>
                   49
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(50)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(50) ? "orchid": Player.ships.cruiser.pegs.includes(50) ? "orange": Player.ships.sub.pegs.includes(50) ? "green": Player.ships.destroyer.pegs.includes(50) ? "yellow":"dodgerblue"}}>
                   50
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={51} onClick={()=> placeShip(51)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(51) ? "orchid": Player.ships.cruiser.pegs.includes(51) ? "orange": Player.ships.sub.pegs.includes(51) ? "green": Player.ships.destroyer.pegs.includes(51) ? "yellow":"dodgerblue"}}>
                   51
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(52)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(52) ? "orchid": Player.ships.cruiser.pegs.includes(52) ? "orange": Player.ships.sub.pegs.includes(52) ? "green": Player.ships.destroyer.pegs.includes(52) ? "yellow":"dodgerblue"}}>
                   52
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(53)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(53) ? "orchid": Player.ships.cruiser.pegs.includes(53) ? "orange": Player.ships.sub.pegs.includes(53) ? "green": Player.ships.destroyer.pegs.includes(53) ? "yellow":"dodgerblue"}}>
                   53
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(54)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(54) ? "orchid": Player.ships.cruiser.pegs.includes(54) ? "orange": Player.ships.sub.pegs.includes(54) ? "green": Player.ships.destroyer.pegs.includes(54) ? "yellow":"dodgerblue"}}>
                   54
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(55)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(55) ? "orchid": Player.ships.cruiser.pegs.includes(55) ? "orange": Player.ships.sub.pegs.includes(55) ? "green": Player.ships.destroyer.pegs.includes(55) ? "yellow":"dodgerblue"}}>
                   55
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(56)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(56) ? "orchid": Player.ships.cruiser.pegs.includes(56) ? "orange": Player.ships.sub.pegs.includes(56) ? "green": Player.ships.destroyer.pegs.includes(56) ? "yellow":"dodgerblue"}}>
                   56
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(57)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(57) ? "orchid": Player.ships.cruiser.pegs.includes(57) ? "orange": Player.ships.sub.pegs.includes(57) ? "green": Player.ships.destroyer.pegs.includes(57) ? "yellow":"dodgerblue"}}>
                   57
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(58)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(58) ? "orchid": Player.ships.cruiser.pegs.includes(58) ? "orange": Player.ships.sub.pegs.includes(58) ? "green": Player.ships.destroyer.pegs.includes(58) ? "yellow":"dodgerblue"}}>
                   58
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(59)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(59) ? "orchid": Player.ships.cruiser.pegs.includes(59) ? "orange": Player.ships.sub.pegs.includes(59) ? "green": Player.ships.destroyer.pegs.includes(59) ? "yellow":"dodgerblue"}}>
                   59
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(60)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(60) ? "orchid": Player.ships.cruiser.pegs.includes(60) ? "orange": Player.ships.sub.pegs.includes(60) ? "green": Player.ships.destroyer.pegs.includes(60) ? "yellow":"dodgerblue"}}>
                   60
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(61)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(61) ? "orchid": Player.ships.cruiser.pegs.includes(61) ? "orange": Player.ships.sub.pegs.includes(61) ? "green": Player.ships.destroyer.pegs.includes(61) ? "yellow":"dodgerblue"}}>
                   61
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(62)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(62) ? "orchid": Player.ships.cruiser.pegs.includes(62) ? "orange": Player.ships.sub.pegs.includes(62) ? "green": Player.ships.destroyer.pegs.includes(62) ? "yellow":"dodgerblue"}}>
                   62
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(63)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(63) ? "orchid": Player.ships.cruiser.pegs.includes(63) ? "orange": Player.ships.sub.pegs.includes(63) ? "green": Player.ships.destroyer.pegs.includes(63) ? "yellow":"dodgerblue"}}>
                   63
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(64)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(64) ? "orchid": Player.ships.cruiser.pegs.includes(64) ? "orange": Player.ships.sub.pegs.includes(64) ? "green": Player.ships.destroyer.pegs.includes(64) ? "yellow":"dodgerblue"}}>
                   64
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(65)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(65) ? "orchid": Player.ships.cruiser.pegs.includes(65) ? "orange": Player.ships.sub.pegs.includes(65) ? "green": Player.ships.destroyer.pegs.includes(65) ? "yellow":"dodgerblue"}}>
                   65
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(66)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(66) ? "orchid": Player.ships.cruiser.pegs.includes(66) ? "orange": Player.ships.sub.pegs.includes(66) ? "green": Player.ships.destroyer.pegs.includes(66) ? "yellow":"dodgerblue"}}>
                   66
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(67)}style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(67) ? "orchid": Player.ships.cruiser.pegs.includes(67) ? "orange": Player.ships.sub.pegs.includes(67) ? "green": Player.ships.destroyer.pegs.includes(67) ? "yellow":"dodgerblue"}}>
                   67
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(68)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(68) ? "orchid": Player.ships.cruiser.pegs.includes(68) ? "orange": Player.ships.sub.pegs.includes(68) ? "green": Player.ships.destroyer.pegs.includes(68) ? "yellow":"dodgerblue"}}>
                   68
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(69)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(69) ? "orchid": Player.ships.cruiser.pegs.includes(69) ? "orange": Player.ships.sub.pegs.includes(69) ? "green": Player.ships.destroyer.pegs.includes(69) ? "yellow":"dodgerblue"}}>
                   69
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(70)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(70) ? "orchid": Player.ships.cruiser.pegs.includes(70) ? "orange": Player.ships.sub.pegs.includes(70) ? "green": Player.ships.destroyer.pegs.includes(70) ? "yellow":"dodgerblue"}}>
                   70
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(71)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(71) ? "orchid": Player.ships.cruiser.pegs.includes(71) ? "orange": Player.ships.sub.pegs.includes(71) ? "green": Player.ships.destroyer.pegs.includes(71) ? "yellow":"dodgerblue"}}>
                   71
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(72)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(72) ? "orchid": Player.ships.cruiser.pegs.includes(72) ? "orange": Player.ships.sub.pegs.includes(72) ? "green": Player.ships.destroyer.pegs.includes(72) ? "yellow":"dodgerblue"}}>
                   72
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(73)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(73) ? "orchid": Player.ships.cruiser.pegs.includes(73) ? "orange": Player.ships.sub.pegs.includes(73) ? "green": Player.ships.destroyer.pegs.includes(73) ? "yellow":"dodgerblue"}}>
                   73
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(74)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(74) ? "orchid": Player.ships.cruiser.pegs.includes(74) ? "orange": Player.ships.sub.pegs.includes(74) ? "green": Player.ships.destroyer.pegs.includes(74) ? "yellow":"dodgerblue"}}>
                   74
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(75)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(75) ? "orchid": Player.ships.cruiser.pegs.includes(75) ? "orange": Player.ships.sub.pegs.includes(75) ? "green": Player.ships.destroyer.pegs.includes(75) ? "yellow":"dodgerblue"}}>
                   75
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(76)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(76) ? "orchid": Player.ships.cruiser.pegs.includes(76) ? "orange": Player.ships.sub.pegs.includes(76) ? "green": Player.ships.destroyer.pegs.includes(76) ? "yellow":"dodgerblue"}}>
                   76
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(77)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(77) ? "orchid": Player.ships.cruiser.pegs.includes(77) ? "orange": Player.ships.sub.pegs.includes(77) ? "green": Player.ships.destroyer.pegs.includes(77) ? "yellow":"dodgerblue"}}>
                   77
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(78)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(78) ? "orchid": Player.ships.cruiser.pegs.includes(78) ? "orange": Player.ships.sub.pegs.includes(78) ? "green": Player.ships.destroyer.pegs.includes(78) ? "yellow":"dodgerblue"}}>
                   78
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(79)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(79) ? "orchid": Player.ships.cruiser.pegs.includes(79) ? "orange": Player.ships.sub.pegs.includes(79) ? "green": Player.ships.destroyer.pegs.includes(79) ? "yellow":"dodgerblue"}}>
                   79
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(80)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(80) ? "orchid": Player.ships.cruiser.pegs.includes(80) ? "orange": Player.ships.sub.pegs.includes(80) ? "green": Player.ships.destroyer.pegs.includes(80) ? "yellow":"dodgerblue"}}>
                   80
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(81)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(81) ? "orchid": Player.ships.cruiser.pegs.includes(81) ? "orange": Player.ships.sub.pegs.includes(81) ? "green": Player.ships.destroyer.pegs.includes(81) ? "yellow":"dodgerblue"}}>
                   81
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(82)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(82) ? "orchid": Player.ships.cruiser.pegs.includes(82) ? "orange": Player.ships.sub.pegs.includes(82) ? "green": Player.ships.destroyer.pegs.includes(82) ? "yellow":"dodgerblue"}}>
                   82
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(83)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(83) ? "orchid": Player.ships.cruiser.pegs.includes(83) ? "orange": Player.ships.sub.pegs.includes(83) ? "green": Player.ships.destroyer.pegs.includes(83) ? "yellow":"dodgerblue"}}>
                   83
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(84)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(84) ? "orchid": Player.ships.cruiser.pegs.includes(84) ? "orange": Player.ships.sub.pegs.includes(84) ? "green": Player.ships.destroyer.pegs.includes(84) ? "yellow":"dodgerblue"}}>
                   84
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(85)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(85) ? "orchid": Player.ships.cruiser.pegs.includes(85) ? "orange": Player.ships.sub.pegs.includes(85) ? "green": Player.ships.destroyer.pegs.includes(85) ? "yellow":"dodgerblue"}}>
                   85
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(86)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(86) ? "orchid": Player.ships.cruiser.pegs.includes(86) ? "orange": Player.ships.sub.pegs.includes(86) ? "green": Player.ships.destroyer.pegs.includes(86) ? "yellow":"dodgerblue"}}>
                   86
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(87)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(87) ? "orchid": Player.ships.cruiser.pegs.includes(87) ? "orange": Player.ships.sub.pegs.includes(87) ? "green": Player.ships.destroyer.pegs.includes(87) ? "yellow":"dodgerblue"}}>
                   87
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(88)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(88) ? "orchid": Player.ships.cruiser.pegs.includes(88) ? "orange": Player.ships.sub.pegs.includes(88) ? "green": Player.ships.destroyer.pegs.includes(88) ? "yellow":"dodgerblue"}}>
                   88
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(89)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(89) ? "orchid": Player.ships.cruiser.pegs.includes(89) ? "orange": Player.ships.sub.pegs.includes(89) ? "green": Player.ships.destroyer.pegs.includes(89) ? "yellow":"dodgerblue"}}>
                   89
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(90)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(90) ? "orchid": Player.ships.cruiser.pegs.includes(90) ? "orange": Player.ships.sub.pegs.includes(90) ? "green": Player.ships.destroyer.pegs.includes(90) ? "yellow":"dodgerblue"}}>
                   90
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(91)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(91) ? "orchid": Player.ships.cruiser.pegs.includes(91) ? "orange": Player.ships.sub.pegs.includes(91) ? "green": Player.ships.destroyer.pegs.includes(91) ? "yellow":"dodgerblue"}}>
                   91
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(92)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(92) ? "orchid": Player.ships.cruiser.pegs.includes(92) ? "orange": Player.ships.sub.pegs.includes(92) ? "green": Player.ships.destroyer.pegs.includes(92) ? "yellow":"dodgerblue"}}>
                   92
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(93)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(93) ? "orchid": Player.ships.cruiser.pegs.includes(93) ? "orange": Player.ships.sub.pegs.includes(93) ? "green": Player.ships.destroyer.pegs.includes(93) ? "yellow":"dodgerblue"}}>
                   93
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(94)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(94) ? "orchid": Player.ships.cruiser.pegs.includes(94) ? "orange": Player.ships.sub.pegs.includes(94) ? "green": Player.ships.destroyer.pegs.includes(94) ? "yellow":"dodgerblue"}}>
                   94
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(95)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(95) ? "orchid": Player.ships.cruiser.pegs.includes(95) ? "orange": Player.ships.sub.pegs.includes(95) ? "green": Player.ships.destroyer.pegs.includes(95) ? "yellow":"dodgerblue"}}>
                   95
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(96)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(96) ? "orchid": Player.ships.cruiser.pegs.includes(96) ? "orange": Player.ships.sub.pegs.includes(96) ? "green": Player.ships.destroyer.pegs.includes(96) ? "yellow":"dodgerblue"}}>
                   96
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(97)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(97) ? "orchid": Player.ships.cruiser.pegs.includes(97) ? "orange": Player.ships.sub.pegs.includes(97) ? "green": Player.ships.destroyer.pegs.includes(97) ? "yellow":"dodgerblue"}}>
                   97
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(98)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(98) ? "orchid": Player.ships.cruiser.pegs.includes(98) ? "orange": Player.ships.sub.pegs.includes(98) ? "green": Player.ships.destroyer.pegs.includes(98) ? "yellow":"dodgerblue"}}>
                   98
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(99)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(99) ? "orchid": Player.ships.cruiser.pegs.includes(99) ? "orange": Player.ships.sub.pegs.includes(99) ? "green": Player.ships.destroyer.pegs.includes(99) ? "yellow":"dodgerblue"}}>
                   99
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={() => placeShip(100)} style={{color:"white", backgroundColor: Player.ships.battleship.pegs.includes(100) ? "orchid": Player.ships.cruiser.pegs.includes(100) ? "orange": Player.ships.sub.pegs.includes(100) ? "green": Player.ships.destroyer.pegs.includes(100) ? "yellow":"dodgerblue"}}>
                   100
               </Paper>
             </Grid>
           </Grid>
        </Grid>
    </Grid>
    <Button id="swap-turn" variant="outlined">
      {"Change Turn"}
    </Button> 

    </div>

 


        )
      
    }
    export default PlayerGrid;