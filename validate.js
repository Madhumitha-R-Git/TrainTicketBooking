//var usernameArr[];
//var userPassArr[];
document.getElementById("bt").addEventListener("click",redirectFn1);
function redirectFn1()
{
var curr_user = document.getElementById("user").value;
var curr_pass = document.getElementById("pwd").value;
if(curr_user==="" && curr_pass==="")
alert("Login properly");
else
window.location.href = "Traveldetails.html";

}

