//apps state variables

const Guess = 
{
  prevHits: [],
  cpuGuesses: [],
  prevDirection: {
    direction: 0,
    hit: false,
  },
  cpuGuessDirection: 0,
};

// variables used thusfar ///////////////////////
let gameCount = 0;
let start = 0;
let dir = 0;
let shipLength = 0;
let gameBoard = [];
let computerBoard = [];

for (let i = 0; i < 100; i++) 
{
  gameBoard[i] = null;
  computerBoard[i] = null;
}

const Player = 
{
  ships: 
  {
    battleship: 
    {
      pegs: [null, null, null, null, null],
      isSunk: false,
    },
    cruiser: 
    {
      pegs: [null, null, null, null],
      isSunk: false,
    },
    sub: 
    {
      pegs: [null, null, null],
      isSunk: false,
    },
    destroyer: 
    {
      pegs: [null, null],
      isSunk: false,
    },
  },
  // User attack function
  generate_attack()
  {
    userInput = prompt("Guess cell");
    return userInput;
  }
};
/////////////////////////////////////////////////

let hitWasGuessed = 0;
let isBound = Boolean;
let playerWinCount = 0;
let cpuWinCount = 0;
let playerNodes = [];
let firstNode = 0;
let cpuNodes = [];
let guess = 0;






const cpu = 
{
  ships: 
  {
    battleship: [null, null, null, null, null],
    cruiser: [null, null, null, null],
    sub: [null, null, null],
    destroyer: [null, null],
  },
};


/* ship placement
  player selects ship
  - ship id will be the ship size
  player selects cell to place
  - update board array so that the value is changed from null to the ship id number at the index they selected
  player selects adjacent cell for direction
  - update the board by filling in the null rest of the null values for the length of the ship
  - she ship array is updated with the indexes of the board
  CPU does this but with a random number generator
*/
function selectShip(button_id) 
{
  if (button_id === "battleship") 
  {
    shipLength = 5;
    start = prompt("Select a start space place your Battleship");
    PlaceShip();
  } else if (button_id === "cruiser") 
  {
    shipLength = 4;
    start = prompt("Select a start space place your Cruiser");
    PlaceShip();
  } else if (button_id === "sub") 
  {
    shipLength = 3;
    start = prompt("Select a start space place your Sub");
    PlaceShip();
  } else if (button_id === "destroyer") 
  {
    shipLength = 2;
    start = prompt("Select a start space place your Destroyer");
    PlaceShip();
  }
}
  
