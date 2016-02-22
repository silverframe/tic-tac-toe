
var currentPlayer = "x";

var counter = 0; 

var squares = document.getElementsByClassName('square');




for (var i = 0; i <squares.length; i++ ){
 squares[i].addEventListener("click", changeColour);                        
}

function changeColour (event) {
  console.dir(event)
  console.log(event)

  if (currentPlayer==="x" && event.target.innerHTML == "") {
  event.target.style.backgroundColor = "#81F7F3";
  event.target.innerHTML= "X";
  event.target.style.fontSize = "100px";
  event.target.disabled= "disabled";
  currentPlayer = "y";
  winner ();
  counter++;
  // checkTie();
  
}
  else if (currentPlayer==="y" && event.target.innerHTML == "" ) {
  event.target.style.backgroundColor = "#F5A9F2";
  event.target.innerHTML= "O";
  event.target.style.fontSize = "100px";
  event.target.disable= "disabled";
  currentPlayer = "x";
  winner();
  counter++; 
  // checkTie();
  }

};


function winner (event) {
  if (
  document.getElementById("S1").innerHTML=="X" &&
  document.getElementById("S2").innerHTML=="X"&&
  document.getElementById("S3").innerHTML=="X" ){
  alert("Player 1 Wins!")
  }

  else if (
  document.getElementById("S4").innerHTML=="X" &&
  document.getElementById("S5").innerHTML=="X"&&
  document.getElementById("S6").innerHTML=="X" ){
  alert("Player 1 Wins!")
  }

  else if (
  document.getElementById("S7").innerHTML=="X" &&
  document.getElementById("S8").innerHTML=="X"&&
  document.getElementById("S9").innerHTML=="X" ){
  alert("Player 1 Wins!")
  }

  else if (
  document.getElementById("S1").innerHTML=="X" &&
  document.getElementById("S4").innerHTML=="X"&&
  document.getElementById("S7").innerHTML=="X" ){
  alert("Player 1 Wins!")
  }

  else if (
  document.getElementById("S2").innerHTML=="X" &&
  document.getElementById("S5").innerHTML=="X"&&
  document.getElementById("S8").innerHTML=="X" ){
  alert("Player 1 Wins!")
  }

  else if (
  document.getElementById("S3").innerHTML=="X" &&
  document.getElementById("S6").innerHTML=="X"&&
  document.getElementById("S9").innerHTML=="X" ){
  alert("Player 1 Wins!")
  }

  else if (
  document.getElementById("S1").innerHTML=="X" &&
  document.getElementById("S5").innerHTML=="X"&&
  document.getElementById("S9").innerHTML=="X" ){
  alert("Player 1 Wins!")
  }

  else if (
  document.getElementById("S3").innerHTML=="X" &&
  document.getElementById("S5").innerHTML=="X"&&
  document.getElementById("S7").innerHTML=="X" ){
  alert("Player 1 Wins!")
  }

  if (
  document.getElementById("S1").innerHTML=="O" &&
  document.getElementById("S2").innerHTML=="O"&&
  document.getElementById("S3").innerHTML=="O" ){
  alert("Player 2 Wins!")
  }

  else if (
  document.getElementById("S4").innerHTML=="O" &&
  document.getElementById("S5").innerHTML=="O"&&
  document.getElementById("S6").innerHTML=="O" ){
  alert("Player 2 Wins!")
  }

  else if (
  document.getElementById("S7").innerHTML=="O" &&
  document.getElementById("S8").innerHTML=="O"&&
  document.getElementById("S9").innerHTML=="O" ){
  alert("Player 2 Wins!")
  }

  else if (
  document.getElementById("S1").innerHTML=="O" &&
  document.getElementById("S4").innerHTML=="O"&&
  document.getElementById("S7").innerHTML=="O" ){
  alert("Player 2 Wins!")
  }

  else if (
  document.getElementById("S2").innerHTML=="O" &&
  document.getElementById("S5").innerHTML=="O"&&
  document.getElementById("S8").innerHTML=="O" ){
  alert("Player 2 Wins!")
  }

  else if (
  document.getElementById("S3").innerHTML=="O" &&
  document.getElementById("S6").innerHTML=="O"&&
  document.getElementById("S9").innerHTML=="O" ){
  alert("Player 2 Wins!")
  }

  else if (
  document.getElementById("S1").innerHTML=="O" &&
  document.getElementById("S5").innerHTML=="O"&&
  document.getElementById("S9").innerHTML=="O" ){
  alert("Player 2 Wins!")
  }

  else if (
  document.getElementById("S3").innerHTML=="O" &&
  document.getElementById("S5").innerHTML=="O"&&
  document.getElementById("S7").innerHTML=="O" ){
  alert("Player 2 Wins!")
  }

  if (counter === 9){ 
    alert ("It's a tie, please try again");
  } 

}

// function checkTie(){
//   if (counter === 9){ 
//     alert ("It's a tie, please try again");
//   } 
// }

function reset() {
document.querySelector('S1').innerHTML = "";
document.querySelector('S2').innerHTML = "";
document.querySelector('S3').innerHTML = "";
document.querySelector('S4').innerHTML = "";
document.querySelector('S5').innerHTML = "";
document.querySelector('S6').innerHTML = "";
document.querySelector('S7').innerHTML = "";
document.querySelector('S8').innerHTML = "";
document.querySelector('S9').innerHTML = "";
}