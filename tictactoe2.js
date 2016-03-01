
window.onload = function () {
  console.log('window loaded')
}

var currentPlayer = "X";

var counter = 0;

var squares = $('.square');

var winnerOrNot = false;

squares.on('click', awesome);

function winner () {

var one = $("#S1").text();
var two = $('#S2').text();
var three = $("#S3").text();
var four = $('#S4').text();
var five = $("#S5").text();
var six = $('#S6').text();
var seven = $("#S7").text();
var eight = $('#S8').text(); 
var nine = $("#S9").text();
  if ( (one === two && two === three && three !=="" )
    || (four === five && five === six && six !=="") || (seven === eight && eight === nine && nine !== "") ||
    (one === five && five === nine && nine !== "") || (three === five && five === seven && seven !=="") ||(one === four && four ===seven && seven !== "") ||
    (two === five && five === eight && eight!== "") || (three === six && six === nine && nine !=="") )
  { console.log("winner");
    alert("Player " + currentPlayer + " is the winner!" );
    reset();
    window.location.reload()
  }
}

function checkTie(){
  if (counter === 9 ){
    alert ("It's a tie, please try again");
  }
}

function reset() {
  console.log('I am the reset function')
  squares.text("");
  squares.css('backgroundColor', '#D8D8D8');
}

function awesome () {
  if ($(this).text() === '') {
    // checks for even count
    if (counter % 2  === 0 ) {
      // $(this).css('backgroundColor', '#81F7F3');
      $(this).addClass('X').text("X");
      $(this).removeClass('square-hover');
      currentPlayer = "X";
    } else if (counter % 2 === 1 ) {
      // $(this).css('backgroundColor', '#F5A9F2');
      $(this).addClass('O').text("O");
      $(this).removeClass('square-hover');
      currentPlayer = "O";
    }

    winner ();
    counter ++ ;
    checkTie ();
    console.log(counter);
  } else {
    return;
  }
}
