"use strict";
(self["webpackChunkamdesigned"] = self["webpackChunkamdesigned"] || []).push([["index.8"],{

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
document.addEventListener("visibilitychange", resetBtns);
// window.addEventListener("popstate", (e) => {
// 	console.log({ e });
// 	return false;
// });
window.showLoadingBtn = showLoadingBtn;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ts/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2luZGV4LjguMThiMGI0YTcyMDI2Mjc4NjEzMzQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7Ozs7Ozs7Ozs7O0FDMUJYO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLHNDQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HLGVBQWU7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixHQUFHO0FBQ3JCO0FBQ0EsSUFBSTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW1kZXNpZ25lZC8uL3NyYy90cy9oZWxwZXJzLnRzIiwid2VicGFjazovL2FtZGVzaWduZWQvLi9zcmMvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy50aHJvdHRsZUZ1bmN0aW9uID0gdm9pZCAwO1xyXG5jb25zdCB0aHJvdHRsZUZ1bmN0aW9uID0gKGNhbGxCYWNrLCBkZWxheSA9IDEwMDApID0+IHtcclxuICAgIGxldCB3YWl0ID0gZmFsc2U7XHJcbiAgICBsZXQgd2FpdGluZ0FyZ3M7XHJcbiAgICBjb25zdCB0aW1lb3V0RnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdhaXRpbmdBcmdzID09IG51bGwpIHtcclxuICAgICAgICAgICAgd2FpdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2FsbEJhY2soLi4ud2FpdGluZ0FyZ3MpO1xyXG4gICAgICAgICAgICB3YWl0aW5nQXJncyA9IG51bGw7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGltZW91dEZ1bmN0aW9uLCBkZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGlmICh3YWl0KSB7XHJcbiAgICAgICAgICAgIHdhaXRpbmdBcmdzID0gYXJncztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsQmFjayguLi5hcmdzKTtcclxuICAgICAgICB3YWl0ID0gdHJ1ZTtcclxuICAgICAgICBzZXRUaW1lb3V0KHRpbWVvdXRGdW5jdGlvbiwgZGVsYXkpO1xyXG4gICAgfTtcclxufTtcclxuZXhwb3J0cy50aHJvdHRsZUZ1bmN0aW9uID0gdGhyb3R0bGVGdW5jdGlvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcclxuY29uc3QgY2xvc2VNZW51T25Fc2MgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICBjbG9zZU1lbnUoKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgY2xvc2VNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYW1idXJnZXJcIik7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tbWVudVwiKTtcclxuICAgIGhhbWJ1cmdlciA9PT0gbnVsbCB8fCBoYW1idXJnZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgIG5hdiA9PT0gbnVsbCB8fCBuYXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gXCJhdXRvXCI7XHJcbiAgICBoYW1idXJnZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlTWVudU9uRXNjKTtcclxufTtcclxuY29uc3Qgb3Blbk1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbWJ1cmdlclwiKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1tZW51XCIpO1xyXG4gICAgaGFtYnVyZ2VyID09PSBudWxsIHx8IGhhbWJ1cmdlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgbmF2ID09PSBudWxsIHx8IG5hdiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmF2LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlTWVudU9uRXNjKTtcclxuICAgIGhhbWJ1cmdlci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcclxufTtcclxuY29uc3QgdG9nZ2xlTWVudSA9IChvcGVuU3RhdGUgPSB0cnVlKSA9PiB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tbWVudVwiKTtcclxuICAgIGNvbnN0IGlzT3BlbiA9IG5hdiA9PT0gbnVsbCB8fCBuYXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuXCIpO1xyXG4gICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgIGNsb3NlTWVudSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgb3Blbk1lbnUoKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgdG9nZ2xlTWVudU9uV2luZG93U2l6ZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbWJ1cmdlclwiKTtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIHtcclxuICAgICAgICBoYW1idXJnZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY2xvc2VNZW51KCk7XHJcbiAgICAgICAgaGFtYnVyZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgfVxyXG59O1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoMCwgaGVscGVyc18xLnRocm90dGxlRnVuY3Rpb24pKHRvZ2dsZU1lbnVPbldpbmRvd1NpemUsIDE1MDApLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbndpbmRvdy50b2dnbGVNZW51ID0gdG9nZ2xlTWVudTtcclxuY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkaW5nV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ19fd3JhcHBlclwiKTtcclxuICAgIGxvYWRpbmdXcmFwcGVyID09PSBudWxsIHx8IGxvYWRpbmdXcmFwcGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsb2FkaW5nV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59O1xyXG53aW5kb3cuc2hvd0xvYWRpbmcgPSBzaG93TG9hZGluZztcclxuY29uc3Qgc2hvd0xvYWRpbmdCdG4gPSAoZWwpID0+IHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJidG4tdG8tcmVzZXRcIik7XHJcbiAgICBjb25zdCBpY29uID0gZWwucXVlcnlTZWxlY3RvcihcInNwYW4uaWNvblwiKTtcclxuICAgIGlmIChpY29uKSB7XHJcbiAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9sZC1jbGFzc2VzXCIsIGljb24uY2xhc3NOYW1lKTtcclxuICAgICAgICBpY29uLmNsYXNzTmFtZSA9IFwiaWNvbiBzcGlubmVyIHNwaW5uZXItYWN0aXZlXCI7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IHJlc2V0QnRucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi10by1yZXNldFwiKTtcclxuICAgIGJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImJ0bi10by1yZXNldFwiKTtcclxuICAgICAgICBjb25zdCBpY29uID0gYnRuLnF1ZXJ5U2VsZWN0b3IoXCIuaWNvblwiKTtcclxuICAgICAgICBpZiAoaWNvbikge1xyXG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gaWNvbi5kYXRhc2V0Lm9sZENsYXNzZXM7XHJcbiAgICAgICAgICAgIGlmIChjbGFzc2VzKSB7XHJcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9IGNsYXNzZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgcmVzZXRCdG5zKTtcclxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCAoZSkgPT4ge1xyXG4vLyBcdGNvbnNvbGUubG9nKHsgZSB9KTtcclxuLy8gXHRyZXR1cm4gZmFsc2U7XHJcbi8vIH0pO1xyXG53aW5kb3cuc2hvd0xvYWRpbmdCdG4gPSBzaG93TG9hZGluZ0J0bjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9