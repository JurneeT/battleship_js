import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import { PlaceShip } from './cell.js'
import shipState from './App.js';
import {useRef} from 'react';

let shipLength = 0;
let start = 0;

function SelectShip({setShipStatePlace}) {
    const [battleshipBtnEnabled, setBattleshipBtnEnabled] = useState(true);
    const [cruiserBtnEnabled, setCruiserBtnEnabled] = useState(true);
    const [subBtnEnabled, setSubBtnEnabled] = useState(true);
    const [destroyerBtnEnabled, setDestroyerBtnEnabled] = useState(true);
    
    function selectShip(e){
        if (e.currentTarget.id === "battleship"){
            window.shipLength = 5;
            setShipStatePlace(true);
            setBattleshipBtnEnabled(false);
            //btnRef.current.setAttribute("disabled", "disabled");
            //alert("Select a start space to place your Battleship");
            //PlaceShip();
      } else if (e.currentTarget.id === "cruiser") {
            window.shipLength = 4;
            setShipStatePlace(true);
            setCruiserBtnEnabled(false);
            //alert("Select a start space to place your Cruiser");
            //PlaceShip();
      } else if (e.currentTarget.id  === "sub") {
            window.shipLength = 3;
            setShipStatePlace(true);
            setSubBtnEnabled(false);
            //alert("Select a start space to place your Sub");
            //PlaceShip();
      } else if (e.currentTarget.id  === "destroyer") {
            window.shipLength = 2;
            setShipStatePlace(true);
            setDestroyerBtnEnabled(false);
            //alert("Select a start space to place your Destroyer");
            //PlaceShip();
      }
    }

    return(
        
        <div className="ships">
            {battleshipBtnEnabled === true ?
            
            <Button  className="ship-button" mt={10} variant="outlined" id="battleship" onClick={selectShip} style={{color: "white", backgroundColor:"orchid", fontWeight: "bold"}}>
            {"BattleShip 5-Nodes"}
        </Button>:<Button disabled className="ship-button" mt={10} variant="outlined" id="battleship" onClick={selectShip} style={{color: "white", backgroundColor:"orchid", fontWeight: "bold"}}>
            {"BattleShip 5-Nodes"}
        </Button>
            }
            
            {cruiserBtnEnabled === true ?
            
            <Button  className="ship-button" mt={10} variant="outlined" id="cruiser" onClick={selectShip} style={{color: "white", backgroundColor:"orange", fontWeight: "bold"}}>
            {"Cruiser 5-Nodes"}
        </Button>:<Button disabled className="ship-button" mt={10} variant="cruiser" id="cruiser" onClick={selectShip} style={{color: "white", backgroundColor:"orange", fontWeight: "bold"}}>
            {"Cruiser 4-Nodes"}
        </Button>
            }

            {subBtnEnabled === true ?
            
            <Button  className="ship-button" mt={10} variant="outlined" id="sub" onClick={selectShip} style={{color: "white", backgroundColor:"green", fontWeight: "bold"}}>
            {"Sub 5-Nodes"}
        </Button>:<Button disabled className="ship-button" mt={10} variant="outlined" id="sub" onClick={selectShip} style={{color: "white", backgroundColor:"green", fontWeight: "bold"}}>
            {"Sub 3-Nodes"}
        </Button>
            }
            
            {destroyerBtnEnabled === true ?
            
            <Button  className="ship-button" mt={10} variant="outlined" id="destroyer" onClick={selectShip} style={{color: "white", backgroundColor:"#663300", fontWeight: "bold"}}>
            {"Destroyer 5-Nodes"}
        </Button>:<Button disabled className="ship-button" mt={10} variant="destroyer" id="battleship" onClick={selectShip} style={{color: "white", backgroundColor:"#663300", fontWeight: "bold"}}>
            {"Destroyer 2-Nodes"}
        </Button>
            }
           {/* <h1 id="user-prompt">
            <div id="prompt">Please Select A Ship To Place</div>
    </h1> */}
    </div>
    )
}


export default SelectShip;