function isValid(){
    //example grid - currently valid
    var sudoku = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];
    
	for(var i=0; i<9; i++){
        var sudokuMap = {};
        for(var j=0; j<9; j++){
            var numAsString = '' + sudoku[i][j];
            if(sudoku[i][j] !== 0  && sudokuMap.hasOwnProperty(numAsString)){
                console.log("false");
                return false;
            } else {
                sudokuMap[numAsString] = sudoku[i][j];
            }
        }   
    }
        
    for(var i=0; i<9; i++){
        var sudokuMap = {};
        for(var j=0; j<9; j++){
            var numAsString = '' + sudoku[j][i];
            if(sudoku[j][i] !== 0  && sudokuMap.hasOwnProperty(numAsString)){
                console.log("false");
                return false;
            } else {
                sudokuMap[numAsString] = sudoku[j][i];
            }
        }   
    }
    
    for(var k=0; k<3; k++){
        var sudokuMap = {};
        for(var i=0; i<3; i++){
            for(var j=0; j<3; j++){
                var intVal = sudoku[i][j + (3*k)];
                var numAsString = '' + intVal;
                if(intVal !== 0  && sudokuMap.hasOwnProperty(numAsString) ){
                    console.log("false");
                    return false;
                } else {
                    sudokuMap[numAsString] = intVal;
                }
            }   
        }
    }
        
    for(var k=0; k<3; k++){
        var sudokuMap = {};
        for(var i=3; i<6; i++){
            for(var j=0; j<3; j++){
                var intVal = sudoku[i][j + (3*k)];
                var numAsString = '' + intVal;
                if(intVal != 0  && sudokuMap.hasOwnProperty(numAsString) ){
                    console.log("false");
                    return false;
                } else {
                    sudokuMap[numAsString] = intVal;
                }
            }   
        }
    }
        
    for(var k=0; k<3; k++){
        var sudokuMap = {};
        for(var i=6; i<9; i++){
            for(var j=0; j<3; j++){
                var intVal = sudoku[i][j + (3*k)];
                var numAsString = '' + intVal;
                if(intVal != 0  && sudokuMap.hasOwnProperty(numAsString)){
                    console.log("false");
                    return false;
                } else {
                    sudokuMap[numAsString] = intVal;
                }
            }   
        }
    }
    console.log("true");
    return true;
}