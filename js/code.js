
// switch statement in javascript



//if input = 1, "y","yes" output = continue...
//if input = 0, "n", "no" output = End...


let input;

input = "yes";
/*if(input === 1){
    document.write("continue...");
}
else if(input === "y"){
    document.write("continue...");
}
else if(input === "yes"){
    document.write === ("continue");
}
else if (input === 0){
    document.write("End..");
}
else if (input === "n"){
    document.write("End..");
}
else if (input === "no"){
    document.write("End..,");
}
else{
    document.write("wrong input");
}
*/



//=== comparisioan

switch(input){
    case 1: //if(input === 1)
        document.write("continue...");
    break;
case "y": //(input === "y")
      document.write("continue...");
      break;
    document.write("continue...");
    break;
case 0:
      document.write("End...");
      break;
case "n":
    document.write("End...");
    break;
case "no":
    document.write("End..");
    break;
default :
      document.write("wrong input");

}


//LOOP IN JAVASCRIPT//

//whileloop

let counter = 1;

while(counter <= 10){
document.write('TechGun');
  counter++;
}

// let counter = 1;
 let sum =0;
while(counter <=200){
   if(counter % 2 == 0){
      // sum = sum + counter;

   }
  counter++;
 

 document.write(sum);



 //do while loop

 let counter = 1;

 do{
    document.write('TechGun');
    counter++;
 }while(counter >= 10);

 //for loop
 for( let counter = 1;counter <= 10;counter++ ){
    document.write('TechGun');  
 }

 //NESTED LOOP in js
 

for(let counter=1; counter<=10;counter++){
    
    document.write(counter);
    document.write('<br>');
    
     for(let counter2 = 1;counter2 < 3; counter2++ ){
          document.write('techgun');
          document.write('<br>');
    
     }
    }

    //prompt//
    
// function to interact with the user: alert,prompt and confirm.

/*
1. alert() - shows a message.
2. prompt() - shows a message, input text. it returns the text on ok or, if cancel button or Esc is clicked, null.

3. confirm() - shows a message, confirm with "ok" or "cancel".it returns true for ok and false for cancel/Esc.

*/

//Note: All these pause script execution and don't allow the visitor to interact with the rest of the page until the window has been dismissed.


let age = prompt('Enter your age',20);
if(age != null){
     document.write('your age is ${age}');
}
else{
     document.write('Age field was Blank');
}


//response//
let response = confirm('Are you sure,you want to Delete?');
if (response){
     document.write('deleted');
     }else{
          document.write('Not Deleted');
     }

     //datatype//
     let response = confirm('Are you sure,you want to Delete?');
if (response){
     document.write('deleted');
     }else{
          document.write('Not Deleted');
     }
     



     //TYPE CONVERSION
     let type = "hello";
console.log(typeof type); //old


let NewType = Number(type);
console.log(NewType);
console.log(typeof NewType);


//
string manipulation

//let str = "vishwajeet";

//let greet = `Hi ${str}`;

//console.log(greet);

//let str = "vishwajeet \n kumar";

//console.log(str);

//backslace is a scape character

//let str = "vishwajeet kumar";

//console.log(str[3]);

//adding os strings//

//let str = "vishwajeet";

//let str2 = "kumar";

//console.log(str +" " + str2);

//let str = "vishwajeet" ;

//if ("vishwajeet" == str){
     //console.log("Equal");
//}else{
//console.log("Not Equal");

//}

 concatinate of  string

 //let str = "vishwajeet";

 //let str2 = "kumar";
 
// let str3 = str.concat(" ",str2);
 
// console.log(str3);

position of string
//subscript position
let str = "This is javascript Tutorial. It is a good tutorial.";

let position= str.indexOf('is');

console.log(position);


Trim function in JSON
//trim function
//let str = " This is javascript Tutorial. It is a good tutorial. ";

//let trimedstr = str.trim();

//console.log(str);
//console.log(trimedstr);

upper case
//upper case in trim function

let str = " This is javascript Tutorial. It is a good tutorial. ";

let trimedstr = str.toUpperCase();

console.log(str);

/*concatination of multiple array

let book = ["maths","physics","bio", "computer science"];

let book2 = ["hindi","urdu"];
let book3 = ["punjabi","english"];

let NewBook = book.concat(book2,book3);

console.log(NewBook);
*/

LOWER case
//upper case in trim function

let str = " This is javascript Tutorial. It is a good tutorial. ";

let trimedstr = str.toUpperCase();

console.log(str);
console.log(trimedstr);


//using include function in javascript//
let str = " This is javascript Tutorial. It is a good tutorial. ";

let trimedstr = str.includes('html');

console.log(str);
console.log(trimedstr);


ARRAY IN JAVACRIPT



//ARRAY

//let book1 = "maths";
//let book2 = "science";
//let book3 = "physics";
//let book4 = "chemistry";


//book = "English";
//console.log(book3);

let book = ["maths","science","Bio","computer science"];

//let asset = [1, 3,"maths",100];

//let book = new Array("maths","science","Bio","computer science");

book[1] = "English";
//console.log(book);


//operation on array:
//operation on array

//let book = ["maths","science","Bio","computer science"];

//console.log(book.length);

//removing element in array
//let book = ["maths","science","Bio","computer science"];

//book.pop();
//book.pop();
//l
//console.log(book);

//using shift 

//et book = ["maths","science","Bio","computer science"];

//book.shift();
//book.shift();
//console.log(book);

//using splice
//let book = ["maths","science","Bio","computer science"];

//book.splice(1, 2);
//console.log(book);

//EMPTY OF ARRAY ELEMENT
//let book = ["maths","science","Bio","computer science"];

//book = [];

//console.log(book);

//one more ways to empty of an array
//book.length = 0;


//TO KNOW THE BIO Function

//let book = ["maths","science","Bio","computer science"];


//let position = book.indexOf("Bio");
//console.log(position);

//let book = ["maths","science","Bio","computer science"];

//let book = "math";

//console.log(Array.isArray(book));

//SPLITTING OF ARRAY
//let book = ["maths","science","Bio","computer science"];
//let text = "This is a random text";
//let wordarray = book.join('-');

//console.log(wordarray);

//array of array
/*concatination of multiple array

let book = ["maths","physics","bio", "computer science"];

let book2 = ["hindi","urdu"];
let book3 = ["punjabi","english"];

let NewBook = book.concat(book2,book3);

console.log(NewBook);
*/

//multidimensional array
//array of array
//let book = ["maths","physics","bio", "computer science"];

//let bookwithpages = [
    //["math",["300","500"]],
   // ["physics","500"],
    //["bio","400"]
//];

//let fetch = bookwithpages [0][1][1];

//console.log(fetch);

//length
//let book = ["maths","physics","bio","computer science"];

//let booklength = book.length;

//for(i = 0; i< booklength; i++){
   // console.log(`Element &{i} is ${book[i]} \n`);
//}
// different ways to write
//let book = ["maths","physics","bio","computer science"];

//let booklength = book.length;

//for(i = 0; i< booklength; i++){
 //   console.log(`Element &{i} is ${book[i]} \n`);
//}


//book.forEach(myfu);

//function myfu(value){
   // console.log(value);
//}



//function


function MulTable(){
    for(i=1; i<=10; i++){
        document.write(`2* &{i} = &{2*i}`);
        document.write("<br><br>");
    }
    
}

MulTable();

document.write("Hello");
MulTable();


// parameter and argument
//parameter 

function add(num1,num2){
    document.write(num1 + num2);
}
add(5, 7);

//argument
function add(){
    console.log(arguments[0]);

}

add(5,7,8);

//the argument object
function add(){
    if(arguments.length == 0){
        console.log("No parameter passed!");
    }else{
        let sum = 0;//12
        for(let i = 0; i< arguments.length;i++){
            sum = sum + arguments[i];
        }
        console.log(sum);
      }
    }

    let addition = add;
    addition(5, 2);
    add(5,7,10);

    //Return in Function
function add(a, b){
    console.log(a+b);
}
add(5 ,6);

function compare(a,b){
    if(a > b){
        return 1;
    }
    else if(b > a){
        return -1;
    }else{
        return 0;
    }
}

let c = compare(6,6);
document.write(c);   


//global variable vs local variabe
let car = "Audi"; //Global variable

function add(){

    let result = 33; //local variable

    console.log(result);
}

function sub(){
    let result = 50;
    console.log(result);
}

add();

sub();


//Anonymous Function 

//let show = function(){
  //  console.log("hello world!");
//};

//show();


setTimeout(function  (){
    console.log("hello!");
},3000);


//Immediately invoked function

let msg = "Hello my script";

function show (){
    console.log(msg);
}

show();


Thirdparty.JS
(function(){

    let msg = "hello third party";
    
    function greet(){
        console.log(msg);
    
    }
    greet();
    })();

    //Immediately invoked function

let msg = "Hello my script";

function show (){
    console.log(msg);
}

show();


//object  properties

 //array notation
 let person = {
    firstName: 'manish mishra',
    lastName: 'kumar'

 };
    person.age = 25;
 

 for(let key in person){
    console.log(key +": "+person[key]);
 }

 //methods in objects
let person = {
    firstName: 'manish mishra',
    lastName: 'kumar' ,
      sayHello: function () {
         console.log("Hello !")
      }
 };
    person.age = 25;
 

 //person.sayHello = function () {
       //console.log("Hello !");
 //}
 //function greet (){
   // console.log("hello!");
 //}
 
// person.sayHello = greet;

 person.sayHello();

 //This keywords
let person = {
    firstName: 'manish mishra',
    lastName: 'kumar' ,
      sayHello: function () {
         console.log("Hello ! i have a "+car.brand +"car" );
      }
    };
    let car = {
        brand: 'Tata',
        model: 'safari'
    }

    person.sayHello();


    //Maths object
//var x =Math.round(4.2);
//console.log(x);
//var x =Math.ceil(4.9);
//console.log(x);
//var x =Math.floor(4.2);
//console.log(x);

//remove point
//var x =Math.trunc(9.2);
//console.log(x);

//using power
//var x =Math.pow(4,2);
//console.log(x);

//sqRE ROOT
//var x = Math.sqrt(100);
//console.log(x);

//MAXIMUM AND MINIMUM
var x = Math.min(4,100,-3,88,102);
console.log(x);
var x = Math.max(10,34,88,46,72);
console.log(x);

//RANDOM NUMBER
 //let x = Math.floor(Math.random() * 11) + 1; //0 - 10

 function getRandom(min,max){
    let x = math.floor(Math.random()*(max-min+1)) + min;
    return x;
 }

console.log(getRandom(10,20));


//Date object
let x = new Date("may 19,2024 11:12:33");
x.setMonth(2);
x.setFullYear(2025);
console.log(x);


//Date object
let x = new Date("may 19,2024 11:12:33");
 x.setDate (x.getDate() +50);
console.log(x);

//Date object
let x = new Date("may 19,2024 11:12:33");
let y = new Date("may 19,2024 11:12:33");
 x.setDate (x.getDate() +50);
console.log(x);
console.log(y);


//compare date

let x = new Date("may 19,2027 11:12:33");
let y = new Date();
 
if (y > x){
    console.log("x is past date");
    }
    else if(x > y) {
        console.log("x is future date");
    }
    else{
        console.log("x is same date");
    }



    //new keyword
//var person = {
    //name: "manish mishra",
    //age:20,
//}


//new keyword
//var person = {
    //name: "manish mishra",
    //age:20,
//}
var person = new Object();
person.name = "manish mishra";
console.log(person.name);



//GETTERS AND SETTERS


//var person = {
   //name:"manish mishra",
   //age:20,
//}

var person = {
    name:"manish mishra",
    age:25,
    getname:function(){
       return this.name.toUpperCase();
    }
 };
 
 console.log(person.getname());



 //change in gater
 var person = {
    name:"manish mishra",
    age:25,
   //getname:function(){
     //  return this.name.toUpperCase();
  //  }
  get getname(){
      return this.name.toUpperCase();
      }
 };
 
 console.log(person.getname());


//setter change
var person = {
    name:"manish",
    age:20,
   //getname:function(){
     //  return this.name.toUpperCase();
  //  }
  set setname(n){
      this.name = n.toUpperCase();
      }
 };
  person.setname = "ajit";
 console.log(person);



 //object constructor function
//function Student1={
   // this.firstName = "manish";
    //this.lastName = "mishra";

   //age:20,
   //class: 5

//}

function Student(first,last,age,cls){
    this.firstName = first;
    this.lastName = last;
 this.age = age;
 this.class = cls;
   
 
 }
 
 var student1 =new Student ("manish","kumar",25,5);
 var student2 =new Student ("raunak","kumar",21,9);
 var student3 =new Student ("abhishek","kumar",28,7);
 
 console.log(student1);

 //object constructor function
//function Student1={
   // this.firstName = "manish";
    //this.lastName = "mishra";

   //age:20,
   //class: 5

//}

function Student(first,last,age,cls){
    this.firstName = first;
    this.lastName = last;
 this.age = age;
 this.class = cls;
   
 
 }
 
 var student1 =new Student ("manish","kumar",25,5);
 
 student1.nationality = "indian";
 
 student1.name = function(){
    return this.firstName +" "+ this.lastName;
 }
 
 console.log(student1.name);

 //OBJECTIVE PROTOTYPE 
function Student(First,last,age,cls){
    this.firstName = first;
    this.firstName = last;
    this.age = age;
    this.class = cls;
 
 }
 
 student1.prototype.nationality = "Indian";
 
 Student.prototype.name = function(){
      return this.firstName + " " + this.lastName;
 }



 //nested object

var user = {
    id: 101,
    email: "manish@gmail.com",
    personalInfo: {
         name:"abc",
         address:{
               street:  "dsgsgs",
               city: "Delhi",
               country: "India",
         }
    }
 };
 
 console.log(user.personalInfo.address.country);

 //Hosting:pull declaration ko upper uthana 


hello();


function hello(){
   console.log("Hello world");

}



//select Element by Id
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li>list 1</li>
        <li id="first">
            list 2
        </li>
        <li>list 3</li>
    </ul>
   <script>
    let elm = document.getElementById("first");
    elm.innerHTML = "<p> hello </p>";
   </script>
</body>
</html>

//select Element by class
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li class="cl">list 1</li>
        <li id="first">
            list 2
        </li>
        <li class="cl">list 3</li>
    </ul>
   <script>
    let elm = document.getElementByClassName("cl");
     for(let i =0; i < elm.length; i++){
        elm[i],innerHTML = "<p> hello </p>";

     }
     </script>
</body>
</html>


//select Element by tag name
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li class="cl">list 1</li>
        <li id="first">
            list 2
        </li>
        <li class="cl">list 3</li>
    </ul>
    <h2>heading1</h2>
    <div id="div1"> <p>paragraph1</p>
        <h2>heading2</h2>
        <p>paragraph2</p>
        <h2>heading3</h2>
        <p>paragraph3</p>
    </div>
   
   <script>
    let div1 = document.getElementById("id");
    let elm = document.getElementByTagName("h2");
     for(let i =0; i < elm.length; i++){
        elm[i],innerHTML = " hello ";

     }
     </script>
</body>
</html>



//inner html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="intro">
        <p>Hello this is a p tag</p>
    </div>
    
</body>
<script>
    let elm = document.queryElementId("intro");
    elm.innerHTmL = "<h1> this is a heading </h>";
    
    </script>
</html>


// ATTRIBUTE
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btn" name="form1">send</button>
    <script>
        let btn = document.getElementById("btn");
        let val = btn.hasAttribute("class");
        console.log(val);
    </script>
    
</body>
</html>


//inline style
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btn" name="form1" style="color:blue;">send</button>
    <script>
        let btn = document.getElementById("btn");
        btn.style.cssText +="background:red;border:1px solid green;";
    </script>
    
</body>
</html>



//inline style
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style >
        #btn{
            background-color: red;
            color:white;
        };
    </style>
