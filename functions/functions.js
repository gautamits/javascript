//javascript functions
function sayHello(name,greeting){
    if(typeof greeting === 'undefined')
        greeting = 'Hello';
    console.log(greeting+" "+name);
}
sayHello("amit"); 

// when we initialise an undefined variable inside local scope, scope becomes global. some refer it as javascript bug
//anonymous functions

var myFunction = function(){
    console.log("my function called");
}
var callTwice = function(targetFunction){
    targetFunction();
    targetFunction();
}
callTwice(myFunction);

(function (){
var a,b,c;
console.log('from anon function')
})(1,"hello")