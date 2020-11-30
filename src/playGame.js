import React, {useState} from 'react';
import { Button } from '@material-ui/core';

import {useRef} from 'react';

// CPU Board variables
var cpuBoard = [];
let CPU = {
    ships: {
      battleship: {
        size: 5,
        pegs: [null, null, null, null, null],
        isSunk: false,
  
      },
      cruiser: {
        size: 4,
        pegs: [null, null, null, null],
        isSunk: false,
  
      },
      sub: {
        size: 3,
        pegs: [null, null, null],
        isSunk: false,
  
      },
      destroyer: {
        size: 2,
        pegs: [null, null],
        isSunk: false,
  
      },
    },
  };
  
let Board = Array(10).fill().map(() => Array(10).fill(null));


//CPU ship placement//////////////////////////
function positionShip(CPU,Board) {
  
    for (var boat in CPU.ships) {
      
      let length_of_boat = CPU.ships[boat].pegs.length;
      
      // choosing  position
      let validity = false;
      let dir_to_choose=[]
      while (validity === false) {
        var position = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  
        validity = isValidPosition(position, Board);
  
        dir_to_choose=chooseDir(length_of_boat, Board, position);
  
        if(dir_to_choose.length===0){
          validity=false;
        }
  
      }
      let new_direction = dir_to_choose[(Math.floor(Math.random() * ((dir_to_choose.length - 1) - 0 + 0)) + 0)];
  
      let column = Math.floor((position - 1) % 10);
      let row = Math.floor((position - 1) / 10);
      //choosing direction
  
      
      
      /*alert("length_of_boat="+length_of_boat)
      alert("position="+position)
      alert("new_direction="+new_direction);
      alert("")*/
      if (new_direction === (position - 10)) {
        for (let i = 0; i < length_of_boat; i++) {
          Board[row - i][column] = length_of_boat;
        }
      }
  
      else if (new_direction === (position + 10)) {
        for (let i = 0; i < length_of_boat; i++) {
          Board[row + i][column] = length_of_boat;
        }
      }
      else if (new_direction === (position + 1)) {
        for (let i = 0; i < length_of_boat; i++) {
          Board[row][column + i] = length_of_boat;
        }
      }
      else {
        for (let i = 0; i < length_of_boat; i++) {
          Board[row][column - i] = length_of_boat;
        }
      }
  
  
  
      
    //break;
      
    }
    
    
    return Board;
  
  }
  function chooseDir(length, board, position) {
    //alert(position)
    let liste = [];
    let column = Math.floor((position - 1) % 10);
    let row = Math.floor((position - 1) / 10);
  
    let liste_direction = ["U", "D", "L", "R"];
    for (var dir of liste_direction) {
      //alert(liste_direction[dir])
      let valid_direction = true;
      let count = 0;
      if (dir === "U") {
        let row_x = row;
        while (count < length) {
  
          if (row_x > 9 || row_x < 0 || column > 9 || column < 0) {
            valid_direction = false;
            
            /*alert("a1")
            alert(row_x)
            alert(column)
            alert(length)*/
            break;
  
          }
          
            if (board[row_x][column] !== null) {
              valid_direction = false;
            }
          row_x--;
          count++;
        }
  
      }
      else if (dir === "D") {
        let row_d = row;
        while (count < length) {
          if (row_d > 9 || row_d < 0 || column > 9 || column < 0) {
            valid_direction = false;
            
  
            /*alert("a2")
            alert(row_d)
            alert(column)
            alert(length)*/
            break;
          }
          
            if (board[row_d][column] !== null) {
              valid_direction = false;
  
            }
          row_d++;
          count++;
        }
  
      }
      else if (dir === "L") {
  
        let column_d = column;
        while (count < length) {
  
          if (row > 9 || row < 0 || column_d > 9 || column_d < 0) {
            valid_direction = false;
            
            /*alert("a3")
            alert(row)
            alert(column_d)
            alert(length)*/
            break;
  
          }
          
            if (board[row][column_d] !== null) {
              valid_direction = false;
            }
          count++;
          column_d--;
        }
  
      }
      else {
        let column_d = column;
        while (count < length) {
  
          if (row > 9 || row < 0 || column_d > 9 || column_d < 0) {
            valid_direction = false;
            
            /*alert("a4")
            alert(row)
            alert(column_d)
            alert(length)*/
            break;
  
          }
          
            if (board[row][column_d] !== null) {
              valid_direction = false;
            }
          count++;
          column_d++;
        }
  
      }
  
  
      if (valid_direction === true) {
        if (dir === "U") {
          liste.push(position - 10);
        }
        else if (dir === "D") {
          liste.push(position + 10);
        }
        else if (dir === "R") {
          liste.push(position + 1);
        }
        else {
          liste.push(position - 1);
        }
  
      }
      //alert(liste)
    }
    //alert(liste)
    
    //console.log("length="+liste.length  )
    
    //console.log("new_direction="+ new_direction)
  
  
    return liste;
  }
  
  function isValidPosition(num, board) {
    let column = Math.floor((num - 1) % 10);
    let row = Math.floor((num - 1) / 10);
  
  
    if (board[row][column] === null) {
      return true;
  
    }
    return false;
  
  }
  ///////////////////////////////


function PlayGame ({setTurn, turn, setStart}){
  
    function startGame(e){
        setStart(true);
        // change the turn to the user
        setTurn("user");
        // build the cpuBoard array
        positionShip(CPU, Board);
        // flatten cpuBoard into 1D array
        for(var i = 0; i < Board.length; i++){
        cpuBoard = cpuBoard.concat(Board[i]);
        }
        alert("cpuBoard: " + cpuBoard);
        // call function to begin taking in guesses
    }

    return(
        <Button variant="outlined" id="play-button" onClick={startGame} style={{color:"black", backgroundColor:"white", fontWeight:"bold"}}>
                        {"Play Game"}
                    </Button>
    )
}export default PlayGame;
export { cpuBoard };