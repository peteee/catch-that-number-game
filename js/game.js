const numberContainer = document.querySelector("#counter");
const catchNumberDisplay = document.querySelector("#number");
let counter = 0;
let catchNumber;

const generateRandomNumber =  function() {
    catchNumber = Math.floor((Math.random() * 50) + 1);
    catchNumberDisplay.innerHTML = catchNumber;
}
generateRandomNumber();

//counting mechanism
setInterval(function(){
    // task 1
    // increase counter by 1 each time
    
    counter++;
    numberContainer.innerHTML = counter;
    // console.log(counter);

    // task 2 | conditional 1
    // reset the counter to 0 when it reaches 50
    if (counter == 50) {
        counter = 0;
    }
}, 100);

// Hit Enter - Event
window.addEventListener("keyup", function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        
        //alert("booh");

        if (counter == catchNumber) {
            console.log(counter);
            alert("YAY! You stopped the counter 🥳");
            counter -= 1; //fix number display
            generateRandomNumber();
        }
        // task 3 | conditional 2
        // When you hit Enter while counter is 10, 
        // interrupt & reset to 0 of the counter
        // alert("YAY! You stopped the counter 🥳"); will interrupt the counting automatically
        

    }
})