</head>
<body>
    <button id="btn" name="form1" style="color:blue" >send</button>
    <script>
        let btn = document.getElementById("btn");
        let css= getComputedStyle(btn);
        console.log(css.color);
        
    </script>
    
</body>
</html>




//CSS Class


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style >
        .color{
            background-color:grey;
            color:rgb(155, 4, 9);


        }
        .dim{
            border:1px solid red;
            padding:100px;
        }
    </style>
</head>
<body>
   <div id="box" class="color  ">
    <p>This is manish text!</p>
   </div>

   <script>
   let box = document.getElementById("box");
  box.classList.toggle("dim");
   </script>
        
   
    
</body>
</html>

//height and width of an element


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style >
        .color{
            background-color:grey;
            color:rgb(155, 4, 9);


        }
        .dim{
            border:1px solid red;
            padding:100px;
        }
    </style>
</head>
<body>
   <div id="box" class="color dim ">
    <p>This is manish text!</p>
   </div>

   <script>
   let box = document.getElementById("box");
   let width =box.clientWidth;
   let height = box.clientHeight;

    console.log(width);
    console.log(height);


   </script>
        
   
    
</body>
</html>



//DOM
inline click


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btn" > Click Me !</button>
    <script>
        function btnClick(){
            alert("button was clicked !");
        }
        let btn = document.getElementById("btn");
        btn.addEventListener('click',btnClick);
    </script>

    
