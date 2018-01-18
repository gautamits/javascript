var name="Amit";
function printName(){
	var middle="Kumar";//local variable
	title="Gautam";//global variable

}
printName();
document.write(name+title);

//global variables stay alive as page is loading while local variables destroy whenever function is executed
