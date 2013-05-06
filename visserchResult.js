//PageActionする？

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	if( tab.url.indexOf('visseeker2') != -1 ){
		chrome.pageAction.show(tabId);
	}
});
