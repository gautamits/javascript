function hoisting(doIt){
    var color="blue";
    if(doIt){
        var color="red";
        console.log("color inside if block ",color);
    }
    console.log("color after if ",color);
    }
    hoisting(false);
    hoisting(true);