</body>
</html>



//mouse Event

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btn" > Click Me !</button>
    <script>
        
        let btn = document.getElementById("btn");
        btn.addEventListener('click',function(){
            console.log("btn was clicked !");
        });

        btn.addEventListener('mouseover',function(){
            console.log("mouse over is activated");
        });
        btn.addEventListener('mouseout',function(){
            console.log("mouse out is activated");
        });
    </script>

    
</body>
</html>


//Remove event listener

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btn" > Click Me !</button>
    <script>
        let btn = document.getElementById("btn");
        function click1(){
            console.log("click1 manish mishra");
        }
        function click2(){
            console.log("click2 apna ghar");
        }
        btn.addEventListener('click',click1);
        btn.addEventListener('click', click2);

        btn.removeEventListener('click',click2)
        
    </script>

    
</body>
</html>



//page load

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btn" > Click Me !</button>
    <script>
        let btn = document.getElementById("btn");
        function click1(){
            console.log("click1 manish mishra");
        }
        function click2(){
            console.log("click2 apna ghar");
        }
        btn.addEventListener('click',click1);
        btn.addEventListener('click', click2);

        btn.removeEventListener('click',click2)
        
    </script>

    
</body>
</html>



//page loadnevent i javascript

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img id="image1" width="250" src="whatsapp background.jpg">;
    <script>
        window.addEventListener('DOMContentLoaded',function(){
              console.log("DOM tree created");
        });
        let img = document.getElementById("images1");
        window.addEventListener('load',function(){
            console.log("Full loaded");
        });
    </script>
