alert("Reply all answers in (sentence case) For example Lion not lion ")

document.write("<h3>Q.No 1</h3> <br> <br> Result Show in alert box")
var city = prompt ("Enter Karachi")
if (city == "Karachi") {
    alert("Welcome to city of lights")
}

document.write("<br> <br>")
document.write("<h3>Q.No 2</h3> <br> <br>")
var gen = prompt ("Enter your gender")
if (gen == "Male") {
   document.write("Good Morning Sir.")
}else if (gen == "Female") {
    document.write("Good Morning Ma’am.")
}else {
    alert ("Please Enter your gender")
}

document.write("<br> <br>")
document.write("<h3>Q.No 3</h3> <br> <br>")
var road = prompt ("Enter Road Traffic Signal Light Color")
if (road == "Red") {
   document.write("Must Stop")
}else if (road == "Yellow") {
    document.write("Ready to move")
}else if (road == "Green") {
    document.write("Move now")
}else {
    alert ("Enter Road Traffic Signal Light Color")
}

document.write("<br> <br>")
document.write("<h3>Q.No 4</h3> <br> <br>")
var fuel = prompt ("Please enter your remaining fuel")
if (fuel < "0.25") {
    document.write("Please refill the fuel in your car")
}else if (fuel >= "0.25"){
    document.write("Your's car fuel is ok")
}

document.write("<br> <br>")
document.write("<h3>Q.No 5</h3> <br> <br>")
var a = 4;
if (++a === 5) {
    document.write("a = 4; <br> ++a === 5 <br> given condition for variable a is true")
}
document.write("<br> <br>")

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
if (b === 83) {
    document.write("b = 82 <br> b++ === 83 <br> given condition for variable b is true");

}
document.write("<br> <br>")

var c = 12;
if (c++ === 13) {
    alert("Condition 1 is true");
}
if (c === 13) {
    alert("Condition 2 is true");
}
if (++c < 14) {
    alert("Condition 3 is true");
}
if (c === 14) {
    alert("Condition 4 is true");
}
document.write("var c = 12; <br> if (c++ === 13){ <br> alert(Condition 1 is true);} <br> if (c === 13){ <br> alert(Condition 2 is true);} <br> if (++c < 14){ <br> alert(Condition 3 is true);} <br> if(c === 14){ <br> alert(Condition 4 is true);}<h4> Answer Show in alert box </h4>")

document.write("<br> <br>")
document.write("<h3>Q.No 6</h3><br> <br>")
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
document.write("Material Cost 20000 <br> labor cost 2000 <br> totalcost = materialCost + laborCost <br> totalCost === laborCost + materialCost <br> <h4>The answer is The cost is Equals</h4>")
}
document.write("<br> <br>")

if("car" < "cat"){
    alert("car is smaller than cat");
    }
document.write("<br> <br>")
document.write("<h3>Q.No 7</h3> <br> <br>")
document.write("<h1>Mark Sheet</h1>")
document.write("<br>")
var subject1 = prompt ("Enter First Chapter Name")
var subject2 = prompt ("Enter Secoend Chapter Name")
var subject3 = prompt ("Enter Third Chapter Name")
var total = + prompt ("Enter Total Marks")
var obtained1 = + prompt ("Enter First Chapter Obtained Marks")
var obtained2 = + prompt ("Enter Seconed Chapter Obtained Marks")
var obtained3 = + prompt ("Enter Third Chapter Obtained Marks")
var totalObtained = (obtained1+ obtained2+obtained3)
var per = (totalObtained/total * 100)
 if ( per >= "80" ){
    document.write(`<b> Subject One : </b>  ${subject1}  <br> <b> Subject Two : </b>  ${subject2}  <br>  <b> Subject Three : </b>  ${subject3} <br> <b> Total Marks : </b> ${total} <br> <b> Total Obtained Marks : </b> ${totalObtained} <br> <b> Percentage : </b> ${per} <br>` + "<b> Grade : </b> A+ <br> <b> Remarks : </b> Excellent")
} 

else if  (per  >= "70"){
    document.write(`<b> Subject One : </b>  ${subject1}  <br> <b> Subject Two : </b>  ${subject2}  <br>  <b> Subject Three : </b>  ${subject3} <br> <b> Total Marks : </b> ${total} <br> <b> Total Obtained Marks : </b> ${totalObtained} <br> <b> Percentage : </b> ${per} <br>` + "<b> Grade : </b> A <br> <b> Remarks : </b> Good")

} 

