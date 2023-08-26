// create array to hold food and drinks
var refrigerator = []; 

// create food and drink objects with keys of name, price, and type of either food or drink respectively
    // hamburger is $4.99, french fries are $2.50, milk is $1.80
var burger = {
    name: 'hamburger',
    price: 4.99,
    type: 'food'
}
var fries = {
    name: 'french fries',
    price: 2.50,
    type: 'food'
}
var milk = {
    name: 'milk',
    price: 1.80,
    type: 'drink'
}

// fill array with food and drink objects (add to array)
refrigerator.push(burger, fries, milk);
// initial display of each food / drink option on one line
function displayFridge () {
    var fridgeList = 'You\'re refrigerator has ';
    for(var i = 0; i < refrigerator.length - 1; i++) {
        fridgeList += refrigerator[i]['name'] + ', ';
    }
    if (refrigerator[refrigerator.length - 1] === undefined) {
    console.log("Monster is full and happy! You win!!");
    }
    fridgeList += refrigerator[refrigerator.length - 1]['name'];
  
    console.log(fridgeList);
}
displayFridge();

// create variable for how much money user has left
var wallet = 50;
// initial display of funds available
console.log(wallet);

// declare variable for user input
var userChoice;
// scaffolding - gather user input
document.addEventListener('keyup', function(event) {
    if(event.keyCode === 72) { // 'h'
        // Define user's variable here = 'hamburger';
        userChoice = 'hamburger';
    }
    else if(event.keyCode === 70) { // 'f'
        // Define user's variable here = 'french fries';
        userChoice = 'french fries';
    }
    else if(event.keyCode === 77) { // 'm'
        // Define user's variable here = 'milk';
        userChoice = 'milk';
    }
   else {
       console.log("Invalid Key!  Please press the first letter of one of the available foods or drinks in the refrigerator");
    }
    //  play as long as user has funds, items remain in array, and user input is valid
    if(wallet > 0 && refrigerator.length > 0 && userChoice !== undefined) {
        play(userChoice);
    }
  
});

function play(choice) {
    // display user's choice
    console.log(userChoice);
    // find index of food / drink monster wants - computer randomly chooses what food or drink Monster is craving (by index)
    var craving = Math.floor(Math.random() * refrigerator.length);
    // display Monster's craving
    console.log(refrigerator[craving]['name']);

    // if Monster wants food / drink that user guesses (match user input with object name at that index): 
    if(refrigerator[craving]['name'] === userChoice) {
        // if it's a food, swap indices with food / drink at beginning of array, without affecting other items in array (array length should stay the same)
        if(refrigerator[craving]['type'] === 'food') {
            beginning = refrigerator[0];
            refrigerator[0] = refrigerator[craving];
            refrigerator[craving] = beginning;
            // remove food from beginning of array (shift) 
            refrigerator.shift();
        }
        // if it's a drink, swap indices with food / drink at end of array, without affecting other items in array (array length should stay the same) 
        else {
            end = refrigerator[refrigerator.length - 1];
            refrigerator[refrigerator.length - 1] = refrigerator[craving];
            refrigerator[craving] = end;
            // remove food from end of list (pop)
            refrigerator.pop();
        }
    }
    // if Monster not want food / drink user guesses, user must go and buy a fresh one from the local merchant
    else {
        // if it's food, add to end of list (push)
        if(refrigerator[craving]['type'] === 'food') {
            refrigerator.push(refrigerator[craving]);
        }
        // if it's drink, add to beginning of list (unshift)
        else {
            refrigerator.unshift(refrigerator[craving]);
        }
        // reduce funds user has left by price of food just purchased / replaced
        wallet -= refrigerator[craving]['price'];
   }
    // display remaining foods / drinks available to give Monster
    if (refrigerator.length > 0) {
        displayFridge();
    }
    else {
        console.log("Monster is full and happy! You win!!");
    }
    //display remaining funds as long as there are funds remaining
    if(wallet > 0) {
        console.log(wallet);
    }
    // player wins when array is empty of either all food objects or all drink objects (Monster fully fed and satisfied)
  
    // player loses if runs out of money before Monster fully fed and satisfied
    if(wallet <= 0) {
        console.log("Aww!  You're out of money.  You can't feed Monster!  You lose.");
    }
}


 

