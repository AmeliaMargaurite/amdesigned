"use strict";
(self["webpackChunkamdesigned"] = self["webpackChunkamdesigned"] || []).push([["common"],{

/***/ "./src/ts/common.ts":
/*!**************************!*\
  !*** ./src/ts/common.ts ***!
  \**************************/
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
    var _a;
    if (el instanceof HTMLButtonElement && !((_a = el.form) === null || _a === void 0 ? void 0 : _a.checkValidity())) {
        return;
    }
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
window.showLoadingBtn = showLoadingBtn;
window.closeMenu = closeMenu;
/**
 * Scroll To Top Button
 **/
const checkScrollHeight = () => {
    if (window.scrollY >= 600) {
        showScrollToTopButton();
    }
    else
        hideScrollToTopButton();
};
window.addEventListener("scroll", (0, helpers_1.throttleFunction)(checkScrollHeight));
const showScrollToTopButton = () => {
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    scrollToTopBtn === null || scrollToTopBtn === void 0 ? void 0 : scrollToTopBtn.classList.add("active");
};
const hideScrollToTopButton = () => {
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    scrollToTopBtn === null || scrollToTopBtn === void 0 ? void 0 : scrollToTopBtn.classList.remove("active");
};
const scrollToTop = () => {
    var _a;
    (_a = document.getElementById("skip-to-content-link")) === null || _a === void 0 ? void 0 : _a.focus();
    hideScrollToTopButton();
};
window.addEventListener("resize", (0, helpers_1.throttleFunction)(toggleMenuOnWindowSize, 1500));
window.scrollToTop = scrollToTop;


/***/ }),

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ts/common.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2NvbW1vbi5jNzQ5OTkyYzJjOGYyNjIxYTgwMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0IsbUJBQU8sQ0FBQyxzQ0FBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRyxlQUFlO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1R2E7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbWRlc2lnbmVkLy4vc3JjL3RzL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9hbWRlc2lnbmVkLy4vc3JjL3RzL2hlbHBlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcclxuY29uc3QgY2xvc2VNZW51T25Fc2MgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICBjbG9zZU1lbnUoKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgY2xvc2VNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYW1idXJnZXJcIik7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tbWVudVwiKTtcclxuICAgIGhhbWJ1cmdlciA9PT0gbnVsbCB8fCBoYW1idXJnZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgIG5hdiA9PT0gbnVsbCB8fCBuYXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gXCJhdXRvXCI7XHJcbiAgICBoYW1idXJnZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlTWVudU9uRXNjKTtcclxufTtcclxuY29uc3Qgb3Blbk1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbWJ1cmdlclwiKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1tZW51XCIpO1xyXG4gICAgaGFtYnVyZ2VyID09PSBudWxsIHx8IGhhbWJ1cmdlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgbmF2ID09PSBudWxsIHx8IG5hdiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmF2LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlTWVudU9uRXNjKTtcclxuICAgIGhhbWJ1cmdlci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcclxufTtcclxuY29uc3QgdG9nZ2xlTWVudSA9IChvcGVuU3RhdGUgPSB0cnVlKSA9PiB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tbWVudVwiKTtcclxuICAgIGNvbnN0IGlzT3BlbiA9IG5hdiA9PT0gbnVsbCB8fCBuYXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuXCIpO1xyXG4gICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgIGNsb3NlTWVudSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgb3Blbk1lbnUoKTtcclxuICAgIH1cclxufTtcclxuY29uc3QgdG9nZ2xlTWVudU9uV2luZG93U2l6ZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbWJ1cmdlclwiKTtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIHtcclxuICAgICAgICBoYW1idXJnZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY2xvc2VNZW51KCk7XHJcbiAgICAgICAgaGFtYnVyZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgfVxyXG59O1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoMCwgaGVscGVyc18xLnRocm90dGxlRnVuY3Rpb24pKHRvZ2dsZU1lbnVPbldpbmRvd1NpemUsIDE1MDApLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbndpbmRvdy50b2dnbGVNZW51ID0gdG9nZ2xlTWVudTtcclxuY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkaW5nV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ19fd3JhcHBlclwiKTtcclxuICAgIGxvYWRpbmdXcmFwcGVyID09PSBudWxsIHx8IGxvYWRpbmdXcmFwcGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsb2FkaW5nV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59O1xyXG53aW5kb3cuc2hvd0xvYWRpbmcgPSBzaG93TG9hZGluZztcclxuY29uc3Qgc2hvd0xvYWRpbmdCdG4gPSAoZWwpID0+IHtcclxuICAgIHZhciBfYTtcclxuICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50ICYmICEoKF9hID0gZWwuZm9ybSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoZWNrVmFsaWRpdHkoKSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiYnRuLXRvLXJlc2V0XCIpO1xyXG4gICAgY29uc3QgaWNvbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmljb25cIik7XHJcbiAgICBpZiAoaWNvbikge1xyXG4gICAgICAgIGljb24uc2V0QXR0cmlidXRlKFwiZGF0YS1vbGQtY2xhc3Nlc1wiLCBpY29uLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBcImljb24gc3Bpbm5lciBzcGlubmVyLWFjdGl2ZVwiO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCByZXNldEJ0bnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tdG8tcmVzZXRcIik7XHJcbiAgICBidG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJidG4tdG8tcmVzZXRcIik7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGJ0bi5xdWVyeVNlbGVjdG9yKFwiLmljb25cIik7XHJcbiAgICAgICAgaWYgKGljb24pIHtcclxuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IGljb24uZGF0YXNldC5vbGRDbGFzc2VzO1xyXG4gICAgICAgICAgICBpZiAoY2xhc3Nlcykge1xyXG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBjbGFzc2VzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIHJlc2V0QnRucyk7XHJcbndpbmRvdy5zaG93TG9hZGluZ0J0biA9IHNob3dMb2FkaW5nQnRuO1xyXG53aW5kb3cuY2xvc2VNZW51ID0gY2xvc2VNZW51O1xyXG4vKipcclxuICogU2Nyb2xsIFRvIFRvcCBCdXR0b25cclxuICoqL1xyXG5jb25zdCBjaGVja1Njcm9sbEhlaWdodCA9ICgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSA2MDApIHtcclxuICAgICAgICBzaG93U2Nyb2xsVG9Ub3BCdXR0b24oKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICBoaWRlU2Nyb2xsVG9Ub3BCdXR0b24oKTtcclxufTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKDAsIGhlbHBlcnNfMS50aHJvdHRsZUZ1bmN0aW9uKShjaGVja1Njcm9sbEhlaWdodCkpO1xyXG5jb25zdCBzaG93U2Nyb2xsVG9Ub3BCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzY3JvbGxUb1RvcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Nyb2xsLXRvLXRvcFwiKTtcclxuICAgIHNjcm9sbFRvVG9wQnRuID09PSBudWxsIHx8IHNjcm9sbFRvVG9wQnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzY3JvbGxUb1RvcEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59O1xyXG5jb25zdCBoaWRlU2Nyb2xsVG9Ub3BCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzY3JvbGxUb1RvcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Nyb2xsLXRvLXRvcFwiKTtcclxuICAgIHNjcm9sbFRvVG9wQnRuID09PSBudWxsIHx8IHNjcm9sbFRvVG9wQnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzY3JvbGxUb1RvcEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG59O1xyXG5jb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgIHZhciBfYTtcclxuICAgIChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2tpcC10by1jb250ZW50LWxpbmtcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xyXG4gICAgaGlkZVNjcm9sbFRvVG9wQnV0dG9uKCk7XHJcbn07XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgwLCBoZWxwZXJzXzEudGhyb3R0bGVGdW5jdGlvbikodG9nZ2xlTWVudU9uV2luZG93U2l6ZSwgMTUwMCkpO1xyXG53aW5kb3cuc2Nyb2xsVG9Ub3AgPSBzY3JvbGxUb1RvcDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy50aHJvdHRsZUZ1bmN0aW9uID0gdm9pZCAwO1xyXG5jb25zdCB0aHJvdHRsZUZ1bmN0aW9uID0gKGNhbGxCYWNrLCBkZWxheSA9IDEwMDApID0+IHtcclxuICAgIGxldCB3YWl0ID0gZmFsc2U7XHJcbiAgICBsZXQgd2FpdGluZ0FyZ3M7XHJcbiAgICBjb25zdCB0aW1lb3V0RnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdhaXRpbmdBcmdzID09IG51bGwpIHtcclxuICAgICAgICAgICAgd2FpdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2FsbEJhY2soLi4ud2FpdGluZ0FyZ3MpO1xyXG4gICAgICAgICAgICB3YWl0aW5nQXJncyA9IG51bGw7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGltZW91dEZ1bmN0aW9uLCBkZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGlmICh3YWl0KSB7XHJcbiAgICAgICAgICAgIHdhaXRpbmdBcmdzID0gYXJncztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsQmFjayguLi5hcmdzKTtcclxuICAgICAgICB3YWl0ID0gdHJ1ZTtcclxuICAgICAgICBzZXRUaW1lb3V0KHRpbWVvdXRGdW5jdGlvbiwgZGVsYXkpO1xyXG4gICAgfTtcclxufTtcclxuZXhwb3J0cy50aHJvdHRsZUZ1bmN0aW9uID0gdGhyb3R0bGVGdW5jdGlvbjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9