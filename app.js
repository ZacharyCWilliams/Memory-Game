/*
 * Create a list that holds all of your cards
 */
var cardList = [ {
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

var cardValues = []; //remember card values
var cardIds = []; //Empty list we can fill with dynamic card ids
var tilesFlipped = 0;

// loop through cardList and create HTML array
function cardListHTML(cardList){
  var listHTML = '';
  for(var i = cardList.length - 1; i >=0; i--){
    listHTML += '<li class="card">' + cardList[i].img + '</li>';
}
  return listHTML;
}
//console.log(cardListHTML(cardList));
//add html card list to html deck
$('.deck').html(cardListHTML(cardList));
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// loop through cards & create HTML

//function restarts game
const restartGame =
  $('.score-panel > .restart').click(function(){
  $('.deck').html(cardListHTML(cardList));
  $('.deck > .card').click(function() {
    $(this).toggleClass( ".card show open" )
  });
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

    //return array;
    var shuffledCardList = shuffle(cardList); //shuffles cardList
    return shuffledCardList;
}

$('.deck > .card').click(function() {
  $(this).toggleClass( ".card show open" )
});
//console.log(openCardList);


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

/*$('.restart').click(function(){    var shuffledCardList = shuffle(cardList); //shuffles cardList
  var shuffledCardList = shuffle(cardList); //shuffles cardList
  return shuffledCardList;
});
*/



/*
creates object out of instance of class card clicked and then pushes object into open list

let open = [];
const match = [];

$('.card').click(function() {
   open.push($(this));
 });

*/
