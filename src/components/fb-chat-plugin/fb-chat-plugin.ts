export {};

declare global {
	interface Window {
		fbAsyncInit: any;
		FB: any;
	}
}

var chatbox = document.getElementById("fb-customer-chat");
if (chatbox) {
	chatbox.setAttribute("page_id", "101231991328022");
	chatbox.setAttribute("attribution", "biz_inbox");
}

window.fbAsyncInit = function () {
	// @ts-nocheck
	FB.init({
		xfbml: true,
		version: "v16.0",
	});
};

(function (d, s, id) {
	var js,
		fjs = d.getElementsByTagName(s)[0] as any;
	if (d.getElementById(id)) return;
	js = d.createElement(s) as any;
	js.id = id;
	js.src = "https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js";
	fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
