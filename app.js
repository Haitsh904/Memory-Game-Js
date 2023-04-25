let level = 1;
let mainSequance = [];
let playerSequance = [];
const firstSquare = $("#one");
const secondSquare = $("#two");
const thirdSquare = $("#three");
const fouthSquare = $("#four");
const headertitle = $("h1");
let levelUp = false;
let counter = 0;

$(document).on("keypress", function () {
  headertitle.text(`Level: ${level}`);
  addingToComputerSequance();
});

$("div").on("click", function (event) {
  let id = event.target.id;
  addingToPlayerSequance(id);
  addingRemovingClass(id);
  if (mainSequance.length === playerSequance.length) {
    checkSequances(mainSequance, playerSequance);
    counter = 0;
  } else {
    if (playerSequance[counter] !== mainSequance[counter]) {
      headertitle.text(`Game Over, Press Any Key to Restart`);
      $("body").css("background-color", "red");
      let gameOver = new Audio("sounds/wrong.mp3");
      gameOver.play();
      setTimeout(gameReset, 250);
    } else {
      counter++;
    }
  }
});

// adding to the player sequance when the player click on a button
function addingToPlayerSequance(num) {
  if (num === "one") {
    playerSequance.push(1);
  } else if (num === "two") {
    playerSequance.push(2);
  } else if (num === "three") {
    playerSequance.push(3);
  } else if (num === "four") {
    playerSequance.push(4);
  }
}

// adding a number to computer sequance
function addingToComputerSequance() {
  let randNum = Math.floor(Math.random() * 4) + 1;
  mainSequance.push(randNum);
  addingRemovingClass(randNum);
}

// adding and removing classes when hitting a button and when to start a game
function addingRemovingClass(num) {
  if (num === 1 || num === "one") {
    $("#one").addClass("hover-effect");
    setTimeout(function () {
      $("#one").removeClass("hover-effect");
    }, 200);
    let sound = new Audio("sounds/green.mp3");
    sound.play();
  } else if (num === 2 || num === "two") {
    $("#two").addClass("hover-effect");
    setTimeout(function () {
      $("#two").removeClass("hover-effect");
    }, 200);
    let sound = new Audio("sounds/red.mp3");
    sound.play();
  } else if (num === 3 || num === "three") {
    $("#three").addClass("hover-effect");
    setTimeout(function () {
      $("#three").removeClass("hover-effect");
    }, 200);
    let sound = new Audio("sounds/yellow.mp3");
    sound.play();
  } else if (num === 4 || num === "four") {
    $("#four").addClass("hover-effect");
    setTimeout(function () {
      $("#four").removeClass("hover-effect");
    }, 200);
    let sound = new Audio("sounds/blue.mp3");
    sound.play();
  }
}

// check if the if both sequences are identical
function checkSequances(firstArr, secondArr) {
  let mainArrayLength = mainSequance.length;
  for (let i = 0; i < mainArrayLength; i++) {
    if (firstArr[i] !== secondArr[i]) {
      levelUp = false;
    } else {
      console.log(firstArr[i], secondArr[i]);
      levelUp = true;
    }
  }
  if (levelUp) {
    setTimeout(function () {
      let randNum = Math.floor(Math.random() * 4) + 1;
      mainSequance.push(randNum);
      addingRemovingClass(randNum);
      level++;
    }, 2000);
    headertitle.text(`Level: ${level}`);
    playerSequance = [];
  } else {
    headertitle.text(`Game Over, Press Any Key to Restart`);
    $("body").css("background-color", "red");
    let gameOver = new Audio("sounds/wrong.mp3");
    gameOver.play();
    setTimeout(gameReset, 250);
  }
}

// Gamer reset function
function gameReset() {
  level = 1;
  mainSequance = [];
  playerSequance = [];
  $("body").css("background-color", "#011f3f");
}

// mobile version ------------- Trial Version
$(document).on("touchstart", function () {
  headertitle.text(`Level: ${level}`);
  addingToComputerSequance();
});

$("div").on("touchstart", function (event) {
  let id = event.target.id;
  addingToPlayerSequance(id);
  addingRemovingClass(id);
  if (mainSequance.length === playerSequance.length) {
    checkSequances(mainSequance, playerSequance);
    counter = 0;
  } else {
    if (playerSequance[counter] !== mainSequance[counter]) {
      headertitle.text(`Game Over, Press Any Key to Restart`);
      $("body").css("background-color", "red");
      let gameOver = new Audio("sounds/wrong.mp3");
      gameOver.play();
      setTimeout(gameReset, 250);
    } else {
      counter++;
    }
  }
});
