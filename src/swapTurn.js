import { Button } from '@material-ui/core';
import React, {useState} from 'react';

function swapTurn({setTurn, turn}) {
    if (turn === "CPU"){
        setTurn("user");
        //alert(turn);
    }else if (turn === "user"){
        setTurn("CPU");
        //alert(turn);
    }
}

function SwapButton({setTurn, turn}){

    return(
        <Button variant="outlined" id="play-button" onClick={()=>swapTurn({setTurn, turn})}>
                        {"Change Turn"}
                    </Button>
    )
}export default SwapButton;