let validBoard = [
    [1, 2, 3, 4],
    [3, 4, 2, 1],
    [4, 3, 1, 2],
    [2, 1, 4, 3],
  ];

  let inValidBoard = [
    [4, 2, 1, 3],
    [1, 3, 4, 2],
    [3, 1, 3, 4],
    [2, 4, 2, 1],
  ];
  export const checkSudoku = (board) => {
  
    let mutatedBoard = [...board];
    let hashSet;
    let n = 4;
  
    for (let i = 0; i < board.length; i++){
  
      /************ check rows for duplicates and correct nums ************/
  
      //duplicate in matrix?
      hashSet = new Set(board[i]);
      if (hashSet.size !== n) return false;
      
      // highest num must be 4
      let subArrMax = Math.max.apply(this, [...hashSet]);
      if (subArrMax !== n) return false;
      
      hashSet.clear();
  
      /*************** check columns for duplicates ****************/
      for (let j = 0; j < board.length; j++){
        hashSet.add(board[j][i]);
      }
  
      // column fully added to set, any duplicates?
      if (hashSet.size !== n) return false;
  
      //clear set for next column check
      hashSet.clear();
    }
  
    for (let i = 0; i < mutatedBoard.length; i++){
        //console.log(mutatedBoard[i]);
  
        let leftWindow = 0;
        let rightWindow = leftWindow + 1;
      
  
      console.log(mutatedBoard[i][0], mutatedBoard[i][1])
      
        console.log(' ')
    }
  
  
  
    return true;
  
  };
  
  /* 
        [1, 2, 3, 4],
        [3, 4, 2, 1],
        [4, 3, 1, 2],
        [2, 1, 4, 3],
      ],
  
  are you a length of 4? <-- take care of with hashmap
  are you 1,2,3,4? <-- take care of with a hashmap
  are you a duplicate? <-- take care of with hash map
  is the 2x2 square in each quadrant valid?
  [
        [3, 2, 1, 4],
        [1, 3, 4, 2],
        [2, 4, 3, 1],
        [4, 1, 2, 3],
  ], invalid.. check 2x2 quadrants
  
  */
  // export const checkSudokuFull = (board) => {};
  