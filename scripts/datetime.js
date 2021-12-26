
console.log("hello world");

//UTC Date
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

newdate = year + "/" + month + "/" + day;

document.getElementById("current_date").innerHTML = newdate;

console.log(newdate);
//UTC Time
const d = new Date();
let hour = d.getUTCHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

newtime = hour + ":" + minutes + ":" + seconds;

document.getElementById("current_time").innerHTML = newtime;
console.log(newtime);