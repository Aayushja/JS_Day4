
                                         //Level-1

// Q.1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types. 

var  firstName = 'Aayush'
console.log(typeof(firstName)) // string 

var lastName = 'Jain'
console.log(typeof(lastName)) // string 

var country = 'India'
console.log(typeof(country)) // string 

var city = 'Indore'
console.log(typeof(city)) // string 

var age = 25
console.log(typeof(age)) // number

var isMarried = false
console.log(typeof(isMarried)) // Boolean

var year = 1996
console.log(typeof(year)) // Number




//Q.2 Check if type of '10' is equal to 10 

console.log(typeof('10')==10) //false





//Q.3  Check if parseInt('9.8') is equal to 10 

console.log(parseInt('9.8')==10) //false




//Q.4 Write three JavaScript statements which provide truthy value. 

let x;
x = 1;   // x is a number
let y;
y = '1'; // y is a string
let z;
z = [1]; // z is an array

// all true
console.log(x == y); // 1 == '1'
console.log(x == z); // 1 == [1]
console.log(y == z); // '1' == [1]




// Q.5 Write three JavaScript statements which provide falsy value. 

let a;
a = 1;   // a is a number
let b;
b = '1'; // b is a string
let c;
c = [1]; // c is an array

// all false
console.log(a === b); // 1 === '1'
console.log(a === c); // 1 === [1]
console.log(b === c); // '1' === [1]





// Q.6  Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log() 

console.log(4 > 3) //true
console.log( 4 >= 3) //true
console.log( 4 < 3) //false
console.log(4 <= 3) //false
console.log(4 == 4) //true
console.log(4 === 4) //true
console.log(4 != 4) //false
console.log(4 !== 4) //false
console.log(4 != '4') //false
console.log(4 == '4') //true
console.log(4 === '4' ) //false




//Q.7 Find the length of python and jargon and make a falsy comparison statement. 

let str = "python";
console.log(str.length)

let value = "jargon";
console.log(value.length)

console.log(str.length != value.length) //false




// Q.8 Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log() 

console.log(4 > 3 && 10 < 12) //True
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12)//True
console.log(4 > 3 || 10 > 12)//True
console.log(!(4 > 3))//false
console.log(!(4 < 3))//True
console.log(!(false))//True
console.log(!(4 > 3 && 10 < 12))//false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4') )//True

//There is no 'on' in both dragon and python

let lang = 'dragon' 
console.log(lang.includes('on')) //true

let course = 'python' 
console.log(lang.includes('on')) //true

// Ask This ????????????????????????????




                                    //Exercises: Level 2 

/* Q.1  Write a script that prompt the user to enter base and height of the triangle and calculate an area of a 
triangle (area = 0.5 x b x h). 
o Enter base: 20 
o Enter height: 10 
o The area of the triangle is 50 */

/*
var base=prompt("enter first value","20");
var height=prompt("enter second value","10");
console.log(`The area from ${base} and ${height} is ${0.5*base*height}`)
*/




/* Q.2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and calculate the 
parameter of triangle (parameter = a + b + c) 
o Enter side a: 5 
o Enter side b: 4 
o Enter side c: 3 
o The parameter of the triangle is 12*/

/*
var sda = promt ("enter side a value","5")
var sdb = promt ("enter side b value","4")
var sdc = promt ("enter side c value","3")
console.log(`The parameter of the triangle ${sda} and ${sdb} and ${sdc} is ${ sda + sdb + sdc }`) 
*/ 
// /  error: promt not define





/* Q.3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the 
parameter of rectangle (parameter = 2 x (length + width)) */

//Area of triangle
/*
var lenght=prompt("enter length value","100");
var width=prompt("enter width value","200");
console.log("area of rectangle "+length+" and "+width+" is =>"+(length*width)+"<br>") */

//Taking length 0 always


//parameter of rectangle
/*
var lenght=prompt("enter length value","100");
var width=prompt("enter width value","200");
console.log("parameter of rectangle "+length+" and "+width+" is =>"+(2*(length+width))+"<br>") */

//Taking length 0 always





/* Q.4 get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a 
circle(c = 2 x pi x r) where pi = 3.14.*/

//area of a circle
/*
var r=prompt("enter radius value","10");
console.log(`The area of circle is ${3.14*r*r}`) */

//circumference of circle
/*
var r=prompt("enter radius value","10");
console.log(`The circumference of circle is ${2*3.14*r}`) */





/* - Calculate the slope, x-intercept and y-intercept of y = 2x -2 
- Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10) 
- Compare the slope of above two questions. 
- Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0. */





/* Q. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person? 
o Enter hours: 40 
o Enter rate per hour: 28 
o Your weekly earning is 1120 
 */

/*
var ph=prompt("enter hour value","20");
var rph=prompt("enter rate per hour value","10");
console.log(`Your weekly earning is ${7*ph*rph}`) */





// Q. If the length of your name is greater than 7 say, your name is long else say your name is short. 

/*
const sentence = prompt("Enter your name: ");
len = sentence.length;
// check if name is greater than 7
if (len > 7) {
  console.log("The name is Long");
}
// if name is not greater than 7
else {
  console.log("Your name is short");
}

*/




/* Q. Compare your first name length and your family name length and you should get this output. 
o let firstName = 'Murtaza' 
o let lastName = 'Lightwala' 
o Your family name, Lightwala is longer than your first name, Murtaza */
/*
const sentence1 = prompt("Enter your name: ");
len1 = sentence1.length;

const sentence2 = prompt("Enter your family name: ");
len2 = sentence2.length;

if (len2 > len1) {
    console.log(" Your family name, Lightwala is longer than your first name, Murtaza ");
  }
  // if name is not greater than 7
  else {
    console.log("Your family name is short");
  } */