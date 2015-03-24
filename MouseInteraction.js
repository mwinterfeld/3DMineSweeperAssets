var mousex;
var mousey;
var radius: float;
var power: float;


function checkBounds(z) {
  return z >= 0 && z < 7;
}

function Update () {
  var hit: RaycastHit;
  var currentLayer;
  if(GameObject.Find("Main Camera").GetComponent(GameController).gameState != "lose")
  {
  
  if(Input.GetMouseButtonDown(0))
  {
    mousex = Input.mousePosition.x;
    mousey = Input.mousePosition.y;
  }
  else if(Input.GetMouseButtonUp(0))
  {
    if(Mathf.Abs(mousex - Input.mousePosition.x) < 2 && Mathf.Abs(mousey - Input.mousePosition.y) < 2) {
      currentLayer = gameObject.GetComponent(ToggleTransparency).currentLayer;
      Physics.Raycast(camera.ScreenPointToRay(Input.mousePosition), hit, Mathf.Infinity, 1 << currentLayer);
	  if(hit.collider != null) {
	    reveal(hit.collider);
      }
    }
  }
  else if(Input.GetMouseButtonUp(1))
  {
    currentLayer = gameObject.GetComponent(ToggleTransparency).currentLayer;
    Physics.Raycast(camera.ScreenPointToRay(Input.mousePosition), hit, Mathf.Infinity, 1 << currentLayer);
    if(hit.collider != null)
    {
    
    }
  }
  }
}

function reveal(collider) {
  if(collider.gameObject.renderer.material.color.a < 0.8){
	return;  
  }
  else{
  	var temp: String;
  	temp = collider.gameObject.name;
  	var iIndex: int;
  	var jIndex: int;
  	var kIndex: int;
  	
  	// Convert chars to ints (0-9)
  	iIndex = temp[4];
  	iIndex -= 48;
  	jIndex = temp[5];
  	jIndex -= 48;
  	kIndex = temp[6];
  	kIndex -= 48;
  	
  	var mine = GameObject.Find("Main Camera").GetComponent(GameController).mines[iIndex][jIndex][kIndex];
  
  	if(mine)
  	{
  		var i: int;
  		var j: int;
  		var k: int; 
  		
  		 for(i=0; i<7; i++)
  		{
    		for(j=0; j<7; j++)
    		{
      			for(k=0; k<7; k++)
      			{
  					GameObject.Find("CubeArray").GetComponent("CubeArrayStartUp").cubeArray[i][j][k].AddComponent("Rigidbody");
  					
  				}
  			}
  		}
  		GameObject.Find("CubeArray").GetComponent("CubeArrayStartUp").cubeArray[3][3][3].rigidbody.AddExplosionForce(power, new Vector3(0,0,0), radius, 3.0);
  		GameObject.Find("Main Camera").GetComponent(GameController).gameState = "lose";
  	}
  	else
  	{
  		smartReveal(iIndex, jIndex, kIndex);
  		fixTransparancy();
  	}
  }
}

function smartReveal(iIndex,jIndex,kIndex) {
	var cube: GameObject;
	var number: GameObject;
	if(GameObject.Find("Main Camera").GetComponent(GameController).cubeStates[iIndex][jIndex][kIndex] == 1)
	{
		return;
	}
	if(GameObject.Find("Main Camera").GetComponent(GameController).numbers[iIndex][jIndex][kIndex] > 0) {
		GameObject.Find("Main Camera").GetComponent(GameController).cubeStates[iIndex][jIndex][kIndex] = 1; 
		cube = GameObject.Find("CubeArray").GetComponent(CubeArrayStartUp).cubeArray[iIndex][jIndex][kIndex];
		number = GameObject.Find("CubeArray").GetComponent(CubeArrayStartUp).numberArray[iIndex][jIndex][kIndex];
		cube.renderer.material.SetColor("_Color", Color(cube.renderer.material.color.r,
                                                        cube.renderer.material.color.g,
                                                        cube.renderer.material.color.b,0.2));
        number.renderer.material.color.a = 1;
        return;
	}
	else
	{
		GameObject.Find("Main Camera").GetComponent(GameController).cubeStates[iIndex][jIndex][kIndex] = 1; 
		cube = GameObject.Find("CubeArray").GetComponent(CubeArrayStartUp).cubeArray[iIndex][jIndex][kIndex];
		cube.renderer.material.SetColor("_Color", Color(cube.renderer.material.color.r,
                                                        cube.renderer.material.color.g,
                                                        cube.renderer.material.color.b,0.2));
        
        for(var ii = 0; ii < 3; ii++)
        {
        	for(var jj = 0; jj < 3; jj++)
        	{
        		for(var kk = 0; kk < 3; kk++)
        		{
        			if(ii != 1 || jj != 1 || kk != 1)
        			{	
        				iii = iIndex + ii - 1;
        				jjj = jIndex + jj - 1;
        				kkk = kIndex + kk - 1;
        				if(checkBounds(iii) && checkBounds(jjj) && checkBounds(kkk))
        				{
        					smartReveal(iii,jjj,kkk);	
        				}
        			}
        		}
        	}
        }
	}
	return;
}