let is12Hour = true;

function updateClock(){
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = '';


        if (is12Hour) {
        // 12-hour format
        ampm = hours >= 12 ? "PM" : "AM"; 

        if (hours > 12) {
            hours = hours - 12;
        } else if (hours === 0) {
            hours = 12;
        }
    }

       /*Convert to 12-hour format --> short!!!
            let ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12; // if 0, make it 12 */



    //(09 instead of 9)
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;      

    let timeString = `${hours}:${minutes}:${seconds}`;
    if(is12Hour){
        timeString += " " + ampm;        
    }



    document.getElementById("clock").textContent = timeString;
}

// Toggle format when button is clicked
document.querySelector(".change-format").addEventListener("click", function() {
    is12Hour = !is12Hour;   // --> is12Hour = is12Hour ? false : true; // flips true ↔ false
    this.textContent = is12Hour ? "Switch to 24-hour" : "Switch to 12-hour";
    updateClock(); // update immediately
});



setInterval(updateClock, 1000);  //Run updateClock every second

updateClock();      //Run immediately so clock shows without delay