</body>
</html>

//mouse addEventListener
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box{
            height: 100px;
            width:100px;
            background-color:rgb(255, 0, 191) ;
        }
    </style>
</head>
<body>

    <div id="box" onmousedown="fun()">

    </div>
  
    
<script>
    function fun(){
        alert("double click event");
    }

</script>


</body>
</html>

//keyboard event
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
         #box{
            height: 100px;
            width:100px;
            background-color:rgb(255, 0, 191) ;
    </style>
</head>
<body>
 <div id="box"></div>
    
<script>
   window.addEventListener('keyup',checkkey)
      function checkkey(event){
          console.log(event.key);
      }

</script>


</body>
</html>


//scroll addEventListener

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    body{
        height:2000px;
    }
    </style>
</head>
<body>
    <h1>Hello</h1>
    <script>
        window.addEventListener('scroll',function(event){
            if(window.pageYOffset > 150){
                document.body.style.background = "red";
            }else{
                document.body.style.background = "white";
            }
        });

    </script>
</body>
</html>


//input field change event

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="">
        <input type="text" id="myInput">
    </form>
    <script>
        let x = document.getElementById("myInput");
        x.addEventListener('focus',myFocusFunction);
        x.addEventListener('blur' ,myBlurFunction);

        function myFocusFunction(){
                x.style.background = "yellow";
        }
        function myBlurFunction(){
            x.style.background = "white";
            
        }
    </script>
