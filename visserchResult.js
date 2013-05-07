var entryPoint = document.getElementById("result");
var itemnum = localStorage["itemnum"];
for( var i=0; i<itemnum; i++ ){
	var title = localStorage["title" + i];
	var clickurl = localStorage["clickurl" + i];
	var url = localStorage["url" + i];

	var imgNode = document.createElement("img");
	imgNode.src = url;
	var titleNode = document.createElement("a");
	titleNode.href = clickurl;
	titleNode.target = "_blank";
	titleNode.appendChild(document.createTextNode(title));
	
	entryPoint.appendChild(titleNode);
	entryPoint.appendChild(document.createElement("br"));
	entryPoint.appendChild(imgNode);
	entryPoint.appendChild(document.createElement("br"));
}
