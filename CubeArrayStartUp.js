var myCube: GameObject;
var cubeArray;
var numberArray;

var one: GameObject;
var two: GameObject;
var three: GameObject;
var four: GameObject;
var five: GameObject;
var six: GameObject;
var seven: GameObject;
var eight: GameObject;
var nine: GameObject;

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
  
  initializeCubeArray();
  initializeNumberArray();
}

// Keeps the numbers and flags in place
function Update()
{

  for(i=0; i<7; i++)
  {
    for(j=0; j<7; j++)
    {
      for(k=0; k<7; k++)
      {
        if(numberArray[i][j][k])
          numberArray[i][j][k].transform.position = cubeArray[i][j][k].transform.position;
      }
    }
  }
}

function AddNumber(n, location)
{
	var transp = 0;
	var g:GameObject;
	if(n < 10)
	{
	  switch(n){
	  
	  case 1:
	  	g = GameObject.Instantiate(one, location, Quaternion.identity);
	  	g.transform.localScale *= 7.5;
	  	g.transform.RotateAround(location,Vector3.down,90);
	  	g.transform.RotateAround(location,Vector3.back,90);
	  	g.renderer.material.SetColor("_Color",new Color(255,0,0,transp));
	  	return g;
	    break;
	  case 2:
	    g = GameObject.Instantiate(two, location, Quaternion.identity);
	    g.transform.localScale = new Vector3(1,1,1);
	    g.transform.localScale *= 10;
	    g.renderer.material.SetColor("_Color",new Color(0,255,0,transp));
        g.transform.RotateAround(location,Vector3.forward,90);  
	    return g;
	    break;
	  case 3:
	    g = GameObject.Instantiate(three, location, Quaternion.identity);
	    g.transform.localScale *= 6;
	    g.transform.RotateAround(location,Vector3.down,90);
	    g.transform.RotateAround(location,Vector3.back,90);
	    g.renderer.material.SetColor("_Color",new Color(255,255,0,transp));
	    return g;
	    break;
	  case 4:
	    g = GameObject.Instantiate(four, location, Quaternion.identity);
	    g.transform.localScale *= 15;
        g.transform.RotateAround(location,Vector3.forward,90);
	    g.renderer.material.SetColor("_Color",new Color(211,30,255,transp));
	    return g;
	    break;
	  case 5:
	    g = GameObject.Instantiate(five, location, Quaternion.identity);
	    g.transform.localScale *= 7.5;
	  	g.transform.RotateAround(location,Vector3.left,90);
	    g.transform.RotateAround(location,Vector3.up,-90);
	    g.renderer.material.SetColor("_Color",new Color(0,0,255,transp));
	    return g;
	    break;
	  case 6:
	    g = GameObject.Instantiate(six, location, Quaternion.identity);
	    g.transform.localScale *= 7.5;
	    g.transform.RotateAround(location, Vector3.forward,90);
	    g.transform.RotateAround(location, Vector3.up,180);
	    g.renderer.material.SetColor("_Color",new Color(2.5,0,5,transp));
	    return g;
	    break;
	  case 7:
	    g = GameObject.Instantiate(seven, location, Quaternion.identity);
	    g.transform.localScale *= 7.5;
	    g.transform.RotateAround(location, Vector3.back,40);
	    g.transform.RotateAround(location, Vector3.up,-90);
	    g.renderer.material.SetColor("_Color",new Color(35,1,70,transp));
	    return g;
	    break;
	  case 8:
	    g = GameObject.Instantiate(eight, location, Quaternion.identity);
	    g.transform.RotateAround(location, Vector3.forward,85);
	    g.transform.localScale *= 7.5;
	    g.renderer.material.SetColor("_Color",new Color(255,1,255,transp));
	    return g;
	    break;
	  case 9:
	    g = GameObject.Instantiate(nine, location, Quaternion.identity);
	    g.transform.localScale *= 7.5;
	    g.transform.RotateAround(location, Vector3.up,-90);
	    g.transform.RotateAround(location, Vector3.forward,90);
	    g.renderer.material.SetColor("_Color",new Color(150,150,150,transp));
	    return g;
	    break;
	  default: return;
	  }
	}
}

function initializeCubeArray() {

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
          cubeArray[2+i][2+j][2+k].transform.position = new Vector3(i-1,j-1,k-1);
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
          cubeArray[1+i][1+j][1+k].transform.position = new Vector3(i-2,j-2,k-2);
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
          cubeArray[i][j][k].transform.position = new Vector3(i-3,j-3,k-3);
          cubeArray[i][j][k].name = "Cube" + i.ToString() + j.ToString() + k.ToString();
          cubeArray[i][j][k].renderer.material.color.a = 0.8;
        }
      }
    }
  }  
}

function initializeNumberArray() {

  numberArray[3][3][3] = AddNumber(GameObject.Find("Main Camera").GetComponent(GameController).numbers[3][3][3],
  								   new Vector3(cubeArray[3][3][3].transform.position.x,
  												cubeArray[3][3][3].transform.position.y,
  												cubeArray[3][3][3].transform.position.z));
  if(numberArray[3][3][3]){
    numberArray[3][3][3].layer = 8;
    numberArray[3][3][3].AddComponent("NumberLayerSelect");
  }
  for(i=0; i<3; i++)
  {
    for(j=0; j<3; j++)
    {
      for(k=0; k<3; k++)
      {
        if(!(i == 1 && j == 1 && k == 1))
        {
          numberArray[2+i][2+j][2+k] = AddNumber(GameObject.Find("Main Camera").GetComponent(GameController).numbers[2+i][2+j][2+k],
  								                 new Vector3(cubeArray[2+i][2+j][2+k].transform.position.x,
  												             cubeArray[2+i][2+j][2+k].transform.position.y,
  												             cubeArray[2+i][2+j][2+k].transform.position.z));
          if(numberArray[2+i][2+j][2+k]) {
            numberArray[2+i][2+j][2+k].layer = 9;
            numberArray[2+i][2+j][2+k].AddComponent("NumberLayerSelect");
          }
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
          numberArray[1+i][1+j][1+k] = AddNumber(GameObject.Find("Main Camera").GetComponent(GameController).numbers[1+i][1+j][1+k],
  								                 new Vector3(cubeArray[1+i][1+j][1+k].transform.position.x,
  												             cubeArray[1+i][1+j][1+k].transform.position.y,
  												             cubeArray[1+i][1+j][1+k].transform.position.z));
          if(numberArray[1+i][1+j][1+k]) {
            numberArray[1+i][1+j][1+k].layer = 10;
            numberArray[1+i][1+j][1+k].AddComponent("NumberLayerSelect");
          }
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
          numberArray[i][j][k] = AddNumber(GameObject.Find("Main Camera").GetComponent(GameController).numbers[i][j][k],
  								                 new Vector3(cubeArray[i][j][k].transform.position.x,
  												             cubeArray[i][j][k].transform.position.y,
  												             cubeArray[i][j][k].transform.position.z));
          if(numberArray[i][j][k]) {
            numberArray[i][j][k].layer = 11;
            numberArray[i][j][k].AddComponent("NumberLayerSelect");
          }
   		}
      }
    }
  }
}