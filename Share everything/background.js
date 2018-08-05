chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({ id: "SharePage", title: "Share page!", type: "normal", contexts: ["page"] });
	chrome.contextMenus.create({ id: "ShareImage", title: "Share image!", type: "normal", contexts: ["image"] });
	chrome.contextMenus.create({ id: "ShareVideo", title: "Share video!", type: "normal", contexts: ["video"] });
	chrome.contextMenus.create({ id: "ShareLink", title: "Share link!", type: "normal", contexts: ["link"] });

});

chrome.contextMenus.onClicked.addListener(function(item, tab) {
	"use strict";
	chrome.tabs.sendMessage(tab.id, item.menuItemId);
});