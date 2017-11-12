var a=0.1;
var b=0.2;
console.log("0.1*0.2 is ",0.1*0.2);

console.log("1.23E7 is ",1.23E7);
console.log("012 is because octal ",012);
console.log("but 019 is ",019);

//numbers parsed from string

var j = "197";
console.log(parseInt(j));
console.log(parseInt("012"));
console.log(parseInt("019",10));
console.log(parseInt("00101101",2));
console.log(parseInt("23 people",10));

//NaN have important property of not being equal to itself
var l=parseInt("there are 23 people");
console.log(l);
if(isNaN(l)) console.log("l is NaN");

var m=parseFloat("123.456");
//parseFloat always works in base 20
var n=parseInt("123.456");

console.log(m,n);

//math object

var u = Math.random();
//returns value between 0 and 1
console.log(Math.round(u*10));
var w=Math.ceil(3.2);
var x=Math.floor(3.5);