else if ( per  >= "60" ){
    document.write(`<b> Subject One : </b>  ${subject1}  <br> <b> Subject Two : </b>  ${subject2}  <br>  <b> Subject Three : </b>  ${subject3} <br> <b> Total Marks : </b> ${total} <br> <b> Total Obtained Marks : </b> ${totalObtained} <br> <b> Percentage : </b> ${per} <br>` + "<b> Grade : </b> B <br> <b> Remarks : </b> Improve Your Self ")
} 
else if ( per < "60"){
    document.write(`<b> Subject One : </b>  ${subject1}  <br> <b> Subject Two : </b>  ${subject2}  <br>  <b> Subject Three : </b>  ${subject3} <br> <b> Total Marks : </b> ${total} <br> <b> Total Obtained Marks : </b> ${totalObtained} <br> <b> Percentage : </b ${per} `+ "<br> <b> Fail sorry </b> <br> <b> Remarks : </b> Hardwork in your study" )
}
document.write("<br> <br>")
document.write("80 or 80 plus is A+ Grade <br> 70 or 70 plus is A Grade <br> 60 or 60 plus is B Grade <br> Less Than 60 Total subject or One Subject is Fail")

document.write("<br> <br>")
document.write("<h3>Q.No 8</h3> : <br> <br> Result Show in alert box")
var sercetNum = + prompt ("Guess the secret number")
if (sercetNum == "5" ){
    alert("“Bingo! Correct answer”.")
} else if ( sercetNum == "6" ){
    alert("“Close enough to the correct answer”")
}
else if ( sercetNum == "4"){
    alert("“Close enough to the correct answer”")
}else {
    alert("Wrong answer")
}

document.write("<br> <br>")
document.write("<h3>Q.No 9</h3> : <br> <br> Result Show in alert box")
var giveNum = + prompt ("Give a any number from 1 to 10")
if (giveNum == "3"){
    alert("Your number is available for divide by 3 is equely")
}else if (giveNum == "6"){
    alert("Your number is available for divide by 3 is equely")
}
else if (giveNum == "9"){
    alert("Your number is available for divide by 3 is equely")
}else {
    alert("Your number in not available for divide by 3 is equely")
}


document.write("<br> <br>")
document.write("<h3>Q.No 10</h3> : <br> <br> Result Show in alert box")
var giveNum1 = + prompt ("Give a any number from 1 to 10")
if (giveNum1 == "1"){
    alert("Your number is odd")
}
else if (giveNum1 == "2"){
    alert("Your number is even")
}
else if (giveNum1 == "3"){
    alert("Your number is odd")
}
else if (giveNum1 == "4"){
    alert("Your number is even")
}
else if (giveNum1 == "5"){
    alert("Your number is odd")
}
else if (giveNum1 == "6"){
    alert("Your number is even")
}
else if (giveNum1 == "7"){
    alert("Your number is odd")
}
else if (giveNum1 == "8"){
    alert("Your number is even")
}
else if (giveNum1 == "9"){
    alert("Your number is odd")
}
else if (giveNum1 == "10"){
    alert("Your number is even")
}
else {
    alert("Please enter only a from 1 to 10 number")
}

document.write("<br> <br>")
document.write("<h3>Q.No 11</h3> : <br> <br> Result Show in alert box")
var tep = + prompt ("Enter wether temperature")
if (tep >= "40"){
    alert("“It is too hot outside.”")
}else if (tep >= "30"){
    alert("“The Weather today is Normal”")
}
else if (tep >= "20"){
    alert("“Today’s Weather is cool”")
}
else if (tep >= "10"){
    alert("“OMG! Today’s weather is so Cool”")
} else if (tep < "10") {
    alert("“OMG! Today’s weather is so Cool”")
}
   
else alert("Please enter wether temperature")
   

document.write("<br> <br>")
document.write("<h3>Q.No 12</h3> : <br> <br> Result Show in alert box")
 var cal = + prompt ("Enter first number");
 var cal1 = + prompt ("Enter seconed number")
 var opr = prompt ("Enter Opreter * , / , + , -")
 if ( opr == "*") {
    alert(cal * cal1)
 }else if (opr == "/"){
    alert(cal / cal1)
 }
 else if (opr == "+"){
    alert(cal + cal1)
 }
 else if (opr == "-"){
    alert(cal - cal1)
 }else alert ("Please enter right options")


