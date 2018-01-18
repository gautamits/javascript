var i=1;
var j=1;
document.write('<table>');
while(i<=10){
	j=1;
	document.write("<tr>");
	while(j<=10){
		document.write("<td>");
		document.write(i*j+" ");
		document.write("</td>");
		j+=1;
	}
	document.write("</tr>")
	i+=1;
	//document.write("<br>");
}
document.write("</table>");

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


document.write('<table>');
for(var i=1;i<=10;i++){
	
	document.write("<tr>");
	for(var j=0;j<10;j++){
		document.write("<td>");
		document.write(i+10*j+" ");
		document.write("</td>");
	}
	document.write("</tr>");
}
document.write("</table>");