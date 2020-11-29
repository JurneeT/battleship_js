import { Button } from '@material-ui/core';

function swapTurn({setTurn, turn}) {
    if (turn === "CPU"){
        setTurn("user");
    }else if (turn === "user"){
        setTurn("CPU");
    }
}

function SwapButton(){

    return(
        <Button variant="outlined" id="play-button">
                        {"Change Turn"}
                    </Button>
    )
}export default SwapButton;