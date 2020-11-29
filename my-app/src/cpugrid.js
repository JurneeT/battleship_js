/*function Counter({initialCount}) 
{
    const [count, setCount] = useState(initialCount);
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }*/

  import {Grid} from '@material-ui/core';
  import {Paper} from '@material-ui/core';
  import {Button} from '@material-ui/core';
  function CPU_grid ()
  {
    return (<div className="Board-div">
    <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
           <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile" onClick={()=>alert("hi")}>
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}> 
                   ? 
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   /
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   /
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
           </Grid>
        </Grid>
        <Grid item xs={12}>

        <Grid container spacing={1} justify="space-around">
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
             <Grid item xs={1} className="Tile">
               <Paper elevation={4}>
                   ?
               </Paper>
             </Grid>
           </Grid>
        </Grid>
    </Grid>
    <Button id="swap-turn" variant="outlined">
      {"Change Turn"}
    </Button> 

    </div>)
  

  }
  export default CPU_grid;