var myCube: GameObject;
var cubeArray;
var numberArray;

var zero: GameObject;
var one: GameObject;
var two: GameObject;
var three: GameObject;
var four: GameObject;
var five: GameObject;
var six: GameObject;
var seven: GameObject;
var eight: GameObject;
var nine: GameObject;

var number_material: Material;

// Use this for initialization
function Start () {
  cubeArray = new Array(7);
  numberArray = new Array(7);
  for(i=0; i<7; i++)
  {
    cubeArray[i] = new Array(7);
    numberArray[i] = new Array(7);
    for(j=0; j<7; j++)
    {
      cubeArray[i][j] = new Array(7);
      numberArray[i][j] = new Array(7);
    }
  } 
  
  cubeArray[3][3][3] = GameObject.Instantiate(myCube);
  cubeArray[3][3][3].layer = 8;
  cubeArray[3][3][3].name = "Cube333";
  cubeArray[3][3][3].renderer.material.color.a = 0.8;
  
  for(i=0; i<3; i++)
  {
    for(j=0; j<3; j++)
    {
      for(k=0; k<3; k++)
      {
        if(!(i == 1 && j == 1 && k == 1))
        {
          cubeArray[2+i][2+j][2+k] = GameObject.Instantiate(myCube);
          cubeArray[2+i][2+j][2+k].layer = 9;
          cubeArray[2+i][2+j][2+k].transform.position = new Vector3(2*(i-1),2*(j-1),2*(k-1));
          cubeArray[2+i][2+j][2+k].name = "Cube" + (i+2).ToString() + (j+2).ToString() + (k+2).ToString();
        }
      }
    }
  }
  
  for(i=0; i<5; i++)
  {
    for(j=0; j<5; j++)
    {
      for(k=0; k<5; k++)
      {
        if((i==0 || i==4) || (j==0 || j==4) || (k==0 || k==4))
        {
          cubeArray[1+i][1+j][1+k] = GameObject.Instantiate(myCube);
          cubeArray[1+i][1+j][1+k].layer = 10;
          cubeArray[1+i][1+j][1+k].transform.position = new Vector3(2*(i-2),2*(j-2),2*(k-2));
          cubeArray[1+i][1+j][1+k].name = "Cube" + (i+1).ToString() + (j+1).ToString() + (k+1).ToString();
        }
      }
    }
  }

  for(i=0; i<7; i++)
  {
    for(j=0; j<7; j++)
    {
      for(k=0; k<7; k++)
      {
        if((i==0 || i==6) || (j==0 || j==6) || (k==0 || k==6))
        {
          cubeArray[i][j][k] = GameObject.Instantiate(myCube);
          cubeArray[i][j][k].layer = 11;
          cubeArray[i][j][k].transform.position = new Vector3(2*(i-3),2*(j-3),2*(k-3));
          cubeArray[i][j][k].name = "Cube" + i.ToString() + j.ToString() + k.ToString();
          cubeArray[i][j][k].renderer.material.color.a = 0.8;
        }
      }
    }
  }
  
  numberArray[3][3][3] = AddNumber(GameObject.Find("Main Camera").GetComponent(GameController).numbers[3][3][3],
  								   new Vector3(cubeArray[3][3][3].transform.position.x,
  												cubeArray[3][3][3].transform.position.y,
  												cubeArray[3][3][3].transform.position.z));
}

// Keeps the numbers and flags in place
function Update()
{

}

function AddNumber(n, location)
{
	var g:GameObject;
	if(true)
	{
	  switch(2){
	  
	  case 1:
	  	g = GameObject.Instantiate(one, location, Quaternion.identity);
	  	g.AddComponent("MeshRenderer");
	  	g.renderer.material = number_material;
	  	g.transform.localScale *= 400;
	  	g.transform.RotateAround(new Vector3(0,0,0),Vector3.right,90);
	  	g.transform.RotateAround(new Vector3(0,0,0),Vector3.back,90);
	  	g.renderer.material.SetColor("_Color",new Color(1,0,1,1));
	  	return g;
	    break;
	  case 2:
	    g = GameObject.Instantiate(two, location, Quaternion.identity);
	    g.transform.localScale = new Vector3(1,1,1);
	    g.transform.rotation.y = -1*Mathf.PI/4;
	    g.transform.localScale *= 20;
	    return g;
	    break;
	  case 3:
	    g = GameObject.Instantiate(three, location, Quaternion.identity);
	    g.transform.localScale *= 20;
	    g.transform.rotation.y = 90;
	    return g;
	    break;
	  case 4:
	    g = GameObject.Instantiate(four, location, Quaternion.identity);
	    return g;
	    break;
	  case 5:
	    g = GameObject.Instantiate(five, location, Quaternion.identity);
	    return g;
	    break;
	  case 6:
	    g = GameObject.Instantiate(six, location, Quaternion.identity);
	    return g;
	    break;
	  case 7:
	    g = GameObject.Instantiate(seven, location, Quaternion.identity);
	    return g;
	    break;
	  case 8:
	    g = GameObject.Instantiate(eight, location, Quaternion.identity);
	    return g;
	    break;
	  case 9:
	    g = GameObject.Instantiate(nine, location, Quaternion.identity);
	    return g;
	    break;
	  default: return;
	  }
	}
}