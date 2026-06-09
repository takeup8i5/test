function fizzbuzz() {
    let text;
    const elm = document.getElementById("fields");
    text = "";
    for(let i=1;i<=100;i++){
        if(i%3==0 && i%5==0){
            text += "FizzBuzz<br>";
        }else if(i%3==0){
            text += "Fizz<br>";
        }else if(i%5==0){
            text += "Buzz<br>";
        }else{
            text += `${i}<br>`;
        }
    }
    elm.setHTML(text);
}

function timer() {
    const HELM = document.getElementById("hour");
    const MELM = document.getElementById("minute");
    const SELM = document.getElementById("seconds");
    const TELM = document.getElementById("timer");
    let hour = 0,minute = 0, seconds = 0;
    hour = parseInt(HELM.value);
    minute = parseInt(MELM.value);
    seconds = parseInt(SELM.value);
    TELM.setHTML(`${hour.toString().padStart(2,"0")}:${minute.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`);
    seconds--;
    const interval = setInterval(() => {
        TELM.setHTML(`${hour.toString().padStart(2,"0")}:${minute.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`);
        if (hour == 0 && minute == 0 && seconds ==0){
            clearInterval(interval);
            TELM.setHTML("00:00:00<br>Time up");
        }else{
            seconds--;
            if (seconds < 0){
                minute--;
                seconds = 59;
            }
            if (minute < 0){
                hour--;
                minute = 59;
            }
        }
    },1000);
}