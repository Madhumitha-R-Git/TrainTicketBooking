document.getElementById("checkBt").addEventListener("click",redirectFn);
var totalTickets = 10;
let visited=[0,0,0,0,0,0,0,0,0,0,0,0];
var curr_ticket_no;
 function gen()
 {
   var t = Math.floor(Math.random()*10+1);
   if(visited[t]===1)
   gen();
   else
   {  visited[t]=1;
      return t;
   }

 }

function redirectFn()
{
var curr_place = document.getElementById("StartingPlaces").value;
var dest_place= document.getElementById("EndingPlaces").value;
if(curr_place==="Chennai" && dest_place==="Madurai")
{
      var curr_ticket_no = gen();
      totalTickets--;
      if(totalTickets>0)
      {
          var rem = curr_ticket_no%6;
          if(rem===0)
             alert("Your ticket is booked ticket no : "+curr_ticket_no+" LeftSide Window");
           else if(rem===1)
           alert("Your ticket is booked ticket no : "+curr_ticket_no+" RightSide Window");
           else if(rem===2)
           alert("Your ticket is booked ticket no : "+curr_ticket_no+" RightSide Middle");
           else if(rem===3)
           alert("Your ticket is booked ticket no : "+curr_ticket_no+" RightSide Corner");
           else if(rem===4)
           alert("Your ticket is booked ticket no : "+curr_ticket_no+" LeftSide Corner");
           else
           alert("Your ticket is booked ticket no : "+curr_ticket_no+" LeftSide Middle");
      }
      else
      alert("Sorry no tickets are available!");

}
else
{
alert("Choose start point as Chennai and end place as Madurai")
}
}