var orc={
	color:"green",
	height:"5",
	weight:180,
	yell:function(){
		document.write("This is "+this.color+" orc")}
};

orc.yell();
orc.color="red";
orc.yell();
orc.shape="sphere";

document.write(orc.shape);
delete orc.shape;
document.write(String(orc));