var mousex;
var mousey;

function Update () {
  var hit: RaycastHit;
  var currentLayer;
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
  		// you lose, loser
  	}
  	else
  	{
  		collider.gameObject.renderer.material.SetColor("_Color", Color(collider.gameObject.renderer.material.color.r,
                                                        collider.gameObject.renderer.material.color.g,
                                                        collider.gameObject.renderer.material.color.b,0.4));
  		GameObject.Find("Main Camera").GetComponent(GameController).cubeStates[iIndex][jIndex][kIndex] = 1;
		// show number
  	}
  }
}