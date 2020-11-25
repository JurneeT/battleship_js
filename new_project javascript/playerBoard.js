//apps state variables
const Guess = {
  prevHits: [],
  cpuGuesses: [],
  playerGuesses:[]
};

// variables used thusfar ///////////////////////
let start = 0;
let dir = 0;
let shipLength = 0;
let gameBoard = [];
let computerBoard = [];
for (let i = 0; i < 100; i++) {
  gameBoard[i] = null;
  computerBoard[i] = null;
}

const Player = {
  ships: {
    battleship: {
      pegs: [null, null, null, null, null],
      isSunk: false,
    },
    cruiser: {
      pegs: [null, null, null, null],
      isSunk: false,
    },
    sub: {
      pegs: [null, null, null],
      isSunk: false,
    },
    destroyer: {
      pegs: [null, null],
      isSunk: false,
    },
  },
};
/////////////////////////////////////////////////

let hitWasGuessed = 0;
let isBound = Boolean;
let playerWinCount = 0;
let cpuWinCount = 0;
let playerNodes = [];
let firstNode = 0;
let cpuNodes = [];
let currentTurn = "cpu";
let guess = 0;


//console.log(gameBoard)

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

  function selectShip(button_id) {
  if (button_id === "battleship") {
    shipLength = 5;
    start = prompt("Select a start space place your Battleship");
    PlaceShip();
  } else if (button_id === "cruiser") {
    shipLength = 4;
    start = prompt("Select a start space place your Cruiser");
    PlaceShip();
  } else if (button_id === "sub") {
    shipLength = 3;
    start = prompt("Select a start space place your Sub");
    PlaceShip();
  } else if (button_id === "destroyer") {
    shipLength = 2;
    start = prompt("Select a start space place your Destroyer");
    PlaceShip();
  }
}
  
  function PlaceShip(){
    if (shipLength == 5){
      if(Player.ships.battleship.pegs.every(element => element === null)){
         Player.ships.battleship.pegs[0] = parseInt(start);
        gameBoard[start - 1] = shipLength;

        SetDirection();

        if (dir == start - 1) {
          Player.ships.battleship.pegs[1] = parseInt(dir);
          Player.ships.battleship.pegs[2] = dir - 1;
          Player.ships.battleship.pegs[3] = dir - 2;
          Player.ships.battleship.pegs[4] = dir - 3;
        }else if (parseInt(dir) == parseInt(start) + 1) {
          Player.ships.battleship.pegs[1] = parseInt(dir);
          Player.ships.battleship.pegs[2] = parseInt(start) + 2;
          Player.ships.battleship.pegs[3] = parseInt(start) + 3;
          Player.ships.battleship.pegs[4] = parseInt(start) + 4;
        }
        else if (parseInt(dir) == parseInt(start) - 10) {
        Player.ships.battleship.pegs[1] = parseInt(dir);
        Player.ships.battleship.pegs[2] = parseInt(dir) - 10;
        Player.ships.battleship.pegs[3] = parseInt(dir) - 20;
        Player.ships.battleship.pegs[4] = parseInt(dir) - 30;
        }else if (parseInt(dir) == parseInt(start) + 10) {
        Player.ships.battleship.pegs[1] = parseInt(dir);
        Player.ships.battleship.pegs[2] = parseInt(dir) + 10;
        Player.ships.battleship.pegs[3] = parseInt(dir) + 20;
        Player.ships.battleship.pegs[4] = parseInt(dir) + 30;
        }
      }
    }
    else if (shipLength == 4){
      if(Player.ships.cruiser.pegs.every(element => element === null)){
         Player.ships.cruiser.pegs[0] = parseInt(start);
        gameBoard[start - 1] = shipLength;

        SetDirection();

        if (dir == start - 1) {
          Player.ships.cruiser.pegs[1] = parseInt(dir);
          Player.ships.cruiser.pegs[2] = dir - 1;
          Player.ships.cruiser.pegs[3] = dir - 2;
        }else if (parseInt(dir) == parseInt(start) + 1) {
          Player.ships.cruiser.pegs[1] = parseInt(dir);
          Player.ships.cruiser.pegs[2] = parseInt(start) + 2;
          Player.ships.cruiser.pegs[3] = parseInt(start) + 3;
        }
        else if (parseInt(dir) == parseInt(start) - 10) {
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
    else if (shipLength == 3){
      if(Player.ships.sub.pegs.every(element => element === null)){
         Player.ships.sub.pegs[0] = parseInt(start);
        gameBoard[start - 1] = shipLength;

        SetDirection();

        if (dir == start - 1) {
          Player.ships.sub.pegs[1] = parseInt(dir);
          Player.ships.sub.pegs[2] = dir - 1;
        }else if (parseInt(dir) == parseInt(start) + 1) {
          Player.ships.sub.pegs[1] = parseInt(dir);
          Player.ships.sub.pegs[2] = parseInt(start) + 2;
        }
        else if (parseInt(dir) == parseInt(start) - 10) {
        Player.ships.sub.pegs[1] = parseInt(dir);
        Player.ships.sub.pegs[2] = parseInt(dir) - 10;
        }else if (parseInt(dir) == parseInt(start) + 10) {
        Player.ships.sub.pegs[1] = parseInt(dir);
        Player.ships.sub.pegs[2] = parseInt(dir) + 10;
        }
      }
    }
    else if (shipLength == 2){
      if(Player.ships.destroyer.pegs.every(element => element === null)){
         Player.ships.destroyer.pegs[0] = parseInt(start);
        gameBoard[start - 1] = shipLength;

        SetDirection();

        if (dir == start - 1) {
          Player.ships.destroyer.pegs[1] = parseInt(dir);
        }else if (parseInt(dir) == parseInt(start) + 1) {
          Player.ships.destroyer.pegs[1] = parseInt(dir);
        }
        else if (parseInt(dir) == parseInt(start) - 10) {
        Player.ships.destroyer.pegs[1] = parseInt(dir);
        }else if (parseInt(dir) == parseInt(start) + 10) {
        Player.ships.destroyer.pegs[1] = parseInt(dir);
        }
      }
    }
  }

  function SetDirection(){
    dir = prompt("Select an adjacent space left, right, up, or down to place your Battleship in selected direction");
    
    if (dir == start - 1){
      for (let i = shipLength; i > 0; i--){
        gameBoard[dir-i+1] = shipLength;
        //put if statements for ships
      }
    }

    //selected cell to the right
    else if (parseInt(start) == parseInt(dir) - 1){
      for (let i = 0; i < shipLength-1; i++){
        gameBoard[i+(parseInt(dir)-1)] = shipLength;
      }
    }
    //selected cell to the bottom
    else if (parseInt(dir) == parseInt(start) + 10){
      let x = parseInt(dir);
      for (let i = 0; i < shipLength-1; i++){
        gameBoard[x-1] = shipLength;
        x += 10;
        console.log()
      }
    }
    //selected cell to the top
    else if (dir == start - 10){
      let x = dir;
      for (let i = 0; i < shipLength-1; i++){
        gameBoard[x-1] = shipLength;
        console.log(x);
        x -= 10;
      }
    }
    else if (
      start + 10 !== dir &&
      start - 10 !== dir &&
      start + 1 !== dir &&
      start - 1 !== dir
    ) {
      console.log("NOT A VALID SELECTION");
      SetDirection();
    }
    
  }

  function playGame(e) {
  //disable buttons
  //create and display display CPU Board
  swapTurn();
  //console.log("Its Your Turn! FIRE AWAY!");
  //guess function goes here
}
////////////////////////////////////////////////////////
function swapTurn() {
  if (currentTurn === "cpu") {
    //display CPUboard
    currentTurn = "user";
    checkHit();

  } else if (currentTurn === "user") {
    //display Player Board
    //CPU guess
    currentTurn = "cpu";
    console.log("CPU's TURN! PREPARE TO BE FIRED ON IN 3... 2... 1... ");
  }
}

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
function checkHit() {
  if (currentTurn == "user"){
    cell = prompt("It's Your Turn! FIRE AWAY!");
    //change gameBoard to cpuBoard
    if(Guess.playerGuesses.includes(parseInt(cell)) == true){
      console.log("You Already Shot Here");
      checkHit();
    }else if (Guess.playerGuesses.includes(parseInt(cell)) == false){
      if (gameBoard[cell - 1] == null){
        console.log("Miss");
        Guess.playerGuesses.push(cell);
      //change gameBoard to cpuBoard
    }else if (gameBoard[cell - 1] !== null){
      console.log("Hit");
      Guess.prevHits.push(cell);
      Guess.playerGuesses.push(cell);
    }
    swapTurn();
    }
    
  } 
  else if (currentTurn == "cpu"){
    //cpu guess function
    if (gameBoard[cell - 1] == null){
      console.log("Miss");
      Guess.cpuGuesses.push(cell);
    }else if (gameBoard[cell - 1] !== null){
      console.log("Hit");
      Guess.cpuGuesses.push(cell);
    }
    swapTurn();
  }
}

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


playGame();


