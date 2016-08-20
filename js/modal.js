window.modal=new function(){
	this.open=function(id){
		var a=document.getElementById(id).parentElement,b=a.attributes.modal_open;
		a.style.display="block";
		setTimeout(function(){b.value="true";},20);
	};
	this.close=function(ele){
		var a=ele.parentElement.parentElement.parentElement,
		b=a.attributes.modal_open;
		b.value="false";
		setTimeout(function(){a.style.display="none";},500);
	}
}();