#pragma strict
var prevX: float;
var prevY: float;
var isDown;
var wasDown;

function Start () {
  isDown = false;
  wasDown = false;
}

function Update () {
  
  if(Input.GetMouseButtonDown(0)) {
    isDown = true;
    prevX = Input.mousePosition.x;
    prevY = Input.mousePosition.y;
  }
  if(Input.GetMouseButtonUp(0)) {
    isDown = false;
    wasDown = false;
  }
  if(isDown) {
  	if(!wasDown)
  	{
  		prevX = Input.mousePosition.x;
  		prevY = Input.mousePosition.y;
  		wasDown = true;
  	}
  	else
  	{
  		var dx:float = Input.mousePosition.x - prevX;
  		var dy:float = Input.mousePosition.y - prevY;

		if(Mathf.Abs(dx) > 1.5)
		{
		  transform.RotateAround(new Vector3(0,0,0), Vector3.down, dx*0.25);
		}
		if(Mathf.Abs(dy) > 1.5)
		{
		  transform.RotateAround(new Vector3(0,0,0), Vector3.left, dy*0.25);
		}
		prevX = Input.mousePosition.x;
  		prevY = Input.mousePosition.y;
    }
  }
}
