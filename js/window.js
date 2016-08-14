function Window(nome,conteudo,overlay){
	if(undefined===overlay){this.overlay=false;}
	this.div=document.createElement("div");
	this.div.className="window";
	
	this.toolbar=document.createElement("div");
	this.toolbar.className="toolbar";
	
	this.close=document.createElement("div");
	this.close.href="#"
	this.close.onclick=function(){this.parentElement.parentElement.style.display='none';}
	this.close.class="button";
	this.close.id="close";
	
	this.nome=document.createElement("div");
	this.nome.id="name";
	this.nome.innerText=nome;
	
	this.content=document.createElement("div");
	this.content.id="content";
	this.content.innerHTML=conteudo;
	
	this.toolbar.appendChild(this.nome);
	this.toolbar.appendChild(this.close);
	
	this.div.appendChild(this.toolbar);
	this.div.appendChild(this.content);
	
	document.body.insertBefore(this.div,document.body.firstChild);
	
	Drag.init(this.toolbar, this.div);
	this.open=function(){
		if (this.overlay)this.overlay.style.display="block";
		this.div.style.display="block";
	}
	this.close=function(){
		if (this.overlay)this.overlay.style.display="none";
		this.div.display="none";
	}
}