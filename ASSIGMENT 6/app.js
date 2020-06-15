function ass(){
	alert("working");
}

function ass21_25_1(){

var firstName=prompt("Enter your first Name : ");
var lastName=prompt("Enter your last Name : ");

var fullName=firstName+" "+lastName;
alert("Welcome "+fullName);

}

function ass21_25_2(){


	var fav=prompt("Enter your favourite mobile phone model :");
	var result=fav.length;
	document.write("Your favorite phone is : "+fav+" <br>Length of string : "+result);


}

function ass21_25_3(){
var text= "Pakistani";
var result=text.indexOf("n");
document.write("String : "+text+" <br>Index of 'n': "+result);

}

function ass21_25_4(){
var text= "Hello World";
var result=text.lastIndexOf("l");
document.write("String : "+text+" <br>Last Index of 'l': "+result);

}


function ass21_25_5(){
var text= "Pakistani";
var result=text.charAt(3);

document.write("String : "+text+" <br>Character at Index 3: "+result);

}


function ass21_25_6(){

var firstName=prompt("Enter your first Name : ");
var lastName=prompt("Enter your last Name : ");

var fullName=firstName.concat(" ",lastName);
alert("Welcome "+fullName);

}



function ass21_25_7(){

var city="Hyderabad";

var result=city.replace("Hyder","Islam");

document.write("City : "+city+" <br>After replacement : "+result);

}


function ass21_25_8(){

var message = "Ali and Sami are best friends. They play cricket and football together.";

var result=message.replace(/and/g, "&");

alert(result);

}


function ass21_25_9(){

var numString="472";
var onlyNum=472;
var result=Number(numString);
var type1=typeof(numString);
var type2=typeof(onlyNum);

document.write("Value: "+result+" <br>Type: "+type1+"<br>Value: "+onlyNum+" <br>Type: "+type2);

}

function ass21_25_10(){

var userInput=prompt("type anything in Lowercase letter :");
var result=userInput.toUpperCase();
document.write("User input : "+userInput+" <br>Upper case : "+result);

}


function ass21_25_11(){

var userInput=prompt("type anything in Lowercase letter :");
var result=userInput.charAt(0).toUpperCase() + userInput.slice(1);
document.write("User input : "+userInput+" <br>Title case : "+result);

}


function ass21_25_12(){

var num=35.36;
var result=parseInt(num.toString().replace('.', ''));
document.write("Number : "+num+" <br>Result : "+result);


}


function ass21_25_13(){

var username=prompt("Enter your username : ");
if(/^[a-zA-Z0-9- _]*$/.test(username) == false){
    alert("Please enter a valid username");
    ass21_25_13();
}else{
	alert("Welcome "+username);
}

}


function ass21_25_14(){

var a =["cake", "apple pie", "cookie", "chips", "patties"];
var user_value=prompt("Welcome to ABC Bakery. What do you want to order sir/madam");
var rr=user_value.toLowerCase();
var found;
var indexOfOrder;
for(var i=0;i<a.length;i++){

    if (a[i]==rr) {
        found=a[i];
        indexOfOrder=i;
    }
}if (!found) {
    document.write("We are sorry. "+user_value+" is <b>not available</b> in our bakery");

}else{
document.write(found+" is <b>available</b> at index "+indexOfOrder+" in our bakery");    
}


}


function ass21_25_15(){

var p=prompt("Enter your password :");
if (p.length < 6) {
	document.write("Entered password : "+p+" <br>Your password must be at least 6 characters<br>Please enter a valid password");
        
    }
    else if (!isNaN(p.charAt(0))) {
    	document.write("Entered password : "+p+" <br>Your password should not start with a number<br>Please enter a valid password");
         
    }
    else if (p.match(/^[0-9a-zA-Z]+$/)) {
    	document.write("Entered password : "+p+" <br>Your password is in correct format<br>Format :/^[0-9a-zA-Z]+$/");
        
    }
    
}

function ass21_25_16(){

	var university = "University of Karachi";

	var result= university.split('');
	for(var i=0;i<result.length;i++){
		document.write(result[i]+"<br>");

	}
	
}

function ass21_25_17(){
	var user_value=prompt("Write a text");
	var result=user_value.substr(-1);
	document.write("User input : "+user_value+" <br>Last character of input : "+result);
}

function ass21_25_18(){
	var temp="The quick brown fox jumps over the lazy dog";
	var result=(temp.match(/the/gi) || []).length;
	document.write("Text : "+temp+" <br>There are "+result+" occurrences of word 'the'");
}


