function Update () {
	if(Input.GetAxis("Mouse ScrollWheel") > 0 && transform.position.z > 8)
	{
		transform.position.z = transform.position.z - 10*Input.GetAxis("Mouse ScrollWheel");
	}
	else if(Input.GetAxis("Mouse ScrollWheel") < 0 && transform.position.z < 18)
	{
		transform.position.z = transform.position.z - 10*Input.GetAxis("Mouse ScrollWheel");
	}
}