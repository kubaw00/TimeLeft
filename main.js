const spanD = document.querySelector('span.d');
const spanH= document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

const timeTo = new Date('2021-11-25  13:34:21').getTime();

function timeLeft(){
    const timeStart = new Date().getTime();
    let days = Math.floor(timeTo/(1000*60*60*24) - timeStart/(1000*60*60*24));
    spanD.textContent = days < 10 ? `0${days}` : days;
    let hours = Math.floor((timeTo/(1000*60*60) - timeStart/(1000*60*60))%24);
    spanH.textContent = hours < 10 ? `0${hours}` : hours;
    let minutes = Math.floor((timeTo/(1000*60) - timeStart/(1000*60))%60);
    spanM.textContent = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = Math.floor((timeTo/(1000) - timeStart/(1000))%60);
    spanS.textContent = seconds < 10 ? `0${seconds}` : seconds;

}
setInterval(timeLeft, 1000)