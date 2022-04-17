function fun(x)
{
	document.getElementById("t").value+=x;
}	
function docalculation()
{
	let a=document.getElementById("t").value;
    document.getElementById("t").value=eval(a);
}
function clr()
{
		document.getElementById("t").value="";
}		
