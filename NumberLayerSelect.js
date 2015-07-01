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
<<<<<<< HEAD
    else 
=======
    else if(gameObject.renderer.material.color.a > 0)
>>>>>>> parent of d3258ad... Trying to revert
=======
    else if(gameObject.renderer.material.color.a > 0)
>>>>>>> parent of 1a12263... come on
    {
    gameObject.renderer.material.SetColor("_Color", Color(gameObject.renderer.material.color.r,
                                                        gameObject.renderer.material.color.g,
                                                        gameObject.renderer.material.color.b,
<<<<<<< HEAD
                                                        0.1));
=======
                                                        0.05));
<<<<<<< HEAD
>>>>>>> parent of d3258ad... Trying to revert
=======
>>>>>>> parent of 1a12263... come on
  	}
  }
}