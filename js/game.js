const numberContainer = document.querySelector("#counter");
let counter = 0;

//counting mechanism
setInterval(function(){
    // task 1
    // increase counter by 1 each time
    
    
    //counter += 1;
    //counter = counter + 1;
    
    counter++;
    numberContainer.innerHTML = counter;
    
    
    console.log(counter);

    // task 2 | conditional 1
    // reset the counter to 0 when it reaches 50
    if (counter == 50) {
        counter = 0;
    }
    
    
}, 200);

// Hit Enter - Event
window.addEventListener("keyup", function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        
        //alert("booh");

        if (counter == 10) {
            
            console.log(counter);
            alert("YAY! You stopped the counter 🥳");
            counter = -1;
        }
        // task 3 | conditional 2
        // When you hit Enter while counter is 10, 
        // interrupt & reset to 0 of the counter
        // alert("YAY! You stopped the counter 🥳"); will interrupt the counting automatically
        

    }
})