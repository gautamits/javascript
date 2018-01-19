function changeImage(){
	var image=document.getElementById("image");
	if(image.src.endsWith("original.jpg")) image.src="images/replacement.jpg";
	else image.src="images/original.jpg";
}