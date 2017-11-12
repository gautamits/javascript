//array contains list of objects
var x = ["some","words","here"];
console.log(x);
console.log(x.length);

var y = ["string",3,true,["subarray",2,3,4],"str",function (a){return a*2;}];
console.log(y);
console.log(y.length);

var a = new Array(50);
console.log(a,a.length);

//getters and setters

var doubler = y[5];
console.log(doubler(5));
//y[13]="something new";
//console.log(y);
y[y.length]="hell";
console.log(y);

//methods

var my_array = [2,3,4];
my_array.push(5);//[2,3,4,5]
console.log(my_array.toString());

var p=my_array.pop();//removes and returns last value
console.log(my_array.toString());

//unshift and shift work on beginning of list
//unshift pushes in beginning
my_array.unshift(1);
console.log(my_array.toString());
var s = my_array.shift();

var arr = [10,44,32,100,0,44,3,4];
console.log(arr.toString());
arr.sort();
console.log(arr.toString());
//default way sorts arrays as if elements were string
arr.sort(function (a,b){
    //return a-b;
    return Math.random()-0.5;
    //random sort
});
console.log(arr.toString());
console.log(arr.reverse().toString());

//safe methods, original array is not changed
var x = [1,2,3];
var z = [4,5,6];
var c = x.concat(z);
console.log(c);

var arr2 = [0,1,2,3,4,5];
var res = arr2.slice(1,4);
console.log(res);

var words = ["these","are","some","words"];
var result = words.join("-");
console.log(result);

arr2.splice(2,1);
//splice(index,length)
//splice(index,length,insertion)
console.log(arr2.toString());
arr2.splice(2,0,2,"two");
console.log(arr2.toString());