function ass26_30_1(){

var num=prompt("Enter a positive number for e.g: 3.123");
var round=Math.round(num);
var floor=Math.floor(num);
var ceil=Math.ceil(num);
document.write("number : "+num+"<br>round off value : "+round+"<br>floor value : "+floor+"<br>ceil value : "+ceil);



}


function ass26_30_2(){

var num=prompt("Enter a negative number for e.g: -2.673");
var round=Math.round(num);
var floor=Math.floor(num);
var ceil=Math.ceil(num);
document.write("number : "+num+"<br>round off value : "+round+"<br>floor value : "+floor+"<br>ceil value : "+ceil);



}


function ass26_30_3(){

	var value=-4;
	var result=Math.abs(value);
	document.write("The absolute value of "+value+" is "+result);
}


function ass26_30_4(){

	var result=Math.floor( Math.random() * 6 );
	document.write("Random dice value : "+result);
	var result=Math.floor( Math.random() * 6 );
	document.write("<br>Random dice value : "+result);
}



function ass26_30_5(){

	var result=Math.floor( Math.random() * 2 );
	document.write("Random coin value heads: "+result);
	var result=Math.floor( Math.random() * 2 );
	document.write("<br>Random coin value tails : "+result);
}


function ass26_30_6(){
	var rand=Math.floor(Math.random() * 100); 
	document.write("random number between 1 and 100 : "+rand);
}


function ass26_30_7(){

	var user_weight=prompt("Enter your weight in kilograms :  ");
	var result=user_weight.replace(/\D/g,'');
	document.write("The weight of user is : "+result+" kilograms");
}


function ass26_30_8(){

	var rand=Math.floor(Math.random() * 10); 
	var pro=parseInt(prompt("Enter a number between 1 to 10"));
	if (pro==rand) {
		alert("Congratulation your guess is correct");
	}else{
		alert("Try again ");
		ass26_30_8();
	}
}

function ass31_34_1(){
	var d= new Date();
	document.write(d);

}

function ass31_34_2(){
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d = new Date();
alert("The current month is " + monthNames[d.getMonth()]);


}


function ass31_34_4(){
	var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";



var n = weekday[d.getDay()];

alert(n);
}


function ass31_34_4(){
	var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";



var n = weekday[d.getDay()];

if (n=="Sat" || n=="Sun") {
alert("Its Fun day");	
}else{
	alert("Stress day");
}


}


function ass31_34_5(){

	var date= new Date();
	var onlyDate=date.getDate();
	if (onlyDate>15) {
		document.write("Last days of the month");
	}else{
		document.write("First fifteen days of the month");
	}
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  //var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes;
}

function ass31_34_6(){

	var d = new Date();
	var mili=d.getTime();

	var minutes=millisToMinutesAndSeconds(mili);
	document.write("Current date : "+d+"<br>Elapsed Time: "+mili+"<br>Elapsed Minute: "+minutes+"<br>");

}

function ass31_34_7(){
var d = new Date();
var hour= d.getHours();
	if (hour>12) {
		alert("Its PM");
	}else{
		alert("Its AM");
	}
} 


function ass31_34_8(){
var laterDate = new Date(2020,12,0); 
document.write("Later date: "+laterDate);

}

function ass31_34_9(){

var ramzan = new Date(2020,3,24);
var d = new Date(2020,5,15);

var diffTime = Math.abs(d - ramzan);
var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

document.write(diffDays+" days have passed since 1st Ramadan,2020");

}


function ass31_34_10(){
var now = new Date();
var start = new Date(2020,0,1);
var dif = now.getTime() - start.getTime();

var Seconds_from_T1_to_T2 = dif / 1000;
var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
document.write("On reference date "+now+" <br>"+Seconds_Between_Dates+" seconds had passed since begining of 2020");

}

function ass31_34_11(){
var cur = new Date();

document.write("Current date : "+cur);
var d = new Date();

d.setHours(d.getHours() - 1);
document.write("<br>1 hour ago, it was "+d);

}


function ass31_34_12(){
var cur = new Date();
var d = new Date();
d.setFullYear(d.getFullYear() - 100);
alert("Current date :"+cur+"\n100 years back, it was "+d);

}

function ass31_34_13(){

	var age=parseInt(prompt("Enter your age : "));
	var d = new Date();
	var birth=d.getFullYear()-age;
	document.write("Your age is "+age+"<br>Your birth year is "+birth);
}


function ass31_34_14(){

	var cust_name="ABC Customer";
	var month="february";
	var unit=410;
	var per_unit=16;
	var Net_amount_payable=unit*per_unit;
    var surcharge=350;
    var Gross=Net_amount_payable+surcharge;

    document.write("<h1>K-Electric Bill</h1><br>Customer Name: <b>"+cust_name+"</b><br>Month: "+month+"<br>Number of units: "+unit+"<br>Charges per unit: "+per_unit+"<br><br>Net Amount Payable (within Due Date): "+Net_amount_payable+"<br>Late payment surcharge: "+surcharge+"<br>Gross Amount Payable (after Due Date): "+Gross);

}

