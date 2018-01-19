//global objects are provided by javascript
function newLine(){
	document.write("<br>");
}
var hello = "hello how are you doing";
newLine();
document.write(hello);
newLine();
document.write(hello.toUpperCase());
newLine();
document.write(hello);
newLine();
document.write("Length of above string is "+hello.length);
newLine();
document.write("String.chatAt(index) gives chaacter at index");
hello=hello.replace('doing','today');
newLine();
document.write(hello.bold());
newLine();
document.write(hello.italics());