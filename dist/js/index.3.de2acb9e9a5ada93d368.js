"use strict";
(self["webpackChunkamdesigned"] = self["webpackChunkamdesigned"] || []).push([["index.3"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ts/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2luZGV4LjMuZGUyYWNiOWU5YTVhZGE5M2QzNjguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7Ozs7Ozs7Ozs7O0FDMUJYO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLHNDQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HLGVBQWU7QUFDbEgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbWRlc2lnbmVkLy4vc3JjL3RzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vYW1kZXNpZ25lZC8uL3NyYy90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnRocm90dGxlRnVuY3Rpb24gPSB2b2lkIDA7XHJcbmNvbnN0IHRocm90dGxlRnVuY3Rpb24gPSAoY2FsbEJhY2ssIGRlbGF5ID0gMTAwMCkgPT4ge1xyXG4gICAgbGV0IHdhaXQgPSBmYWxzZTtcclxuICAgIGxldCB3YWl0aW5nQXJncztcclxuICAgIGNvbnN0IHRpbWVvdXRGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAod2FpdGluZ0FyZ3MgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3YWl0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYWxsQmFjayguLi53YWl0aW5nQXJncyk7XHJcbiAgICAgICAgICAgIHdhaXRpbmdBcmdzID0gbnVsbDtcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aW1lb3V0RnVuY3Rpb24sIGRlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgaWYgKHdhaXQpIHtcclxuICAgICAgICAgICAgd2FpdGluZ0FyZ3MgPSBhcmdzO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxCYWNrKC4uLmFyZ3MpO1xyXG4gICAgICAgIHdhaXQgPSB0cnVlO1xyXG4gICAgICAgIHNldFRpbWVvdXQodGltZW91dEZ1bmN0aW9uLCBkZWxheSk7XHJcbiAgICB9O1xyXG59O1xyXG5leHBvcnRzLnRocm90dGxlRnVuY3Rpb24gPSB0aHJvdHRsZUZ1bmN0aW9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xyXG5jb25zdCBjbG9zZU1lbnVPbkVzYyA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgIGNsb3NlTWVudSgpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCBjbG9zZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbWJ1cmdlclwiKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1tZW51XCIpO1xyXG4gICAgaGFtYnVyZ2VyID09PSBudWxsIHx8IGhhbWJ1cmdlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgbmF2ID09PSBudWxsIHx8IG5hdiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImF1dG9cIjtcclxuICAgIGhhbWJ1cmdlci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VNZW51T25Fc2MpO1xyXG59O1xyXG5jb25zdCBvcGVuTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFtYnVyZ2VyXCIpO1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW1lbnVcIik7XHJcbiAgICBoYW1idXJnZXIgPT09IG51bGwgfHwgaGFtYnVyZ2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoYW1idXJnZXIuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICBuYXYgPT09IG51bGwgfHwgbmF2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYXYuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VNZW51T25Fc2MpO1xyXG4gICAgaGFtYnVyZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xyXG59O1xyXG5jb25zdCB0b2dnbGVNZW51ID0gKG9wZW5TdGF0ZSA9IHRydWUpID0+IHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1tZW51XCIpO1xyXG4gICAgY29uc3QgaXNPcGVuID0gbmF2ID09PSBudWxsIHx8IG5hdiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmF2LmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5cIik7XHJcbiAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgY2xvc2VNZW51KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBvcGVuTWVudSgpO1xyXG4gICAgfVxyXG59O1xyXG5jb25zdCB0b2dnbGVNZW51T25XaW5kb3dTaXplID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFtYnVyZ2VyXCIpO1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCkge1xyXG4gICAgICAgIGhhbWJ1cmdlci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjbG9zZU1lbnUoKTtcclxuICAgICAgICBoYW1idXJnZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XHJcbiAgICB9XHJcbn07XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgwLCBoZWxwZXJzXzEudGhyb3R0bGVGdW5jdGlvbikodG9nZ2xlTWVudU9uV2luZG93U2l6ZSwgMTUwMCksIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxud2luZG93LnRvZ2dsZU1lbnUgPSB0b2dnbGVNZW51O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=