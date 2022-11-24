// CHANGING CASE
// Question 1
var a = prompt("Enter City Name");
a = a.toUpperCase();
console.log(a);

// Question 2
var b = prompt("Enter Your Name");
var firstletter = a.slice(0, 1);
var otherletter = a.slice(1);
b = firstletter.toUpperCase() + otherletter.toLowerCase();
console.log(b);

// Question 3
var a = ["realme 5", "samsung", "oppo", "iphone", "ipod", "nokia"]
var d = a.length
console.log(d);

// Question 5
var i = "Pakistan";
var c = i.indexOf("n")
console.log(c);

// Question 7
var f = "The quick brown fox jumps over the lazy dog.";
var index = f.indexOf("the");
console.log(index);

// Question 8
var i = "Pakistan"
var num = i.charAt(3);
console.log(num);

// Question 9
var a = "Hyderabad";
var b = "Hyder";

// for (var i = 0; i < a.length; i++) {
//     var word = a.slice(i, i + 5);
//     console.log(word);
//     if (word == b) {
//         console.log("found");
//     }
// }
for (var i = 0; i < a.length; i++) {
    var word = a.slice(i, i + 5);
    if (word == b) {
        console.log("found", word);
        console.log(i);
    

        var start = a.slice(0, i);
        var myword = "Islam";
        var otherletter = a.slice(i + 5);
        a = start + myword + otherletter;
        console.log(a);
    }
}

// Question 10
var message = "Ali and Sami are best friends. They play cricket and football together.";
var r = "and";

var text = message.replace(/and/g, "&");
console.log(text);
document.write(text);

// Question 11
var a = Math.round(3.45214);
console.log(a);
document.write("<br /> 3");

var b = Math.floor(3.45214);
console.log(b);
document.write("<br /> 3");

var c = Math.ceil(3.45214);
console.log(c);
document.write("<br /> 4");

// Question 12
var t = Math.round(-2.678);
console.log(t);
document.write("<br /> -3")

var p = Math.floor(-2.678);
console.log(p);
document.write("<br /> -3")

var l = Math.ceil(-2.678);
console.log(l);
document.write("<br /> -2")

// Question 13
var dice = Math.random();
var numb = Math.ceil(dice * 6);
console.log(numb);

document.write("<br /> 0 = HEADS , 1 = TAILS");
var toss = Math.random();
var a = Math.round(toss);
console.log(a);

// Question 14
var y = "50"
y = parseFloat(y);
console.log(y);

var t = "50kg"
t = parseFloat(t);
console.log(t);

var g = "50.2kgs"
g = parseFloat(g);
console.log(g);

var e = "50.2kilograms"
e = parseFloat(e);
console.log(e);

// Question 15
var a = "472"
a = +a
var type = typeof a;
console.log(a);
console.log(type);

// Question 16
var i = 35.36
i = i.toString();
console.log(i);
document.write("<br /> 3536");

// chapter Date
// Question 1
var dt = new Date();
console.log(dt);

// Question 2
var months = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"]
var date = new Date();
var month = date.getMonth();
console.log(months[month]);

// Question 3
var days = ["MONDAY", "TUESDAY", " WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
var dt = new Date();
var day = dt.getDay();
console.log(days[day]);
alert("today is Wed")

// Question 4
var a = ["Saturday", "Sunday"]
if (a == "Saturday", "Sunday") {
    alert("It's a Fun Day");
}

// Question 5
var mont = prompt("put today's date");
var end = 15;

if (mont <= 15) {
    console.log("First fifteen days of the month");
} else if (end >= 15) {
    console.log("Last days of the month.");
}

// Question 6
var dt4 = new Date();
dt4.setDate(30);
dt4.setFullYear(2020);
dt4.setMonth(11);
dt4.setHours(00)
dt4.setMinutes(00)
dt4.setSeconds(00);
dt4.setMilliseconds(00)
console.log(dt4);

// Question 7
var dt5 = new Date("6 - march - 2023");
alert("138 Days left for Ramadan");

// Question 8
var dt6 = new Date("1-jan-2015");
var dt7 = new Date("5-dec-2015");
var u = dt6.getSeconds()
var o = dt7.getSeconds()
var l = dt7 - dt6
console.log(l);






