const time = document.getElementsByTagName('span');
const controls = document.getElementsByClassName('sw-button');
const watch = document.getElementsByClassName('sw-wraper');
const toogle = document.getElementById('btn')

let seconds = 0;
let minutes = 0;
let hours = 0;


// Control Function
let control = ()=>{
    let interval = setInterval(() => {
        seconds++;
        if(seconds === 60){
        seconds = 0;
        minutes++;
        }
        if(minutes === 60){
        minutes = 0;
        hours++;
        }
        time[0].innerHTML = hours < 10 ? `0${hours}` : hours;
        time[1].innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        time[2].innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    }, 1000);
    controls[0].disabled = true;
    controls[2].disabled = true;
    controls[1].addEventListener('click', () => {
        clearInterval(interval);
        controls[2].disabled = false;
        controls[0].disabled = false;
        watch[0].style.animationPlayState = "paused";
    });

    watch[0].style.animation = "glow-background 1s 1s infinite";
}



// Start Button , Stop Button
controls[0].addEventListener('click', control)



// Reset Button
controls[2].addEventListener('click', () => {
    seconds = 0;
    minutes = 0;
    hours = 0;
  time[0].innerHTML = "00";
  time[1].innerHTML = "00";
  time[2].innerHTML = "00";
  watch[0].style.animation = "none";
});



// Timer JS


const timerTimer = document.getElementsByClassName('timer-input');
const timerControls = document.getElementsByClassName('timer-button');
const timeWatch = document.getElementsByClassName('timer-wraper');

timerTimer[0].value = "00";
timerTimer[1].value = "00";
timerTimer[2].value = "00";

let checkVal = ()=>{
    for(let i = 1; i < timerTimer.length; i++){
        if(timerTimer[i].value < 0 || timerTimer[i].value > 59){
            timerTimer[i].value = "00";
        }
    }
}


let timer = null; 

function startTimer() {
    checkVal();
        if (timer === null) {
        timer = setInterval(() => {
            if (timerTimer[2].value > 0) {
                timerTimer[2].value--;
            
            } else if (timerTimer[1].value > 0) {
                timerTimer[1].value--;
                timerTimer[2].value = 59;
              
            } else if (timerTimer[0].value > 0) {
                timerTimer[0].value--;
                timerTimer[1].value = 59;
                timerTimer[2].value = 59;
           
            } else {
                clearInterval(timer);
                timer = null;
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = 0;
    timerTimer[0].value = "00";
    timerTimer[1].value = "00";
    timerTimer[2].value = "00";
}

function pauseTimer() {
    clearInterval(timer);
    timer = 0;
}

timerControls[0].addEventListener('click', startTimer );  
timerControls[1].addEventListener('click', pauseTimer);
timerControls[2].addEventListener('click', stopTimer);



let toogleButton = ()=>{
    if(toogle.innerText === "Change To:- Timer"){
        watch[0].style.visibility = "hidden"
        timeWatch[0].style.visibility = "visible"
        toogle.innerText = "Change To:- Stopwatch"
    }else if(toogle.innerText === "Change To:- Stopwatch") {
        toogle.innerText = "Change To:- Timer"
        timeWatch[0].style.visibility = "hidden"
        watch[0].style.visibility = "visible"
    }
}

toogle.addEventListener("click", toogleButton)
