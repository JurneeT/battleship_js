import React, {useState} from 'react';
import { Button } from '@material-ui/core';

let cpuBoard;
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

function PlayGame (){

    return(
        <Button variant="outlined" id="play-button">
                        {"Play Game"}
                    </Button>
    )
}export default PlayGame;