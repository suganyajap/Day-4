//Task 1: Simple Programs todo for variables
//1.Declare four variables without assigning values and print them in console
var a;
var b;
var c;
var d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);



/*2.How to get value of the variable myvar as output
var myvar= 1;
console.log("myvar");*/

var myvar= 1;
console.log(myvar);


//3.Declare variables to store your first name, last name, marital status, country and age in multiple lines

var firstname;
var lastname;
var maritalStatus;
var country;
var age;





//4. Declare variables to store your first name, last name, marital status, country and age in a single line


var firstname,lastname,maritalStatus,country, age;





//5. Declare variables and assign string, boolean, undefined and null data types

var string="guvi";//string
var boolean=true;//boolean
var y;    //undefined
var x=null;//null




/*6. Convert the string to integer
parseInt()
Number()
Plus sign(+)*/

var a=10;
var b="10";
console.log(a+parseInt(b));//parseInt()
console.log(a+Number(b));//Number()
console.log(a+ +b);//plus sign(+)





//7. Write 6 statement which provide truthy & falsey values.

//Truthy values(true,string,number)
//1.True
var value=true;
if(value){
  console.log("true");//this will be printed
}
else
  {
    console.log("false");
  }


  //2.String
  var value="hi";
if(value){
  console.log("true");//this will be printed
}
else
  {
    console.log("false");
  }


  //3.
  var value=10;
if(value){
  console.log("true");
}
else
  {
    console.log("false");
  }


  //falsy values(undefined,null,0,-0,0n,NaN,document.all,false,"",'',``)
  //1.

  var value=undefined;
if(value){
  console.log("true");
}
else
  {
    console.log("false");//this will be printed
  }

  
  //2.

  var value=null;
if(value){
  console.log("true");
}
else
  {
    console.log("false");//this will be printed
  }



  //3.

  var value=0;
if(value){
  console.log("true");
}
else
  {
    console.log("false");//this will be printed
  }






  //Task 2: Simple Programs todo for Operators

  //1.Square of a number

  var a=10;
  console.log("Square of a number is = ", a*a);




  //2.Swapping 2 numbers

  var a=10;
var b=20;
var temp;

console.log("a value before swapping",a);
console.log("b value before swapping",b);

temp=a;
a=b;
b=temp;

console.log("a value after swapping",a);
console.log("b value after swapping",b);





//3.Addition of 3 numbers


var a=10;
var b=20;
var c=30;

console.log("addition of 3 numbers",a+b+c);







//4.Celsius to Fahrenheit conversion

var celcius=30;
var fahrenheit=(celcius*9/5)+32;
console.log(fahrenheit);



//5.Meter to miles



var meters=2;
// 1 meter=0.000621 miles
var miles=meters*0.000621;
console.log(miles);







//6.Pounds to kg

var pounds=2;
//1 pound=0.453592kg
var kg=pounds*0.453592;
console.log(kg);




//7.Calculate Batting Average

var runsScored=10000;
var numOfInnings=250;
var notOut=50;
var battingAvg= runsScored/(numOfInnings-notOut);
console.log(battingAvg);








//8.Calculate five test scores and print their average


var test1=50;
var test2=100;
var test3=75;
var test4=85;
var test5=60;

var avg=(test1+test2+test3+test4+test5)/5;
console.log(avg);








//9.Power of any number x ^ y.

var a=5;
var b=6;
console.log("a power b is",Math.pow(a,b));





//10.Calculate Simple Interest


var principle=10000;
var noOfYears=5;
var rate=5;
var SI=(principle*noOfYears*rate)/100;
console.log(SI);








//11.Calculate area of an equilateral triangle

var a=5;
var areaOfEquiTriangle=(Math.sqrt(3)/4)*a*a;
console.log(areaOfEquiTriangle);






//12.Area Of Isosceles Triangle

var base=5;
var height=5;
var area=base*height/2;
console.log("Area Of Isosceles Triangle",area);







//13.Volume Of Sphere

var radius=5;
var volume=(4/3*22/7)*Math.pow(radius,3);
console.log("Volume Of Sphere",volume);







//14.Volume Of Prism

var baseArea=3;
var height=7;
var volume=baseArea*height;
console.log("Volume of prism",volume);







//15.Find area of a triangle

var base=3;
var height=7;
var area=1/2*base*height;
console.log("Area of triangle",area);




//16.Give the Actual cost and Sold cost, Calculate Discount Of Product


var price=500;
var soldPrice=450;
var discount=price-soldPrice;
console.log(`Discount is ${discount}`);





//17.Given their radius of a circle and find its diameter, circumference and area.

//area of circle=PI*r*r
//corcumference=2*PI*r
//Diameter=2*r

var radius=5;
var diameter=2*radius;
var circumference=2*22/7*radius;
var area=22/7*radius*radius;
console.log(`Diameter of circle is ${diameter}`);
console.log(`Circumference of circle is ${circumference}`);
console.log(`area of circle is ${area}`);




//18.Given two numbers and perform all arithmetic operations


var a=50;
var b=20;

console.log(`addition of 2 number = ${a+b}`);
console.log(`sutraction of 2 number = ${a-b}`);
console.log(`multiplication of 2 number = ${a*b}`);
console.log(`division of 2 number = ${a/b}`);
console.log(`modulus of 2 number = ${a%b}`);






/*19.Display the asterisk pattern as shown below(No loop needed):
*****
*****
*****
*****
******/




