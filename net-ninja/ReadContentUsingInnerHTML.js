function changeStyle(){
	var para = document.getElementsByClassName("para");
	var text="";
	for(var i=0;i<para.length-1;i++){
		//para[i].innerHTML = "New Text";
		text+=" "+para[i].innerHTML;
		para[i].innerHTML="";
	}
	para[para.length-1].innerHTML=text;
}