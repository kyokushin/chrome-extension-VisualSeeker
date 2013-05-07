chrome.contextMenus.create({
	"title": "画像を検索",
	"type": "normal",
	"contexts": ["image"],
	"onclick": function(info){
		var url = 'http://visseeker2.yahoo-labs.jp/yipr/textsearch?results=8&start=1&mode=text&query=' + encodeURIComponent( info.srcUrl);

		var xhr = new XMLHttpRequest();
		//XMLを受け取った時の処理
		xhr.onreadystatechange = function(){
			localStorage.clear();
			if( xhr.readyState == 4 && xhr.status == 200 ){
				var urls = xhr.responseXML.getElementsByTagName("Url");
				localStorage["itemnum"] = urls.length/2;
				for( var i=0; i<urls.length; i+=2 ){
					localStorage["url" + (i/2)] = urls[i].firstChild.nodeValue;
				}

				var titles = xhr.responseXML.getElementsByTagName("Title");
				for( var i=0; i<titles.length; i++ ){
					localStorage["title"+i] = titles[i].firstChild.nodeValue;
				}

				var clickurls = xhr.responseXML.getElementsByTagName("ClickUrl");
				for( var i=0; i<clickurls.length; i++ ){
					localStorage["clickurl"+i] = clickurls[i].firstChild.nodeValue;
				}
			}
		}
		xhr.open('GET', url, false);
		xhr.send(null);

		chrome.tabs.create({
			url: chrome.extension.getURL("result.html")
		});
	}
});
