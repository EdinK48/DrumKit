
var numberOfButtons = document.querySelectorAll(".drum").length;
var audio = "";
var audio2 = "";


//**********Execute on Clicking***********************************//
//***************************************************************//

function playDrum(){

for (var i = 0; i < numberOfButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){


  var buttonText = this.innerHTML;



switch (buttonText){
  case "w":
  audio = new Audio("C:/Users/Dini/Desktop/Fullstack WebDevelopment/Drum Kit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-1.mp3");
  audio.play();
    break;

    case "a":
    audio = new Audio("C:/Users/Dini/Desktop/Fullstack WebDevelopment/Drum Kit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-2.mp3");
    audio.play();
      break;

    case "s":
    audio = new Audio("C:/Users/Dini/Desktop/Fullstack WebDevelopment/Drum Kit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-3.mp3");
    audio.play();
      break;

    case "d":
    audio = new Audio("C:/Users/Dini/Desktop/Fullstack WebDevelopment/Drum Kit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-4.mp3");
    audio.play();
      break;

    case "j":
    audio = new Audio("C:/Users/Dini/Desktop/Fullstack WebDevelopment/Drum Kit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/snare.mp3");
    audio.play();
      break;

    case "k":
    audio = new Audio("C:/Users/Dini/Desktop/Fullstack WebDevelopment/Drum Kit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/crash.mp3");
    audio.play();
      break;

    case "l":
    audio = new Audio("C:/Users/Dini/Desktop/Fullstack WebDevelopment/Drum Kit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/kick-bass.mp3");
    audio.play();
      break;

  default: alert("No button got Clicked");}

clickAnimation(buttonText);
});}}


//****************************************************************//
//***************************************************************//

//**********Execute on Key Press***********************************//
//***************************************************************//
function pressKey(){

document.addEventListener('keydown', function(event){


  switch (event.keyCode) {

    case 87:
    audio2 = new Audio("C:/Users/Dini/Desktop/Fullstack WebDevelopment/Drum Kit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-1.mp3");
    audio2.play();
      break;

    case 65:
    audio2 = new Audio("C:/Users/Dini/Desktop/Fullstack WebDevelopment/Drum Kit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-2.mp3");
    audio2.play();
    break;

    case 83:
    audio2 = new Audio("C:/Users/Dini/Desktop/Fullstack WebDevelopment/Drum Kit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-3.mp3");
    audio2.play();
    break;

    case 68:
    audio2 = new Audio("C:/Users/Dini/Desktop/Fullstack WebDevelopment/Drum Kit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-4.mp3");
    audio2.play();
    break;

    case 74:
    audio2 = new Audio("C:/Users/Dini/Desktop/Fullstack WebDevelopment/Drum Kit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/snare.mp3");
    audio2.play();
    break;

    case 75:
    audio2 = new Audio("C:/Users/Dini/Desktop/Fullstack WebDevelopment/Drum Kit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/crash.mp3");
    audio2.play();
    break;

    case 76:
    audio2 = new Audio("C:/Users/Dini/Desktop/Fullstack WebDevelopment/Drum Kit/Drum Kit Starting Files/Drum Kit Starting Files/sounds/kick-bass.mp3");
    audio2.play();
    break;

    default:}

  keyPressAnimation(event);
  });
}


function clickAnimation(currentKey){

var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");

setTimeout(function(){activeButton.classList.remove("pressed");}, 200);
}

function keyPressAnimation(event){

var x = event.key;
var keyPress = document.querySelector("." + x);

keyPress.classList.add("pressed");
setTimeout(function(){keyPress.classList.remove("pressed");}, 200);


}

//****************************************************************//
//***************************************************************//


/* Basic Order for Key Listeners
document.addEventListener('keydown', function(event){
    alert(event.keyCode);
} );
*/
