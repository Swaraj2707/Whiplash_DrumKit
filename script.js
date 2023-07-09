// Get the number of buttons with the class "drum"
var numberOfButtons = document.querySelectorAll(".drum").length;

// Loop through each button and add a click event listener
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // Get the innerHTML of the clicked button
        var buttonPressed = this.innerHTML;

        // Call the makeSound and addAnimation functions with the buttonPressed value
        makeSound(buttonPressed);
        addAnimation(buttonPressed);
    });
}

// Listen for the keydown event on the document
document.addEventListener("keydown", function(event) {
    // Get the key that was pressed
    var key = event.key;

    // Call the makeSound and addAnimation functions with the key value
    makeSound(key);
    addAnimation(key);
});

// Function to play the corresponding sound based on the key or button pressed
function makeSound(key) {
    // Use a switch statement to determine which sound to play
    switch (key) {
        case "w":
            // Create a new Audio object with the sound file to be played
            var tom1 = new Audio('tom-1.mp3');
            // Play the sound
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(this.innerHTML);
    }
}

// Function to add an animation when a key or button is pressed
function addAnimation(key) {
    // Select the element with the corresponding class name
    var activeButton = document.querySelector("." + key);
    
    // Add the "pressed" class to trigger the animation
    activeButton.classList.add("pressed");
    
    // Remove the "pressed" class after 100 milliseconds
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
