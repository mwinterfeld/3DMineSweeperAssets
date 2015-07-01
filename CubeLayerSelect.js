// Update is called once per frame
function Update () {

  if(Input.GetKeyUp(KeyCode.DownArrow) || Input.GetKeyUp(KeyCode.UpArrow))
  {
  	go = GameObject.Find("Main Camera");
  	var temp = gameObject.name;
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
  
    if(go.GetComponent(ToggleTransparency).currentLayer == gameObject.layer) {
    gameObject.renderer.material.SetColor("_Color", Color(gameObject.renderer.material.color.r,
                                                        gameObject.renderer.material.color.g,
                                                        gameObject.renderer.material.color.b,
                                                        0.8 - 0.7*go.GetComponent(GameController).cubeStates[iIndex][jIndex][kIndex]));  
    }
    else if(go.GetComponent(ToggleTransparency).currentLayer < gameObject.layer)
    {
      gameObject.renderer.material.SetColor("_Color", Color(gameObject.renderer.material.color.r,
                                                        gameObject.renderer.material.color.g,
                                                        gameObject.renderer.material.color.b,
                                                        0.05));
    }
  }
}

