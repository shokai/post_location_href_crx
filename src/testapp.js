var connection = chrome.extension.connect();

connection.onMessage.addListener(function(info, con) {
	console.log(info, con);
});

connection.postMessage({url:location.href});
