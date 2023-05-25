"use strict";
(self["webpackChunkamdesigned"] = self["webpackChunkamdesigned"] || []).push([["contact_form"],{

/***/ "./src/components/contact_form/contact_form.ts":
/*!*****************************************************!*\
  !*** ./src/components/contact_form/contact_form.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const packageTypes = {
    low: ["design", "build"],
    mid: ["design", "build", "seo-accessibility", "analytics"],
    high: [
        "design",
        "build",
        "hosting",
        "domain-purchase",
        "seo-accessibility",
        "analytics",
        "maintenance",
    ],
};
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
// If user has come from privacy or tcs pages
// They likely don't want a website
const page = params.get("page");
if (page) {
    const subjectEl = document.querySelector("input#subject");
    if (subjectEl) {
        subjectEl.value = page;
        const otherInput = document.querySelector("input#other");
        if (otherInput) {
            otherInput.checked = true;
        }
    }
}
// Check if user selected a website package
const websitePackage = params.get("package");
if (websitePackage) {
    const subjectEl = document.querySelector("input#subject");
    if (subjectEl) {
        subjectEl.value = websitePackage;
    }
    // Check if type param has come through too
    const packageType = params.get("type");
    const hiddenTypeInput = document.querySelector("input#package-type");
    if (packageType === "low" ||
        packageType === "mid" ||
        packageType === "high") {
        if (hiddenTypeInput) {
            hiddenTypeInput.value = packageType;
            // check checkboxes associated with type
            const services = packageTypes[packageType];
            services.forEach((service) => {
                console.log(service);
                const checkbox = document.querySelector(`input[type=checkbox]#${service}`);
                console.log(checkbox);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
        }
    }
}
for (const [key, value] of params.entries()) {
    const el = document.querySelector(`#${key}`);
    if (el) {
        el.classList.add("warning");
        const p = document.querySelector(`#${key} ~ p.warning`);
        if (p) {
            p.innerHTML = value;
            p.classList.add("active");
        }
    }
}
// Manually add input patterns
const patterns = {
    string: ".[-_'A-Za-zÀ-ÖØ-öø-ÿ\\s]+",
    email: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
};
const stringInputs = document.querySelectorAll("input[pattern=string]");
stringInputs.forEach((input) => input.setAttribute("pattern", patterns.string));
const emailInputs = document.querySelectorAll("input[pattern=email]");
emailInputs.forEach((input) => input.setAttribute("pattern", patterns.email));
const validateCheckboxes = () => {
    const checkboxes = document.querySelectorAll("input[name^=services]");
    const checkboxesArray = Array.from(checkboxes);
    const notCheckedBoxes = checkboxesArray.filter((box) => !box.checked);
    if (notCheckedBoxes.length === checkboxesArray.length) {
        notCheckedBoxes.forEach((box) => {
            box.required = true;
            box.setAttribute("aria-required", "true");
        });
        return false;
    }
    else {
        notCheckedBoxes.forEach((box) => {
            box.required = false;
            box.setAttribute("aria-required", "false");
        });
        return true;
    }
};
window.validateCheckboxes = validateCheckboxes;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/contact_form/contact_form.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2NvbnRhY3RfZm9ybS4wYjNlY2UwOWIwNDY2NTI2YWU4MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLFFBQVE7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsSUFBSTtBQUM5QztBQUNBO0FBQ0EsNkNBQTZDLEtBQUs7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELEdBQUc7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW1kZXNpZ25lZC8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3RfZm9ybS9jb250YWN0X2Zvcm0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcGFja2FnZVR5cGVzID0ge1xyXG4gICAgbG93OiBbXCJkZXNpZ25cIiwgXCJidWlsZFwiXSxcclxuICAgIG1pZDogW1wiZGVzaWduXCIsIFwiYnVpbGRcIiwgXCJzZW8tYWNjZXNzaWJpbGl0eVwiLCBcImFuYWx5dGljc1wiXSxcclxuICAgIGhpZ2g6IFtcclxuICAgICAgICBcImRlc2lnblwiLFxyXG4gICAgICAgIFwiYnVpbGRcIixcclxuICAgICAgICBcImhvc3RpbmdcIixcclxuICAgICAgICBcImRvbWFpbi1wdXJjaGFzZVwiLFxyXG4gICAgICAgIFwic2VvLWFjY2Vzc2liaWxpdHlcIixcclxuICAgICAgICBcImFuYWx5dGljc1wiLFxyXG4gICAgICAgIFwibWFpbnRlbmFuY2VcIixcclxuICAgIF0sXHJcbn07XHJcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcbi8vIElmIHVzZXIgaGFzIGNvbWUgZnJvbSBwcml2YWN5IG9yIHRjcyBwYWdlc1xyXG4vLyBUaGV5IGxpa2VseSBkb24ndCB3YW50IGEgd2Vic2l0ZVxyXG5jb25zdCBwYWdlID0gcGFyYW1zLmdldChcInBhZ2VcIik7XHJcbmlmIChwYWdlKSB7XHJcbiAgICBjb25zdCBzdWJqZWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjc3ViamVjdFwiKTtcclxuICAgIGlmIChzdWJqZWN0RWwpIHtcclxuICAgICAgICBzdWJqZWN0RWwudmFsdWUgPSBwYWdlO1xyXG4gICAgICAgIGNvbnN0IG90aGVySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjb3RoZXJcIik7XHJcbiAgICAgICAgaWYgKG90aGVySW5wdXQpIHtcclxuICAgICAgICAgICAgb3RoZXJJbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gQ2hlY2sgaWYgdXNlciBzZWxlY3RlZCBhIHdlYnNpdGUgcGFja2FnZVxyXG5jb25zdCB3ZWJzaXRlUGFja2FnZSA9IHBhcmFtcy5nZXQoXCJwYWNrYWdlXCIpO1xyXG5pZiAod2Vic2l0ZVBhY2thZ2UpIHtcclxuICAgIGNvbnN0IHN1YmplY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNzdWJqZWN0XCIpO1xyXG4gICAgaWYgKHN1YmplY3RFbCkge1xyXG4gICAgICAgIHN1YmplY3RFbC52YWx1ZSA9IHdlYnNpdGVQYWNrYWdlO1xyXG4gICAgfVxyXG4gICAgLy8gQ2hlY2sgaWYgdHlwZSBwYXJhbSBoYXMgY29tZSB0aHJvdWdoIHRvb1xyXG4gICAgY29uc3QgcGFja2FnZVR5cGUgPSBwYXJhbXMuZ2V0KFwidHlwZVwiKTtcclxuICAgIGNvbnN0IGhpZGRlblR5cGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwYWNrYWdlLXR5cGVcIik7XHJcbiAgICBpZiAocGFja2FnZVR5cGUgPT09IFwibG93XCIgfHxcclxuICAgICAgICBwYWNrYWdlVHlwZSA9PT0gXCJtaWRcIiB8fFxyXG4gICAgICAgIHBhY2thZ2VUeXBlID09PSBcImhpZ2hcIikge1xyXG4gICAgICAgIGlmIChoaWRkZW5UeXBlSW5wdXQpIHtcclxuICAgICAgICAgICAgaGlkZGVuVHlwZUlucHV0LnZhbHVlID0gcGFja2FnZVR5cGU7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGNoZWNrYm94ZXMgYXNzb2NpYXRlZCB3aXRoIHR5cGVcclxuICAgICAgICAgICAgY29uc3Qgc2VydmljZXMgPSBwYWNrYWdlVHlwZXNbcGFja2FnZVR5cGVdO1xyXG4gICAgICAgICAgICBzZXJ2aWNlcy5mb3JFYWNoKChzZXJ2aWNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZXJ2aWNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdHlwZT1jaGVja2JveF0jJHtzZXJ2aWNlfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hlY2tib3gpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBwYXJhbXMuZW50cmllcygpKSB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2tleX1gKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJ3YXJuaW5nXCIpO1xyXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtrZXl9IH4gcC53YXJuaW5nYCk7XHJcbiAgICAgICAgaWYgKHApIHtcclxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyBNYW51YWxseSBhZGQgaW5wdXQgcGF0dGVybnNcclxuY29uc3QgcGF0dGVybnMgPSB7XHJcbiAgICBzdHJpbmc6IFwiLlstXydBLVphLXrDgC3DlsOYLcO2w7gtw79cXFxcc10rXCIsXHJcbiAgICBlbWFpbDogXCJbYS16QS1aMC05Ll8lKy1dK0BbYS16QS1aMC05Li1dK1xcXFwuW2EtekEtWl17Mix9JFwiLFxyXG59O1xyXG5jb25zdCBzdHJpbmdJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbcGF0dGVybj1zdHJpbmddXCIpO1xyXG5zdHJpbmdJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IGlucHV0LnNldEF0dHJpYnV0ZShcInBhdHRlcm5cIiwgcGF0dGVybnMuc3RyaW5nKSk7XHJcbmNvbnN0IGVtYWlsSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3BhdHRlcm49ZW1haWxdXCIpO1xyXG5lbWFpbElucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gaW5wdXQuc2V0QXR0cmlidXRlKFwicGF0dGVyblwiLCBwYXR0ZXJucy5lbWFpbCkpO1xyXG5jb25zdCB2YWxpZGF0ZUNoZWNrYm94ZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWVePXNlcnZpY2VzXVwiKTtcclxuICAgIGNvbnN0IGNoZWNrYm94ZXNBcnJheSA9IEFycmF5LmZyb20oY2hlY2tib3hlcyk7XHJcbiAgICBjb25zdCBub3RDaGVja2VkQm94ZXMgPSBjaGVja2JveGVzQXJyYXkuZmlsdGVyKChib3gpID0+ICFib3guY2hlY2tlZCk7XHJcbiAgICBpZiAobm90Q2hlY2tlZEJveGVzLmxlbmd0aCA9PT0gY2hlY2tib3hlc0FycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgIG5vdENoZWNrZWRCb3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgICAgICAgICAgYm94LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG5vdENoZWNrZWRCb3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgICAgICAgICAgYm94LnJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn07XHJcbndpbmRvdy52YWxpZGF0ZUNoZWNrYm94ZXMgPSB2YWxpZGF0ZUNoZWNrYm94ZXM7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==