function ass35_38_1(){

var d = new Date();
document.write(d);

}





function ass35_38_2(firstname,lastname){

    return firstname + lastname;
}
function chap35to38ques2(){

    var fname = prompt("enter first name");
    var lname = prompt("enter last name");

    alert("Hello " + ass35_38_2(fname,lname));

}

function ass35_38_3(num1,num2){

    return num1 + num2;
}

function chap35to38ques3(){

    var num1 = +prompt("enter first num");
    var num2 = +prompt("enter second num");

    alert(ass35_38_3(num1,num2));

}

function ass35_38_4(n1,n2,operator){

    var num1 = +prompt("enter first num: ");
    n1 = num1;
    var num2 = +prompt("enter second num: ");
    n2 = num2;
    var op = prompt("enter operator");
    operator=op;
    var result= 0;

     if(operator === '+'){
        result = num1 + num2;
        return alert(result);
    }else if(op === '-'){
        result = num1 - num2;
        return alert(result);
    }else if(op === '*'){
        result = num1 * num2;
        return alert(result);
    }else if(op ==='/'){
        result = num1 / num2;
        return alert(result);
    }else if(op ==='%'){
        result = num1 % num2;
        return alert(result);
    }else{
        return "invalid operator";
    }
}


function SqrOfArg(num){
    var sqr = 0;
    sqr = num * num;
    return sqr;
}

function ass35_38_5(){
    var num = +prompt("enter number to find its square");
    alert(SqrOfArg(num));
}



function factorial(n){
  var answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}
function ass35_38_6(){
var n = 4;
answer = factorial(n)
alert("The factorial of " + n + " is " + answer);
}


function ass35_38_7(){
var val1=parseInt(prompt('Enter starting point for counting'));
var val2=parseInt(prompt('Enter ending point for counting'));
if (val1<val2) {
for(var i=val1;i<=val2;i++){

	document.write(i+"<br>");
}
}else{
	for (var i = val1; i >=val2; i--){



	document.write(i+"<br>");
}
}
}

function hyp(base,perp){

    function sqr(x){

        return x*x;
    }

    return Math.sqrt(sqr(base) +sqr(perp));
}

function ass35_38_8(){

    var base = +prompt("enter base value");
    var perpendicular = +prompt("enter perpendicular value");
    var result = hyp(base,perpendicular);
    alert(result);
}


function area(w,h){

    var A  = w * h;
    return A;
}

function ass35_38_9(){

    var width = 4;
    var height = 5;
    document.write("Argument as value : " + area(3,4) + "<br/>");
    document.write("Argument as variable : " + area(width,height));

} 

function calcCircum(r){
    pi = 3.142
    circum = 2*pi*r;
    return circum;

}

function calcArea(r){
    pi = 3.142
    area_circle = pi*r*r;
    return area_circle;

}

function check_Palindrome(str_entry){
// Change the string into lower case and remove  all non-alphanumeric characters
   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var ccount = 0;
// Check whether the string is empty or not
	if(cstr==="") {
		console.log("Nothing found!");
		return false;
	}
// Check if the length of the string is even or odd 
	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	} else {
// If the length of the string is 1 then it becomes a palindrome
		if (cstr.length === 1) {
			console.log("Entry is a palindrome.");
			return true;
		} else {
// If the length of the string is odd ignore middle character
			ccount = (cstr.length - 1) / 2;
		}
	}
// Loop through to check the first character to the last character and then move next
	for (var x = 0; x < ccount; x++) {
// Compare characters and drop them if they do not match 
		if (cstr[x] != cstr.slice(-1-x)[0]) {
			console.log("Entry is not a palindrome.");
			return false;
		}
	}
	console.log("The entry is a palindrome.");
	return true;
}
function ass35_38_10(){
check_Palindrome('nurses run');
check_Palindrome('fox');
}



function ass35_38_11(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }


    return str.join(" ");
    
}
function abc(){
alert(ass35_38_11( 'the quick brown fox'));
}

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
function ass35_38_12(){
alert(find_longest_word('Web Development Tutorial'));
}

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
function ass35_38_13(){
alert("Number of occurrences of o is "+char_count('w3resource.com', 'o'));
}

function ass35_38_14(){

    radius = +prompt("enter radius");
    document.write("The circumference of circle is : " + calcCircum(radius) + "<br/>");
    document.write("The area of circle is : " + calcArea(radius));

}
