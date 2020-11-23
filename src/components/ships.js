import React, {useState} from 'react';
import Button from "@material-ui/core/Button";

function  selectShip() {
    
    return(
        //className="ships"
        <div >
            <Button className="ship-button" variant="outlined" id="battleship" onClick={()=> alert("hi")}>
                {"BattleShip 5-Nodes"}
            </Button>
            <Button className="ship-button" variant="outlined" id="cruiser">
                {"Cruiser 4-Nodes"}
            </Button>
            <Button className="ship-button" variant="outlined" id="sub">
                {"Submarine 3-Nodes"}
            </Button>
            <Button className="ship-button" variant="outlined" id="destroyer">
                {"Destroyer 2-Nodes"}
            </Button>   
            <h1 id="user-prompt">
                <div id="prompt">Please Select A Ship To Place</div>
                    <Button variant="outlined" id="play-button">
                        {"Play Game"}
                    </Button>
            </h1> 
        </div>
    )
}
export  default selectShip;