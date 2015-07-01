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
<<<<<<< HEAD
    else 
=======
    else if(gameObject.renderer.material.color.a > 0)
>>>>>>> parent of d3258ad... Trying to revert
    {
    gameObject.renderer.material.SetColor("_Color", Color(gameObject.renderer.material.color.r,
                                                        gameObject.renderer.material.color.g,
                                                        gameObject.renderer.material.color.b,
<<<<<<< HEAD
                                                        0.1));
=======
                                                        0.05));
>>>>>>> parent of d3258ad... Trying to revert
  	}
  }
}