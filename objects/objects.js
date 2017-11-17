//javascript objects
//objects store many values by key

var amit = {"name":"Amit","skills":["javascript","perl","poet"]};
console.log(amit.name);
console.log(amit.skills)

//change object
amit.skills=["java","c","c++"];
console.log(amit.skills);
//any valid identifier can be used as a key
var gautam = {
    name:"Amit",
    skills:["javascript","perl","poet"],
    "favorite color":"green",
    greet: function(){
        console.log("Hi,its "+this.name);
    }
};

var nick = {
    name:"Nick",
    greet:gautam.greet
};
console.log(gautam.name);
console.log(gautam["favorite color"]);

//methods
gautam.greet(this);
gautam.name="gautam";
gautam.greet(this);
nick.greet(this);
nick["greet"]();

function whatIsThis(){
    console.log(this);
}
whatIsThis();


///// call and apply
var nickGreet = nick.greet;
nickGreet.call(nick);
nickGreet.call({name:"Ankit"});
