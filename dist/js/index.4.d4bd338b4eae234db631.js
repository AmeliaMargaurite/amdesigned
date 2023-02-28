"use strict";
(self["webpackChunkamdesigned"] = self["webpackChunkamdesigned"] || []).push([["index.4"],{

/***/ "./src/ts/helpers.ts":
/*!***************************!*\
  !*** ./src/ts/helpers.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.throttleFunction = void 0;
const throttleFunction = (callBack, delay = 1000) => {
    let wait = false;
    let waitingArgs;
    const timeoutFunction = () => {
        if (waitingArgs == null) {
            wait = false;
        }
        else {
            callBack(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunction, delay);
        }
    };
    return (...args) => {
        if (wait) {
            waitingArgs = args;
            return;
        }
        callBack(...args);
        wait = true;
        setTimeout(timeoutFunction, delay);
    };
};
exports.throttleFunction = throttleFunction;


/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const helpers_1 = __webpack_require__(/*! ./helpers */ "./src/ts/helpers.ts");
const closeMenuOnEsc = (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
};
const closeMenu = () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("main-menu");
    hamburger === null || hamburger === void 0 ? void 0 : hamburger.classList.remove("open");
    nav === null || nav === void 0 ? void 0 : nav.classList.remove("open");
    document.body.style.overflowY = "auto";
    hamburger.setAttribute("aria-expanded", "false");
    window.removeEventListener("keydown", closeMenuOnEsc);
};
const openMenu = () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("main-menu");
    hamburger === null || hamburger === void 0 ? void 0 : hamburger.classList.add("open");
    nav === null || nav === void 0 ? void 0 : nav.classList.add("open");
    document.body.style.overflowY = "hidden";
    window.addEventListener("keydown", closeMenuOnEsc);
    hamburger.setAttribute("aria-expanded", "true");
};
const toggleMenu = (openState = true) => {
    const nav = document.getElementById("main-menu");
    const isOpen = nav === null || nav === void 0 ? void 0 : nav.classList.contains("open");
    if (isOpen) {
        closeMenu();
    }
    else {
        openMenu();
    }
};
const toggleMenuOnWindowSize = (e) => {
    const hamburger = document.getElementById("hamburger");
    if (window.innerWidth <= 768) {
        hamburger.setAttribute("aria-expanded", "false");
    }
    else {
        closeMenu();
        hamburger.setAttribute("aria-expanded", "true");
    }
};
window.addEventListener("resize", (0, helpers_1.throttleFunction)(toggleMenuOnWindowSize, 1500), { passive: true });
window.toggleMenu = toggleMenu;
const showLoading = () => {
    const loadingWrapper = document.getElementById("loading__wrapper");
    loadingWrapper === null || loadingWrapper === void 0 ? void 0 : loadingWrapper.classList.add("active");
};
window.showLoading = showLoading;
const showLoadingBtn = (el) => {
    el.classList.add("disabled");
    el.classList.add("btn-to-reset");
    const icon = el.querySelector("span.icon");
    if (icon) {
        icon.setAttribute("data-old-classes", icon.className);
        icon.className = "icon spinner spinner-active";
    }
};
const resetBtns = () => {
    const btns = document.querySelectorAll(".btn-to-reset");
    btns.forEach((btn) => {
        btn.classList.remove("disabled");
        btn.classList.remove("btn-to-reset");
        const icon = btn.querySelector(".icon");
        if (icon) {
            const classes = icon.dataset.oldClasses;
            if (classes) {
                icon.className = classes;
            }
        }
    });
};
window.addEventListener("beforeunload", resetBtns);
window.showLoadingBtn = showLoadingBtn;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ts/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2luZGV4LjQuZDRiZDMzOGI0ZWFlMjM0ZGI2MzEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7Ozs7Ozs7Ozs7O0FDMUJYO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLHNDQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HLGVBQWU7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FtZGVzaWduZWQvLi9zcmMvdHMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9hbWRlc2lnbmVkLy4vc3JjL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMudGhyb3R0bGVGdW5jdGlvbiA9IHZvaWQgMDtcclxuY29uc3QgdGhyb3R0bGVGdW5jdGlvbiA9IChjYWxsQmFjaywgZGVsYXkgPSAxMDAwKSA9PiB7XHJcbiAgICBsZXQgd2FpdCA9IGZhbHNlO1xyXG4gICAgbGV0IHdhaXRpbmdBcmdzO1xyXG4gICAgY29uc3QgdGltZW91dEZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh3YWl0aW5nQXJncyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHdhaXQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxCYWNrKC4uLndhaXRpbmdBcmdzKTtcclxuICAgICAgICAgICAgd2FpdGluZ0FyZ3MgPSBudWxsO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRpbWVvdXRGdW5jdGlvbiwgZGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBpZiAod2FpdCkge1xyXG4gICAgICAgICAgICB3YWl0aW5nQXJncyA9IGFyZ3M7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbEJhY2soLi4uYXJncyk7XHJcbiAgICAgICAgd2FpdCA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCh0aW1lb3V0RnVuY3Rpb24sIGRlbGF5KTtcclxuICAgIH07XHJcbn07XHJcbmV4cG9ydHMudGhyb3R0bGVGdW5jdGlvbiA9IHRocm90dGxlRnVuY3Rpb247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XHJcbmNvbnN0IGNsb3NlTWVudU9uRXNjID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgICAgY2xvc2VNZW51KCk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFtYnVyZ2VyXCIpO1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW1lbnVcIik7XHJcbiAgICBoYW1idXJnZXIgPT09IG51bGwgfHwgaGFtYnVyZ2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICBuYXYgPT09IG51bGwgfHwgbmF2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYXYuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwiYXV0b1wiO1xyXG4gICAgaGFtYnVyZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZU1lbnVPbkVzYyk7XHJcbn07XHJcbmNvbnN0IG9wZW5NZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYW1idXJnZXJcIik7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tbWVudVwiKTtcclxuICAgIGhhbWJ1cmdlciA9PT0gbnVsbCB8fCBoYW1idXJnZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhhbWJ1cmdlci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgIG5hdiA9PT0gbnVsbCB8fCBuYXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hdi5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gXCJoaWRkZW5cIjtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZU1lbnVPbkVzYyk7XHJcbiAgICBoYW1idXJnZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XHJcbn07XHJcbmNvbnN0IHRvZ2dsZU1lbnUgPSAob3BlblN0YXRlID0gdHJ1ZSkgPT4ge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW1lbnVcIik7XHJcbiAgICBjb25zdCBpc09wZW4gPSBuYXYgPT09IG51bGwgfHwgbmF2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKTtcclxuICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICBjbG9zZU1lbnUoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG9wZW5NZW51KCk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHRvZ2dsZU1lbnVPbldpbmRvd1NpemUgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYW1idXJnZXJcIik7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNzY4KSB7XHJcbiAgICAgICAgaGFtYnVyZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNsb3NlTWVudSgpO1xyXG4gICAgICAgIGhhbWJ1cmdlci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgIH1cclxufTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKDAsIGhlbHBlcnNfMS50aHJvdHRsZUZ1bmN0aW9uKSh0b2dnbGVNZW51T25XaW5kb3dTaXplLCAxNTAwKSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG53aW5kb3cudG9nZ2xlTWVudSA9IHRvZ2dsZU1lbnU7XHJcbmNvbnN0IHNob3dMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbG9hZGluZ1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdfX3dyYXBwZXJcIik7XHJcbiAgICBsb2FkaW5nV3JhcHBlciA9PT0gbnVsbCB8fCBsb2FkaW5nV3JhcHBlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbG9hZGluZ1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxufTtcclxud2luZG93LnNob3dMb2FkaW5nID0gc2hvd0xvYWRpbmc7XHJcbmNvbnN0IHNob3dMb2FkaW5nQnRuID0gKGVsKSA9PiB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiYnRuLXRvLXJlc2V0XCIpO1xyXG4gICAgY29uc3QgaWNvbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmljb25cIik7XHJcbiAgICBpZiAoaWNvbikge1xyXG4gICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwiZGF0YS1vbGQtY2xhc3Nlc1wiLCBpY29uLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBcImljb24gc3Bpbm5lciBzcGlubmVyLWFjdGl2ZVwiO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCByZXNldEJ0bnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tdG8tcmVzZXRcIik7XHJcbiAgICBidG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJidG4tdG8tcmVzZXRcIik7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGJ0bi5xdWVyeVNlbGVjdG9yKFwiLmljb25cIik7XHJcbiAgICAgICAgaWYgKGljb24pIHtcclxuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IGljb24uZGF0YXNldC5vbGRDbGFzc2VzO1xyXG4gICAgICAgICAgICBpZiAoY2xhc3Nlcykge1xyXG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBjbGFzc2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIHJlc2V0QnRucyk7XHJcbndpbmRvdy5zaG93TG9hZGluZ0J0biA9IHNob3dMb2FkaW5nQnRuO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=