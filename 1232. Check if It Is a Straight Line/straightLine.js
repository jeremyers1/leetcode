var checkStraightLine = function (coordinates) {
  const arrSize = coordinates.length - 1; 
  const testRise = coordinates[arrSize][1] - coordinates[0][1];
  const testRun = coordinates[arrSize][0] - coordinates[0][0];

  for (let i = 0; i < arrSize; i++){
    let rise = coordinates[i+1][1] - coordinates[i][1];
    let run = coordinates[i+1][0] - coordinates[i][0];
    if (testRun * rise != testRise * run) return false;
  }
  return true;
};

let coords = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
console.log(checkStraightLine(coords));
  
/* 
[[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] = true;
[[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]] = false;
*/