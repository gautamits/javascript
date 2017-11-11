var myColor="blue";
console.log("color before myFunc is ",myColor);
function myFunc(){
    var myColor="yellow";
    myNumber=42;//in javascript var has functional scope
    console.log("myColor inside myFunc ",myColor);
}
myFunc();
console.log("myNumber after myFunc ",myNumber);