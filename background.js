console.log("This is from background.js");

chrome.browserAction.onClicked.addListener(function() {
	alert('background loaded!');
}
);

chrome.fontSettings.getFont(
	{ genericFamily: 'standard', script: 'Jpan' },
	function(details) { console.log(details.fontId); }
	);

chrome.fontSettings.getDefaultFontSize(
	function(details) { console.log(details.pixelSize); }
	);

chrome.fontSettings.setDefaultFontSize(
	{pixelSize: 26}
	);

