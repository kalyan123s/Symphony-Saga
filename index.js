
// detects  buttton click
var noOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0; i<noOfDrumButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}


function handleclick(){

  this.style.color="green"; //this will change the color of every button when clicked!
  var buttonInnerHTML=this.innerHTML;
  keyclick(buttonInnerHTML);
  buttonAnimationWhenclicked(buttonInnerHTML);
}

function keyclick(key){
  
  switch (key) {
    case "w":
      var tom1= new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2= new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3= new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4= new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare= new Audio("sounds/snare.mp3");
      snare.play();
        break;
    case "k":
      var crash= new Audio("sounds/crash.mp3");
      crash.play();
        break;
    case "l":
      var kickbass= new Audio("sounds/kick-bass.mp3");
     kickbass.play();
        break;
    default:
        console.log(buttonInnerHTML);
      break;
  }
}


//detects keyboard press
document.addEventListener("keydown" , function(event){
  keyclick(event.key);
  buttonAnimationWhenclicked(event.key);
});

function buttonAnimationWhenclicked(clickedKey){
    var pressedButton=document.querySelector("."+clickedKey);
    pressedButton.classList.add("pressed");
    setTimeout(function(){
      pressedButton.classList.remove("pressed");
    }, 100);
    
}