function PlaceShip()
{
  if (shipLength == 5)
  {
    if(Player.ships.battleship.pegs.every(element => element === null))
    {
      Player.ships.battleship.pegs[0] = parseInt(start);
      gameBoard[start - 1] = shipLength;

      SetDirection();

      if (dir == start - 1) 
      {
        Player.ships.battleship.pegs[1] = parseInt(dir);
        Player.ships.battleship.pegs[2] = dir - 1;
        Player.ships.battleship.pegs[3] = dir - 2;
        Player.ships.battleship.pegs[4] = dir - 3;
      }
      else if (parseInt(dir) == parseInt(start) + 1) 
      {
        Player.ships.battleship.pegs[1] = parseInt(dir);
        Player.ships.battleship.pegs[2] = parseInt(start) + 2;
        Player.ships.battleship.pegs[3] = parseInt(start) + 3;
        Player.ships.battleship.pegs[4] = parseInt(start) + 4;
      }
      else if (parseInt(dir) == parseInt(start) - 10) 
      {
        Player.ships.battleship.pegs[1] = parseInt(dir);
        Player.ships.battleship.pegs[2] = parseInt(dir) - 10;
        Player.ships.battleship.pegs[3] = parseInt(dir) - 20;
        Player.ships.battleship.pegs[4] = parseInt(dir) - 30;
      }
      else if (parseInt(dir) == parseInt(start) + 10) 
      {
        Player.ships.battleship.pegs[1] = parseInt(dir);
        Player.ships.battleship.pegs[2] = parseInt(dir) + 10;
        Player.ships.battleship.pegs[3] = parseInt(dir) + 20;
        Player.ships.battleship.pegs[4] = parseInt(dir) + 30;
      }
    }
  }
  else if (shipLength == 4)
  {
    if(Player.ships.cruiser.pegs.every(element => element === null))
    {
      Player.ships.cruiser.pegs[0] = parseInt(start);
      gameBoard[start - 1] = shipLength;

      SetDirection();

      if (dir == start - 1) 
      {
        Player.ships.cruiser.pegs[1] = parseInt(dir);
        Player.ships.cruiser.pegs[2] = dir - 1;
        Player.ships.cruiser.pegs[3] = dir - 2;
      }
      else if (parseInt(dir) == parseInt(start) + 1) 
      {
          Player.ships.cruiser.pegs[1] = parseInt(dir);
          Player.ships.cruiser.pegs[2] = parseInt(start) + 2;
          Player.ships.cruiser.pegs[3] = parseInt(start) + 3;
      }
      else if (parseInt(dir) == parseInt(start) - 10) 
      {
        Player.ships.cruiser.pegs[1] = parseInt(dir);
        Player.ships.cruiser.pegs[2] = parseInt(dir) - 10;
        Player.ships.cruiser.pegs[3] = parseInt(dir) - 20;
        }else if (parseInt(dir) == parseInt(start) + 10) {
        Player.ships.cruiser.pegs[1] = parseInt(dir);
        Player.ships.cruiser.pegs[2] = parseInt(dir) + 10;
        Player.ships.cruiser.pegs[3] = parseInt(dir) + 20;
      }
    }
  }
  else if (shipLength == 3)
  {
    if(Player.ships.sub.pegs.every(element => element === null))
    {
      Player.ships.sub.pegs[0] = parseInt(start);
      gameBoard[start - 1] = shipLength;

      SetDirection();

      if (dir == start - 1) 
      {
          Player.ships.sub.pegs[1] = parseInt(dir);
          Player.ships.sub.pegs[2] = dir - 1;
      }
      else if (parseInt(dir) == parseInt(start) + 1) 
      {
          Player.ships.sub.pegs[1] = parseInt(dir);
          Player.ships.sub.pegs[2] = parseInt(start) + 2;
      }  
      else if (parseInt(dir) == parseInt(start) - 10) 
      {
        Player.ships.sub.pegs[1] = parseInt(dir);
        Player.ships.sub.pegs[2] = parseInt(dir) - 10;
      }
      else if (parseInt(dir) == parseInt(start) + 10) 
      {
        Player.ships.sub.pegs[1] = parseInt(dir);
        Player.ships.sub.pegs[2] = parseInt(dir) + 10;
      }
    }
  }
  else if (shipLength == 2)
  {
    if(Player.ships.destroyer.pegs.every(element => element === null))
    {
      Player.ships.destroyer.pegs[0] = parseInt(start);
      gameBoard[start - 1] = shipLength;

      SetDirection();

      if (dir == start - 1) 
      {
        Player.ships.destroyer.pegs[1] = parseInt(dir);
      }
      else if (parseInt(dir) == parseInt(start) + 1) 
      {
        Player.ships.destroyer.pegs[1] = parseInt(dir);
      }
      else if (parseInt(dir) == parseInt(start) - 10) 
      {
        Player.ships.destroyer.pegs[1] = parseInt(dir);
      }
      else if (parseInt(dir) == parseInt(start) + 10) 
      {
        Player.ships.destroyer.pegs[1] = parseInt(dir);
      }
    }
  }
}


function SetDirection()
{
  dir = prompt("Select an adjacent space left, right, up, or down to place your Battleship in selected direction");

    
  if (dir == start - 1)
  {
    for (let i = shipLength; i > 0; i--)
    {
      gameBoard[dir-i+1] = shipLength;
        //put if statements for ships
    }
  }

  //selected cell to the right
  if (start == dir - 1)
  {
    for (let i = 0; i < shipLength-1; i++)
    {
      gameBoard[i+(dir-1)] = shipLength;
    }
  }
    //selected cell to the bottom
  if (parseInt(dir) == parseInt(start) + 10)
  {
    let x = parseInt(dir);
    for (let i = 0; i < shipLength-1; i++)
    {
      gameBoard[x-1] = shipLength;
      x += 10;
      console.log()
    }
  }
  //selected cell to the top
  if (dir == start - 10)
  {
    let x = dir;
    for (let i = 0; i < shipLength-1; i++)
    {
      gameBoard[x-1] = shipLength;
      console.log(x);
      x -= 10;
    }
  } 
}
var the_set = {};
// Player turn is even, CPU turn is Odd

var gameOver = false;
function playGame(CPU,turn) 
{
  while (gameOver == false)
  {
    if ( turn % 2 == 0)
    {
      console.log("Players turn");
      checkHit(turn,Player.generate_attack());
      turn += 1;
    }
    else
    {
      console.log("CPU's turn");
      

      // If the turn_hit_miss array is empty,
      // generate a random attack

      var cpu_attack = CPU.generate_random_attack(cpu_hits,cpu_misses);
      checkHit(turn,cpu_attack);
      turn += 1;

    /*  if (isEmpty(the_set))
      {
        var cpu_attack = CPU.generate_random_attack(cpu_hits,cpu_misses);
        checkHit(turn,cpu_attack);
        turn += 1;
      }
      // If the previous attack was a miss,
      // generate a random attack

      else
      {
        console.log('Something went wrong')
        return -1;
      }
      else if (the_set[turn -2] == 'Miss')
      {
        var cpu_attack = CPU.generate_random_attack(cpu_hits,cpu_misses);
        checkHit(turn,cpu_attack);
        turn += 1;

      }

      // If the previous attack was a hit  
      // generate a targeted attack
      else if (the_set[turn-2] == 'Hit')
      {
        var attack = CPU.generate_targeted_attack(the_set)
      }

      // If something goes wrong, tell me
      else
      {
        console.log('Something went wrong')
        return -1;
      } */
    }
    if (Guess.prevHits.length == 14)
    {
    gameOver = true;
    console.log("GameOver");
    }
  }

}
////////////////////////////////////////////////////////


