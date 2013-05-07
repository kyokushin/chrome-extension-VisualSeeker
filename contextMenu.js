chrome.contextMenus.create({
	"title": "画像を検索",
	"type": "normal",
	"contexts": ["image"],
	"onclick": function(info){
		var url = 'http://visseeker2.yahoo-labs.jp/yipr/textsearch?results=8&start=1&mode=text&query=' + encodeURIComponent( info.srcUrl);
		chrome.tabs.create({
			url: chrome.extension.getURL("result.html")
		});
	}
});
