var novoMapa,overlay,a;
function loaded(){
	window.mapa={};
	overlay=document.getElementById("overlay");
	var novoMapaWindow=document.getElementById("novoMapaWindow");
	
	novoMapa=new Window("Novo Mapa","",overlay);
}