console.log(`*****`);
console.log(`*****`);
console.log(`*****`);
console.log(`*****`);
console.log(`*****`);



//20.Calculate electricity bill?

var wattsPerHour=100;
var perdayWatt=24*100;
var perMonthWatt=30*perdayWatt;
//1000 watt is 1 unit
var unit=perMonthWatt/1000;
var costPerUnit=10;
console.log(`total unit = ${unit}`);
console.log(`total cost = ${unit*costPerUnit}`);






//Task 3: Simple Programs todo for Condition , Looping and Arrays
/*1.Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    for(var i=1;i<=5;i++)
      {
        for(var j=1;j<=i;j++)
          {
            document.write("# ")
          }
        document.write("<br> ")
      }
  </script>
</body>
</html>






/*2. Iterate through the string array and print it contents


var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"]*/


var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"];
for(var i=0;i<=strArray.length;i++)
  {
    console.log(`${strArray[i]}`);
  }








 /*</meta> Arrays:
 1. var myarray=[11,22,33,44,55]
  write a code to count the elements in the array.Don’t use length property*/


  var myarray=[11,22,33,44,55];
var count=0;
for(var i=0;i<myarray.length;i++)
  {
    count++;
  }
console.log(`No of elements = ${count}`);




//2.Declare an empty array;

let foods=[];



//3.Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

let foods=["idli","oothappam","idiyappam","biriyani","dosai",
           "pulav","venpongal","ravadosai","liver","podidosai",
           "parotta","kothuparotta","pongal","curdrice","vegbiriyani",
           "omlet","adai","paya","kabab","griledchicken"];







//4.How can you find your fifth favorite food?

let foods=["idli","oothappam","idiyappam","biriyani","dosai",
           "pulav","venpongal","ravadosai","liver","podidosai",
           "parotta","kothuparotta","pongal","curdrice","vegbiriyani",
           "omlet","adai","paya","kabab","griledchicken"];

console.log(foods[4]);







//5.Find the length of your foods array

let foods=["idli","oothappam","idiyappam","biriyani","dosai",
           "pulav","venpongal","ravadosai","liver","podidosai",
           "parotta","kothuparotta","pongal","curdrice","vegbiriyani",
           "omlet","adai","paya","kabab","griledchicken"];


console.log(`length is ${foods.length}`);






/*6.Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = [
    “Mari”,
    “MaryJane”,
    “CaptianAmerica”,
    “Munnabai”,
    “Jeff”,
    “AAK chandran”
    ];*/



    let friends = [
        "Mari",
        "MaryJane",
        "CaptianAmerica",
        "Munnabai",
        "Jeff",
        "AAK chandran"
        ];
        function dataHandling(input){
        for (var i = 0; i < input.length; i++) {
          
          input[0]="munnabai";
        }
          return input;
        }
        console.log(dataHandling(friends));




        
       
       
        /*   7.Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
const friends = [
    “Mari”,
    “MaryJane”,
    “CaptianAmerica”,
    “Munnabai”,
    “Jeff”,
    “AAK chandran”
    ];*/



    let friends = [
        "Mari",
        "MaryJane",
        "CaptianAmerica",
        "Munnabai",
        "Jeff",
        "AAK chandran"
        ];
        function dataHandling(input){
        for (var i = 0; i<friends.length; i++) {
          if(input[i]=="CaptianAmerica")
            break;
           else{
             console.log(input[i]);
           } 
          
        }
          
        }
        dataHandling(friends);











//8.Find the person is ur friend or not.


        let friends = [
            "Mari",
            "MaryJane",
            "CaptianAmerica",
            "Munnabai",
            "Jeff",
            "AAK chandran"
            ];
            function dataHandling(input,name){
            for (var i = 0; i<friends.length; i++) {
              if(input[i]==name)
                {
                  console.log(`${name} is your friend`);
                }
                
               else{
                console.log(`${name} is not your friend`);
               } 
              
            }
              
            }
            let found = dataHandling(friends,"siva");
            console.log(found);
            



            
            
            
            
            
            
//9.We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
            
            
            
            
let friends1 = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

let friends2=["Gabbar","Rajinikanth",
              "Mass","Spiderman",
              "Jeff","ET"];
friends=[...friends1,...friends2];
console.log(friends);




//1.Get the first item, the middle item and the last item of the array


let friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran"
  ];
  //finding the length of the array
  var length=friends.length;
  console.log(friends[0],friends[length/2],
    friends[length-1]);







    //2. Add your name to the end of the friends array, and add another name to beginning.



    let friends = [
      "Mari",
      "MaryJane",
      "CaptianAmerica",
      "Munnabai",
      "Jeff",
      "AAK chandran"
      ];
      //adding my name at the end
      friends.push("suganya");
      //adding element at front
      friends.splice(0,0,"siva");
      console.log(friends);





      //4. Concat all the names the friends array and return as comma “,” seperated string

      <!DOCTYPE html>
<html lang="en">

  <title>Document</title>
</head>
<body>
  <p id="demo"></p>
  <script>
   let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

    document.querySelector("#demo").innerHTML=friends.join(",");
 </script>
</body>
</html>




//object literal
//1.
//1.Add a new key value pair to myobject
key : ten
value : ten

myobject = {1:"one","11":1,"name":"arun"};
myobject.ten="ten";
console.log(myobject);




/*2.Write out an object literal to represent the data below.
Guvi, Geek, 6, IIT-M RP,Chennai.*/

var obj={firstname:"Guvi",lastname:"Geek",
address:["6","IIT-M RP","chennai"],}













