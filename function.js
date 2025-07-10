const secondsEl = document.querySelector(".seconds");
const minutesEl = document.querySelector(".minutes");
const hoursEl = document.querySelector(".hours");
const daysEl = document.querySelector(".days");
const monthsEl = document.querySelector(".months");


function newYearCount(){

    let date = new Date();

    setInterval(()=>{
      newYearCount();
      monthsCount();
      daysCount();
      hoursCount();
      minitsCount();
      SecondsCount();
     
    },1000);
   
};

function monthsCount(){
    let currentDate = new Date();
    console.log(currentDate);
    let targetDate = new Date("january 1, 2026");
    console.log(targetDate);
    let currentYears = targetDate.getFullYear() - currentDate.getFullYear();
    console.log(currentYears);
    let currentMonths = targetDate.getMonth() - currentDate.getMonth();
    console.log(currentMonths);
    let totalMonths = Math.floor(currentYears * 12 + currentMonths);
    console.log(totalMonths);
    totalMonths = totalMonths <10 ? "0"+ totalMonths : totalMonths;
    if(targetDate > currentDate){
        totalMonths--;
    }
    monthsEl.innerHTML = totalMonths;

}

function daysCount(){
    let currentDay = new Date();
    let targetDay = new Date("january 1, 2026");
    let totalMiliSec = targetDay - currentDay;
    let totalDay = Math.floor(totalMiliSec / (1000 * 60 * 60 * 24));
    totalDay = totalDay <10 ? "0"+ totalDay : totalDay;
    daysEl.innerHTML = totalDay;

};
function hoursCount(){
    let currentHours = new Date();
    let targetHours = new Date("january 1, 2026");
    let totalMiliSec = targetHours - currentHours;
    let totalHours = Math.floor(totalMiliSec / (1000 * 60 * 60));
    totalHours = totalHours <10 ? "0"+ totalHours : totalHours;
    // totalHours = totalHours > 12 ? totalHours - 12 : totalHours;
    hoursEl.innerHTML = totalHours;

};
function minitsCount(){
    let currentMinits = new Date();
    let targetMinits = new Date("january 1, 2026");
    let totalMiliSec = targetMinits - currentMinits;
    let totalMinits = Math.floor(totalMiliSec / (1000 * 60));
    totalMinits = totalMinits <10 ? "0"+ totalMinits : totalMinits;
    minutesEl.innerHTML = totalMinits;

};
function SecondsCount(){
    let currentSeconds = new Date();
    let targetSeconds = new Date("january 1, 2026");
    let totalMiliSec = targetSeconds - currentSeconds;
    let totalSeconds = Math.floor(totalMiliSec / (1000));
    totalSeconds = totalSeconds <10 ? "0"+ totalSeconds : totalSeconds;
    secondsEl.innerHTML = totalSeconds;

}
SecondsCount();
minitsCount();
hoursCount();
daysCount();
newYearCount();
monthsCount();

 