// winCheck --> check for win to be called within checkHit
function winCheck() {
  if (playerWinCount === 14) {
    userPrompt.innerHTML = "YOU WIN!";
    return true;
  } else if (cpuWinCount === 14) {
    userPrompt.innerHTML = "CPU WINS!";
    return true;
  } else return false;
}
///////////////////////////////////////////////////////
//function to checj hit
function checkHit(turn,guess_cell_id) 
{
  if (gameBoard[guess_cell_id - 1] == null)
  {
    console.log("Miss");
    gameBoard[guess_cell_id - 1] = 'O';
    // Has the turn and the missed cell
    cpu_misses[turn] = guess_cell_id;
    console.log(gameBoard);
    // Has the turn and hit/miss status
    if (turn % 2 != 0)
    {
       the_set[Number(turn)] = 'Miss';
    }
   
  }
  else if (gameBoard[guess_cell_id - 1] !== null)
  {
    gameBoard[guess_cell_id - 1] = 'X';
    console.log("Hit");
    Guess.prevHits.push(guess_cell_id);
    // Has the turn and the hit cell
    cpu_hits[turn] = guess_cell_id;
    console.log(gameBoard);
    // Update the hit/miss status only for the cpu
    if (turn % 2 != 0)
    {
       the_set[Number(turn)] = 'Hit';
    }
  }
}

function populate_player_grid()
{
  //Player Selects battleship button
  selectShip("battleship");
  console.log(Player.ships.battleship.pegs);
  console.log(gameBoard);

  //Player Selects cruiser button
  selectShip("cruiser");
  console.log(Player.ships.cruiser.pegs)
  console.log(gameBoard);

  //Player Selects sub button
  selectShip("sub");
  console.log(Player.ships.sub.pegs)
  console.log(gameBoard); 

  //Player Selects destroyer button
  selectShip("destroyer");

  console.log(Player.ships.destroyer.pegs);
  console.log(gameBoard);

}

function GameStart()
{
  populate_player_grid();

  var turn = Math.floor(Math.random() * (2 - 0) + 0);
  if ( turn % 2 == 0)
    {
      console.log("Player goes first");
     
    }
    else
    {
      console.log("CPU goes first");
    }
  return turn;
}



// defining the CPU class
class CPU 
{
  constructor(name)
  {
    this.name = name;
  }

  generate_random_attack(hits,misses)
  {
    // Create empty arrays for hits and misses
    var the_hits = [];
    var the_misses = [];
    // Populate the hits array
    for (var key in hits) 
    {
      var val = hits[key];
      the_hits.push(val);
    }
    // Populate the misses array
    for (var key in misses) 
    {
      var val = misses[key];
      the_misses.push(val);
    }
    // Get a random value
    var x =  Math.floor(Math.random() * (100 - 0) + 0);

    // If the value is in hits or in misses
    if (the_hits.includes(x) == true || the_misses.includes(x))
    {
      var untouched_cell = false;
      // continue to search for an open space
      while (untouched_cell == false)
      {
        x = Math.floor(Math.random() * (100 - 0) + 0);
        if (the_hits.includes(x) == true || the_misses.includes(x))
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
  // This function should trigger if the previous cpu 
  // cpu turn was a hit
  generate_targeted_attack(hit_miss_dict)
  {
    var hit_array = [];
    // Populate the hit array;
    for (var turn in hit_miss_dict) 
    {
      // If the turn was a hit
      if (hit_miss_dict[turn] == 'Hit')
      {
        // Add the turn to the array
        hit_array.push(Number(turn));
      }
    }
    // Return the latest turn
    var max = hit_array.reduce(function(a, b) 
    {
      return Math.max(a, b);
    });

    return max;


    // Once you get the latest turn, check the 
    // cell that gave you hit. Then check the adjacent
    // values of the hit cell on grid. If the values
    // to the right or left are empty, then check the
    // values (+ 10) OR (- 10),
  }

}

function isEmpty(obj) 
{
  return Object.keys(obj).length === 0;
}




const cpu1 = new CPU('Mark');

var cpu_hits = { };
var cpu_misses = { };

//var hit_miss_dict = {1:'Hit', 2:'Hit', 3:'Miss',4:'Miss',5:'Hit'};


// Create a hit array from the The Hit Map






playGame(cpu1,GameStart());

//cpu1.generate_targeted_attack(hit_miss_dict);
