/*
 * Create a list that holds all of your cards
 */
let cardList = [ {
  name: "Diamond",
  img: '<i class="fa fa-diamond"></i>',
},
{
  name: "Paper Plane",
  img: '<i class="fa fa-paper-plane-o"></i>',
},
{
  name: "Anchor",
  img: '<i class="fa fa-anchor"></i>',
},
{
  name: "Bolt",
  img: '<i class="fa fa-bolt"></i>',
},
{
  name: "Cube",
  img: '<i class="fa fa-cube"></i>',
},
{
  name: "Leaf",
  img: '<i class="fa fa-leaf"></i>',
},
{
  name: "Bicycle",
  img: '<i class="fa fa-bicycle"></i>',
},
{
  name: "Bomb",
  img: '<i class="fa fa-bomb"></i>',
},
{
  name: "Diamond",
  img: '<i class="fa fa-diamond"></i>',
},
{
  name: "Paper Plane",
  img: '<i class="fa fa-paper-plane-o"></i>',
},
{
  name: "Anchor",
  img: '<i class="fa fa-anchor"></i>',
},
{
  name: "Bolt",
  img: '<i class="fa fa-bolt"></i>',
},
{
  name: "Cube",
  img: '<i class="fa fa-cube"></i>',
},
{
  name: "Leaf",
  img: '<i class="fa fa-leaf"></i>',
},
{
  name: "Bicycle",
  img: '<i class="fa fa-bicycle"></i>',
},
{
  name: "Bomb",
  img: '<i class="fa fa-bomb"></i>',
}
];

// loop through cardList and create HTML array
const cardListHTML = (cardList) => {
  let listHTML = '';
  for (let i = cardList.length - 1; i >=0; i--) {
    listHTML += '<li class="card">' + cardList[i].img + '</li>';
}
  return listHTML;
}
//add html card list to html deck
$('.deck').html(cardListHTML(cardList));

//function restarts game
let restartGame =
  $('.score-panel > .restart').click(function(){
  var shuffledCardList = shuffle(cardList);
  $('.deck').html(cardListHTML(shuffledCardList));
  moves = 0;
  clock = 0;
  counter();
  match = [];
  $('.moves').html('' + moves);
  $('.stars').children().show()
  setTimeout(counterAndStars, 250);
  $('.deck > .card').click(function() {
    $(this).toggleClass( ".card show open" );
  });
  gameFunctionality();
  });


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//make card flip open on click

$('.deck > .card').click(function() {
  $(this).addClass('animated flip');
  $(this).toggleClass( ".card show open" )
});

//Moves counter & star rating
let moves = 0;


let counterAndStars = function() {

$('.deck > .card').click(function() {
  moves++;
  $('.moves').html('' + moves);
  if (moves <= 20){
    $('.stars').children().show();
  } else if (moves === 21){
    $('.stars li:first').hide('li');
  } else if (moves === 40){
    $('.stars li:eq(1)').hide('li');
  }
});
};
counterAndStars();

//open cards and matched cards lists

let open = [];
let match = [];

let gameFunctionality = function(){

$('.card').click(function() { //on click
   if (open.length < 2){ // add card to open card list if list has less than 2 cards
		open.push($(this));
   if (open.length == 2){ // if there are two cards open find favicon images of both
	let a = open[0].find('i');
  let i = a.prevObject["0"].firstChild.className;
	let b = open[1].find('i');
  let z = b.prevObject["0"].firstChild.className;
		if (z === i){ // compare favicon images! If they match, switch their classes to card match and then lock them into place
        open[0].removeClass('animated flip').addClass('bounce');
        open[1].removeClass('animated flip').addClass('bounce');
        open[0].addClass('card match');
        open[1].addClass('card match');
        match.push(open[0]); // push cards into the match list & clear open list
        match.push(open[1]);
        open = [];
        } else if (a !== b){
          open[0].removeClass('open show').removeClass('animated flip').addClass('card redBackground').addClass('shake');
          open[1].removeClass('open show').removeClass('animated flip').addClass('card redBackground').addClass('shake');
        let flipCard =  function(){
          $(open[0]).removeClass('shake').removeClass('card redBackground').addClass('card');
          $(open[1]).removeClass('shake').removeClass('card redBackground').addClass('card');
          open = [];
        }
        setTimeout(flipCard, 1500);
        }
      }
}
const congrats = function() {
  if (match.length === 16){
    modalPopupNow();
}
};
setTimeout(congrats, 1500);
});
};
gameFunctionality();

//function expression for counter
let clock = 0;
const counter = function(){
let timer = $('#timer');
timer.html(convertSecond(clock));

function convertSecond(s){
  let min = Math.floor(s/60);
  let sec = s % 60;
  return min + ':' + sec;
}


function timeIt(){
  if (moves > 0 && match.length < 16){
      clock++;
  }
  timer.html(convertSecond(clock));
}
let interval = setInterval(timeIt, 1000);
if (match.length == 16){
  clearInterval(interval);
}
};
counter();



//function expression for modal popup
let modalPopupNow = function () {
  //set congratsText
  let congratsText = ('Congratulations! You won!')
  //Get modalText
  let modalText = $('#modalText');
  //set modalText to congratsText
  modalText.html(congratsText);

  //stars conditional
  if (moves <= 20){
    starParagraph = 3;
  } else if (moves > 20 && moves < 40){
    starParagraph = 2;
  } else if (moves === 40){
    starParagraph = 1;
  }

  // sets congrats paragraph
  let congratsparagraph = ('With ' + moves + ' moves and ' + starParagraph + ' stars in '+ clock + ' seconds!');
  //select modalTextTwo id
  let modalTextTwo = $('#modalTextTwo');
  //make congrats paragraph modalTextTwo's html
  modalTextTwo.html(congratsparagraph);

  //get playAgain button

  let modalBtn = $('#playAgain')

  modalBtn.click(function () {
    $('#popupModal').css({'display':'none'});
    restartFunctionality();
  })
  $('#popupModal').css({'display':'block'});
}

//putting restartGame functionality here so i can use for popup
let restartFunctionality = function () {
  var shuffledCardList = shuffle(cardList);
  $('.deck').html(cardListHTML(shuffledCardList));
  moves = 0;
  clock = 0;
  counter();
  match = [];
  $('.moves').html('' + moves);
  $('.stars').children().show()
  setTimeout(counterAndStars, 250);
  $('.deck > .card').click(function() {
    $(this).toggleClass( ".card show open" );
  });
  gameFunctionality();
};
