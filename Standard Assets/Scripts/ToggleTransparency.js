#pragma strict
var currentLayer: int;
function Start () {
  currentLayer = 11;
}

function Update () {
   if(Input.GetKeyDown(KeyCode.DownArrow))
   {
      if(currentLayer > 8) {
      currentLayer = currentLayer - 1;
      }
   }
   else if(Input.GetKeyDown(KeyCode.UpArrow))
   {
     if(currentLayer < 11)
     {
     currentLayer = currentLayer + 1;
     }
   }
}
