function changeStyle(){
	var paragraph = document.getElementsByTagName("p");
	//var changeParaText = paragraph[1].style.fontStyle = "italic";
	for(var i=0;i<paragraph.length;i++){
		paragraph[i].style.fontStyle = "italic";
	}
}
