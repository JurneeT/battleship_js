import logo from './logo.png';
import './App.css';
import { Grid } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';

import SelectShip from './ships.js'
import { Box } from '@material-ui/core';

function App() {
  return (
    <body style={{
      backgroundColor:  "#a6ccf2	"}}>

    <div className="App">
       <img src={logo}  width="25%" height="25%" class="logo" alt="Bison Boggle Logo" /> 
      <h1 id="">Battle Ship</h1> 
    
      <SelectShip/>
      
  <div className="Input-select-size">
  </div>

   <div className="Board-div">
    <Grid container spacing={24} justify="center">
        <Grid item xs={12}>
           <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile" onClick={()=>alert("hi")}>
               <Paper elevation={4}>
                   1
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   2
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   3
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   4
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   5
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   6
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   7
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   8
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   9
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   10
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   11
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   12
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   13
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   14
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   15
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   16
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   17
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   18
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   19
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   20
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   21
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   22
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   23
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   24
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   25
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   26
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   27
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   28
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   29
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   30
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   31
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   32
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   33
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   34
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   35
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   36
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   37
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   38
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   39
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   40
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   41
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   42
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   43
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   44
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   45
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   46
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   47
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   48
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   49
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   50
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   51
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   52
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   53
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   54
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   55
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   56
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   57
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   58
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   59
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   60
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   61
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   62
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   63
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   64
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   65
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   66
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   67
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   68
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   69
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   70
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   71
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   72
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   73
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   74
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   75
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   76
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   77
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   78
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   79
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   80
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   81
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   82
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   83
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   84
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   85
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   86
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   87
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   88
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   89
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   90
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   91
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   92
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   93
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   94
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   95
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   96
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   97
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   98
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   99
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
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

 
    </div>
    </body>
  );
}

export default App; 