</body>
</html>


//change Event
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="">
        <input type="text" id="myInput">
    </form>
    <script>
        let x = document.getElementById("myInput");

        x.addEventListener('focus',myFocusFunction);
        x.addEventListener('blur' ,myBlurFunction);

        x.addEventListener('change',function(){
            console.log(this.value);
        })


        function myFocusFunction(){
                x.style.background = "yellow";
        }
        function myBlurFunction(){
            x.style.background = "white";
            
        }
    </script>
</body>
</html>


//change Event
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="">
        <input type="text" id="myInput">
    </form>
    <script>
        let x = document.getElementById("myInput");

        x.addEventListener('focus',myFocusFunction);
        x.addEventListener('blur' ,myBlurFunction);

        x.addEventListener('input',function(){
            console.log(this.value);
        })


        function myFocusFunction(){
                x.style.background = "yellow";
        }
        function myBlurFunction(){
            x.style.background = "white";
            
        }
    </script>
</body>
</html>



//event bubbling and event capuring


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            padding:100px;
            background-color:cornsilk;
        }
        #myDiv{
            padding:50px;
            background-color:darkblue;
        }
    </style>
</head>
<body>
    <div id="myDiv">
        <button id="btn">Click me</button>
    </div>
        

    <script>
        let d = document.getElementById("myDiv");
        let b = document.getElementById("btn");

        b.addEventListener('click',btnClicked);
        d.addEventListener('click',divClicked);
        document.body.addEventlistener('click',bodyClicked);

        function btnClicked(){
            console.log("button clicked....");

        }
        function divClicked(){
            console.log("div clicked....");
        }
        function bodyClicked(){
            console.log("body clicked....");
        }

        
    </script>
