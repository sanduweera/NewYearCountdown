//days hours minutes seconds
// 01 jan 00:00 

let cDay;
let cHour;
let cMin;
let cSec;
let cMonth;
let daysLeft;
let cYear;
let daysPerYear;
let daysInFeb;

let interval = window.setInterval(function(){
    let cDate = new Date();
    cHour = cDate.getHours();
    cMin = cDate.getMinutes();
    cSec = cDate.getSeconds();
    cDay = cDate.getDate();
    cMonth = cDate.getMonth() + 1;
    cYear = cDate.getFullYear();

    if((cYear % 4 === 0 && cYear % 100 !== 0) || (cYear % 400 === 0)){
        daysPerYear = 366;
        daysInFeb = 29;
    } else {
        daysPerYear = 365;
        daysInFeb = 28;
    }

    switch (cMonth) {
        case 1:
            daysLeft = daysPerYear;
            break;
        
        case 2:
            daysLeft = daysPerYear - 31;
            break;
        
        case 3:
            daysLeft = daysPerYear - (31 + daysInFeb);
            break;

        case 4:
            daysLeft = daysPerYear - (62 + daysInFeb);
            break;
        
        case 5:
            daysLeft = daysPerYear - (92 + daysInFeb);
            break;

        case 6:
            daysLeft = daysPerYear - (123 + daysInFeb);
            break;
        
        case 7:
            daysLeft = daysPerYear - (153 +  + daysInFeb);
            break;

        case 8:
            daysLeft = daysPerYear - (184 + daysInFeb);
            break;
        
        case 9:
            daysLeft = daysPerYear - (215 + daysInFeb);
            break;
        
        case 10:
            daysLeft = daysPerYear - (245 + daysInFeb);
            break;

        case 11:
            daysLeft = daysPerYear - (276 + daysInFeb);
            break;

        case 12:
            daysLeft = daysPerYear - (306 + daysInFeb);
            break;
    }

    document.getElementById("seconds").innerHTML = 59 - cSec;
    document.getElementById("minutes").innerHTML = 59 - cMin;;
    document.getElementById("hours").innerHTML = 23 - cHour;
    document.getElementById("days").innerHTML = daysLeft - cDay;

}, 1000);

