//JS code to display current date and time
const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()

document.getElementById("TodaysDate").innerHTML = `${month} - ${day} - ${year}`


//JS code to display count-down timer
const CountDownDate = new Date("Feb 22, 2023, 00:00:00").getTime()

const countDown = setInterval(function(){

    const now = new Date().getTime();
    const timeremaining = CountDownDate - now;

    const days = Math.floor(timeremaining / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeremaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeremaining % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeremaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("mins").innerHTML = minutes + "m " 
    document.getElementById("secs").innerHTML = seconds + "s " 

    if (timeremaining < 0) {
        clearInterval(countDown);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!"
    }
    }, 1000);