</body>
</html>



//prevent Default

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" id="myForm">
        <input type="text">
        <input type="submit">
    </form>
    <a href="https://www.google.com">click me</a>
    <script>
        let form = document.getElementById("myForm");
        form.addEventListener('submit',function(e){
              e.preventDefault();
        });

    </script>
</body>
</html>



//Browser object Model (BOM)

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <script>
     window.alert("manish");
   </script>
</body>
</html>


//window

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      
    </style>  
</head>
<body>

    <button id="btn1">Google</button>


   <script>
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");

    let url = "https.//www.google.com";
    let feature = "height=500,width=500";
    let win;

    btn1.addEventListener('click',function(){
        win =  window.open(url,'google',features);
    });

    btn2.addEventListener('click',function(){
        window.open('https://www.yahoo.com','google');
    });
    btn3.addEventlistener('click',function(){
        win.close();
    });
    
    
   </script>
</body>
</html>


//Time out and Time Interval
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
       let timeoutId =  setTimeout(myFunction,5000);

        function myFunction(){
            alert("please subscribe...");
        }
    if(){
        clearTimeout(timeoutId);

    }
        
    </script>
</body>
</html>

//set interval

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

     <button id="btn">clear Interval</button>
         
    <script>
       var t1=setInterval (fun,2000);

       function fun(){
              console.log("please subscribe...");
       }
       let btn1 = document.getElementById("btn");

       btn1.addEventListener('click',function(){
                 clearInterval(t1);
       });

       
    </script>
</body>
</html>


//location object,control method
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
     <button id="btn"onclick="fun()">Redirect to google</button>
    <script>
        function fun(){
        location.assign("https://www.google.com");
        }
    </script>
    
</body>
</html>


//location object,replece does not entry on browser:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
     <button id="btn"onclick="fun()">Redirect to google</button>
    <script>
        function fun(){
        location.replace("https://www.google.com");
        }
    </script>
    
</body>
</html>

//Navigator object
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        console.log(navigator.javaEnabled);
    </script>
</body>
</html>

//screen object

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        console.log(screen.orientation);
    </script>
</body>
</html>