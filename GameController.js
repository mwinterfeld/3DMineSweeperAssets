var mines;
var numbers;
var cubeStates;
var numMines:int;
var a:int;
var gameState;

// Use this for initialization
function Start () {
  
  gameState = "play";
  var i;
  var j;
  var k;
  var g;
  numMines = 25;
  
  mines = new Array(7);
  numbers = new Array(7);
  cubeStates = new Array(7);
  for(i=0; i<7; i++)
  {
    mines[i] = new Array(7);
    numbers[i] = new Array(7);
    cubeStates[i] = new Array(7);
    for(j=0; j<7; j++)
    {
      mines[i][j] = new Array(0,0,0,0,0,0,0);
      numbers[i][j] = new Array(0,0,0,0,0,0,0);
      cubeStates[i][j] = new Array(0,0,0,0,0,0,0);
    }
  }
  
  // Initialize mines
  for(g=0; g<numMines; g++)
  {
    i = Mathf.Floor(Random.Range(0,7));
    j = Mathf.Floor(Random.Range(0,7));
    k = Mathf.Floor(Random.Range(0,7));
    
    while((mines[i][j][k] == 1) || i ==7 || j==7 || k==7)
    {
      i = Mathf.Floor(Random.Range(0,7));
      j = Mathf.Floor(Random.Range(0,7));
      k = Mathf.Floor(Random.Range(0,7));
    }
    
    mines[i][j][k] = 1;
  }
  
  // Initialize numbers
  for(i=0;i<7;i++){
    for(j=0;j<7;j++){
      for(k=0;k<7;k++){
        var m;
        var n;
        var l;
        if(mines[i][j][k] == 0) {
          for(m=i-1; m<=i+1; m++){
            for(n=j-1; n<=j+1; n++){
              for(l=k-1; l<=k+1; l++){
                if(!(m==i && n==j && l==k) && checkBounds(m) && checkBounds(n) && checkBounds(l))
                {
                  numbers[i][j][k] = numbers[i][j][k] + mines[m][n][l];
                }
              }
            }
          }
        }
        else
        {
          numbers[i][j][k] = -1;
        }
      }
    }
  }
  
}

function checkBounds(z) {
  return z >= 0 && z < 7;
}
