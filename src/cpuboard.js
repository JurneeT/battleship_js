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
  
  let Board = Array(10).fill().map(() => Array(10).fill(null));
  
  
  /*for(let i = 0; i<10;i++){
    let string = "";
    for(let j=0 ; j<10 ; j++){
      string+=Board[i][j]+' ';
    }
    //alert(string);
    
  }*/
  
  
  function positionShip() {
  
    for (var boat in CPU.ships) {
      var value = CPU.ships[boat]
      // choosing  position
      let validity = false;
      while (validity == false) {
        var position = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        validity = isValidPosition(position, Board);
  
      }
      let column = Math.floor((position - 1) % 10);
      let row = Math.floor((position - 1) / 10);
      //choosing direction
  
      let length_of_boat = value.size;
      let new_direction = chooseDir(length_of_boat, Board, position);
      //alert(position)
      //alert(new_direction);
      if (new_direction === (position - 10)) {
        for (let i = 0; i < length_of_boat; i++) {
          Board[row - i][column] = length_of_boat;
        }
      }
  
      else if (new_direction === (position + 10)) {
        for (let i = 0; i < length_of_boat; i++) {
          Board[row + i][column] = length_of_boat;
        }
      }
      else if (new_direction === (position + 1)) {
        for (let i = 0; i < length_of_boat; i++) {
          Board[row][column + i] = length_of_boat;
        }
      }
      else {
        for (let i = 0; i < length_of_boat; i++) {
          Board[row][column - i] = length_of_boat;
        }
      }
  
  
  
  
  
      //break;
    }
  }
  function chooseDir(length, board, position) {
    //alert(position)
    let liste = [];
    let column = Math.floor((position - 1) % 10);
    let row = Math.floor((position - 1) / 10);
  
    let liste_direction = ["U", "D", "L", "R"];
    for (var dir in liste_direction) {
      let check = 0;
      //alert(liste_direction[dir])
      let valid_direction = true;
      let count = 0;
      if (liste_direction[dir] === "U") {
        let row_x = row;
        while (count < length) {
  
          if (row_x > 9 || row_x < 0 || column > 9 || column < 0) {
            valid_direction = false;
            check = 1;
            /*alert("a1")
            alert(row_x)
            alert(column)*/
            break;
  
          }
          if (check !== 1)
            if (board[row_x][column] !== null) {
              valid_direction = false;
            }
          row_x--
          count++;
        }
  
      }
      else if (liste_direction[dir] === "D") {
        let row_d = row;
        while (count < length) {
          if (row_d > 9 || row_d < 0 || column > 9 || column < 0) {
            valid_direction = false;
            check = 1;
  
            /*alert("a2")
            alert(row_d)
            alert(column)*/
            break;
          }
          if (check !== 1)
            if (board[row_d][column] !== null) {
              valid_direction = false;
  
            }
          row_d++;
          count++;
        }
  
      }
      else if (liste_direction[dir] === "L") {
  
        let column_d = column;
        while (count < length) {
  
          if (row > 9 || row < 0 || column_d > 9 || column_d < 0) {
            valid_direction = false;
            check = 1;
            /*alert("a3")
            alert(row)
            alert(column)*/
            break;
  
          }
          if (check !== 1)
            if (board[row][column_d] !== null) {
              valid_direction = false;
            }
          count++;
          column_d--;
        }
  
      }
      else {
        let column_d = column;
        while (count < length) {
  
          if (row > 9 || row < 0 || column_d > 9 || column_d < 0) {
            valid_direction = false;
            check = 1;
            /*alert("a4")
            alert(row)
            alert(column_d)*/
            break;
  
          }
          if (check !== 1)
            if (board[row][column_d] !== null) {
              valid_direction = false;
            }
          count++;
          column_d++;
        }
  
      }
  
  
      if (valid_direction === true) {
        if (liste_direction[dir] === "U") {
          liste.push(position - 10);
        }
        else if (liste_direction[dir] === "D") {
          liste.push(position + 10);
        }
        if (liste_direction[dir] === "R") {
          liste.push(position + 1);
        }
        else if (liste_direction[dir] === "L") {
          liste.push(position - 1);
        }
  
      }
      //alert(liste)
    }
  
    var new_direction = Math.floor(Math.random() * ((liste.length - 1) - 1 + 1)) + 1;
  
  
    return liste[new_direction];
  }
  
  function isValidPosition(num, board) {
    let column = Math.floor((num - 1) % 10);
    let row = Math.floor((num - 1) / 10);
  
  
    if (board[row][column] === null) {
      return true;
  
    }
    return false;
  
  }
  
  positionShip()
  
  let aaa = Array(10).fill().map(() => Array(10));
  
  var cc = 1;
  
  
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      aaa[i][j] = cc;
      cc++;
    }
  }
  
  for (let i = 0; i < 10; i++) {
  
    alert(...aaa[i])
  }
  
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (Board[i][j] == null)
        Board[i][j] = 0;
  
    }
  }
  for (let i = 0; i < 10; i++) {
  
    alert(...Board[i])
  }
  
  
  
  //place the  different  boats using random numbers.
    //for each  boat type:
      //select  a random number between 1-100 for start  position
        //check if it is a valid choice 
          //if not:
            //make another choice until it  is a valid one
  
          //if it is:
            //chppse  the direction
              //check if it is a valid choice
                //if it is  not:
                  //make another choice until it  is valid;
                //if  it is:
                  //change all the board element tolen(boat)
  
  
  
  