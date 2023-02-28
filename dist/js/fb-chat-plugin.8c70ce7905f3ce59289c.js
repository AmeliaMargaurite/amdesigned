"use strict";
(self["webpackChunkamdesigned"] = self["webpackChunkamdesigned"] || []).push([["fb-chat-plugin"],{

/***/ "./src/components/fb-chat-plugin/fb-chat-plugin.ts":
/*!*********************************************************!*\
  !*** ./src/components/fb-chat-plugin/fb-chat-plugin.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/fb-chat-plugin/fb-chat-plugin.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2ZiLWNoYXQtcGx1Z2luLjhjNzBjZTc5MDVmM2NlNTkyODljLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbWRlc2lnbmVkLy4vc3JjL2NvbXBvbmVudHMvZmItY2hhdC1wbHVnaW4vZmItY2hhdC1wbHVnaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNoYXRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZiLWN1c3RvbWVyLWNoYXRcIik7XHJcbmlmIChjaGF0Ym94KSB7XHJcbiAgICBjaGF0Ym94LnNldEF0dHJpYnV0ZShcInBhZ2VfaWRcIiwgXCIxMDEyMzE5OTEzMjgwMjJcIik7XHJcbiAgICBjaGF0Ym94LnNldEF0dHJpYnV0ZShcImF0dHJpYnV0aW9uXCIsIFwiYml6X2luYm94XCIpO1xyXG59XHJcbndpbmRvdy5mYkFzeW5jSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIEB0cy1ub2NoZWNrXHJcbiAgICBGQi5pbml0KHtcclxuICAgICAgICB4ZmJtbDogdHJ1ZSxcclxuICAgICAgICB2ZXJzaW9uOiBcInYxNi4wXCIsXHJcbiAgICB9KTtcclxufTtcclxuKGZ1bmN0aW9uIChkLCBzLCBpZCkge1xyXG4gICAgdmFyIGpzLCBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xyXG4gICAgaWYgKGQuZ2V0RWxlbWVudEJ5SWQoaWQpKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGpzID0gZC5jcmVhdGVFbGVtZW50KHMpO1xyXG4gICAganMuaWQgPSBpZDtcclxuICAgIGpzLnNyYyA9IFwiaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9HQi9zZGsveGZibWwuY3VzdG9tZXJjaGF0LmpzXCI7XHJcbiAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XHJcbn0pKGRvY3VtZW50LCBcInNjcmlwdFwiLCBcImZhY2Vib29rLWpzc2RrXCIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=