function Update () {
  if(Input.GetKeyUp(KeyCode.DownArrow) || Input.GetKeyUp(KeyCode.UpArrow))
  {
  	go = GameObject.Find("Main Camera");
  	if(go.GetComponent(ToggleTransparency).currentLayer == gameObject.layer) {
  	    gameObject.renderer.material.SetColor("_Color", Color(gameObject.renderer.material.color.r,
                                                        gameObject.renderer.material.color.g,
                                                        gameObject.renderer.material.color.b,
                                                        0.8));  
    }
    else 
    {
    gameObject.renderer.material.SetColor("_Color", Color(gameObject.renderer.material.color.r,
                                                        gameObject.renderer.material.color.g,
                                                        gameObject.renderer.material.color.b,
                                                        0.1));
  	}
  }
}