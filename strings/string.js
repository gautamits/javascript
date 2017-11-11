/* javascript strings */
var name= "amit";
console.log(name);
var name2='jim';
console.log(name2);
console.log("single quote and double quote are equal when defining string");
var statement = "this is amit's string";
console.log(statement);

var statement2='He said "this is amit\'s string';
console.log(statement2);


// string concatenation
var part1="Hello ";
var part2="World ";
var whole=part1+part2;
console.log(whole+"!!!!!!!!!");

//string methods
console.log("length of whole is ",whole.length);

console.log("world in hello world is at ",whole.indexOf("world"));
//reurns -1 if not found

console.log("third character in hello is ",whole.charAt(2));

//substr method
var start=6;
var length=5;
var world=whole.substr(start,length);
console.log(world);

console.log(whole.toLowerCase());
console.log(whole.toUpperCase());
//original string does not changes

//string comparison
var first="Hello";
var second="hello";
if(first.toLowerCase() === second.toLowerCase()) {
    console.log("string are equal");
}
else{
    console.log("strings are not equal");
}

function compare(a,b){
    console.log(a,"<",b,a<b);
}
compare('a','b');
compare('a','A');
