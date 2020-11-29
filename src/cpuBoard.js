import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import {cpuBoard} from './playGame.js';

// variables for checking guesses

var Guess = {
    prevHits: [],
    prevMisses: [],
    cpuGuesses: [],
    playerGuesses:[],
    cpuHits: [],
    cpuMisses: []
  };

let cell = 0;
let playerHitCount = 0;
let cpuHitCount = 0;
let win = false;
///////////////////////////
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
//////////////////////////
// winCheck --> check for win to be called within checkHit
function winCheck() {
    if (playerHitCount === 14) {
      alert("YOU WIN!");
      return true;
    } else if (cpuHitCount === 14) {
      alert("CPU WINS!");
      return true;
    } else return false;
  }

/////////////////////////

function CPUGrid(){
  // function that reads in guesses from player and CPU
  function checkHit(pos){
    //change gameBoard to cpuBoard
    // If the player's guess is invalid
    if(Guess.playerGuesses.includes(pos) === true){
      console.log("You Already Shot Here");
      checkHit();
    }// If the player's guess is valid
    else if (Guess.playerGuesses.includes(pos) === false){
      if (cpuBoard[pos - 1] == null) // If the the cell is empty
      {
        alert("Miss");
        Guess.playerGuesses.push(pos);
        Guess.prevMisses.push(pos);
        alert(Guess.prevMisses);
      }else if (cpuBoard[pos - 1] !== null) // if the cell is occupied
    {// increment hit count and check if win
      playerHitCount += 1;
      win = winCheck();
      if (win === true){
        console.log("YOU WIN!")
      }else{ //if not a win
        console.log("Hit");
        Guess.prevHits.push(parseInt(cell));
        Guess.playerGuesses.push(parseInt(cell));
      }  
    } 
}
  
  /*else if (turn === "cpu")
  {
    cell = generate_random_attack(Guess.cpuMisses,Guess.cpuHits)
    if (window.gameBoard[cell - 1] === null){
      console.log("Miss at cell: " + cell);
      Guess.cpuMisses.push(cell);
    }else if (window.gameBoard[cell - 1] !== null){
      Guess.cpuHits.push(cell);
      cpuHitCount += 1;
      win = winCheck();
      if (win === true)
      {
        console.log("GAME OVER!")
      }
      else
      {
        Guess.cpuGuesses.push(cell);
      }    
    }
  }*/
  }


    return(
    <div className="CPU-Board-div">
    <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
           <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="CPU-Tile">
               <Paper elevation={4} style={{color:"white", backgroundColor: Guess.prevMisses.includes(1) ? "gray": Guess.prevHits.includes(1) ? "red":"#07102c"}} onClick={()=>{checkHit(1); alert("Is 1 in Guess.prevMisses? "+Guess.prevMisses.includes(1))}}>
                   -1
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>alert(Guess.prevMisses)} style={{color:"white", backgroundColor: Guess.prevHits.includes(2) ? "red": Guess.prevMisses.includes(2) ? "gray": "#07102c"}}>
                   -2
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4} onClick={()=>checkHit(1)} style={{color:"white", backgroundColor: Guess.prevMisses.includes(1) ? "gray": Guess.prevHits.includes(1) ? "red":"#07102c"}}>
                   -3
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -4
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -5
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -6
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -7
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -8
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -9
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -10
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -11
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -12
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -13
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -14
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -15
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -16
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -17
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -18
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -19
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -20
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -21
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -22
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -23
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -24
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -25
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -26
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -27
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -28
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -29
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -30
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -31
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -32
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -33
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -34
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -35
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -36
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -37
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -38
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -39
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -40
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -41
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -42
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -43
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -44
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -45
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -46
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -47
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -48
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -49
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -50
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -51
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -52
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -53
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -54
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -55
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -56
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -57
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -58
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -59
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -60
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -61
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -62
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -63
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -64
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -65
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -66
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -67
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -68
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -69
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -70
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -71
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -72
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -73
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -74
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -75
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -76
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -77
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -78
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -79
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -80
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -81
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -82
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -83
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -84
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -85
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -86
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -87
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -88
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -89
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -90
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -91
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -92
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -93
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -94
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -95
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -96
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -97
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -98
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -99
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   -100
               </Paper>
             </Grid>
           </Grid>
        </Grid>
    </Grid>
    </div>
    )

}export default CPUGrid;