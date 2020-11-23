import React, {useState} from 'react';
import Button from "@material-ui/core/Button";

let shipLength = 0;
let start = 0;

function SelectShip() {

    function selectShip(e){
        if (e.currentTarget.id === "battleship"){
            shipLength = 5;
            start = prompt("Select a start space place your Battleship");
            alert(shipLength);
        //PlaceShip();
      } else if (e.currentTarget.id === "cruiser") {
            shipLength = 4;
            start = prompt("Select a start space place your Cruiser");
            alert(shipLength);
            //PlaceShip();
      } else if (e.currentTarget.id  === "sub") {
            shipLength = 3;
            start = prompt("Select a start space place your Sub");
            alert(shipLength);
            //PlaceShip();
      } else if (e.currentTarget.id  === "destroyer") {
            shipLength = 2;
            start = prompt("Select a start space place your Destroyer");
            alert(shipLength);
            //PlaceShip();
      }
    }

    return(
        
        <div className="ships">
            <Button className="ship-button" variant="outlined" id="battleship" onClick={selectShip}>
                {"BattleShip 5-Nodes"}
            </Button>
            <Button className="ship-button" variant="outlined" id="cruiser" onClick={selectShip}>
                {"Cruiser 4-Nodes"}
            </Button>
            <Button className="ship-button" variant="outlined" id="sub" onClick={selectShip}>
                {"Submarine 3-Nodes"}
            </Button>
            <Button className="ship-button" variant="outlined" id="destroyer" onClick={selectShip}>
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


export default SelectShip;