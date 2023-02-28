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
        notCheckedBoxes.forEach((box) => (box.required = true));
        return false;
    }
    else {
        notCheckedBoxes.forEach((box) => (box.required = false));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2NvbnRhY3RfZm9ybS4wOWRmOTM4MGIzZDY2MTFiZjI0Yi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLFFBQVE7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsSUFBSTtBQUM5QztBQUNBO0FBQ0EsNkNBQTZDLEtBQUs7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELEdBQUc7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbWRlc2lnbmVkLy4vc3JjL2NvbXBvbmVudHMvY29udGFjdF9mb3JtL2NvbnRhY3RfZm9ybS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBwYWNrYWdlVHlwZXMgPSB7XHJcbiAgICBsb3c6IFtcImRlc2lnblwiLCBcImJ1aWxkXCJdLFxyXG4gICAgbWlkOiBbXCJkZXNpZ25cIiwgXCJidWlsZFwiLCBcInNlby1hY2Nlc3NpYmlsaXR5XCIsIFwiYW5hbHl0aWNzXCJdLFxyXG4gICAgaGlnaDogW1xyXG4gICAgICAgIFwiZGVzaWduXCIsXHJcbiAgICAgICAgXCJidWlsZFwiLFxyXG4gICAgICAgIFwiaG9zdGluZ1wiLFxyXG4gICAgICAgIFwiZG9tYWluLXB1cmNoYXNlXCIsXHJcbiAgICAgICAgXCJzZW8tYWNjZXNzaWJpbGl0eVwiLFxyXG4gICAgICAgIFwiYW5hbHl0aWNzXCIsXHJcbiAgICAgICAgXCJtYWludGVuYW5jZVwiLFxyXG4gICAgXSxcclxufTtcclxuY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG5jb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuLy8gSWYgdXNlciBoYXMgY29tZSBmcm9tIHByaXZhY3kgb3IgdGNzIHBhZ2VzXHJcbi8vIFRoZXkgbGlrZWx5IGRvbid0IHdhbnQgYSB3ZWJzaXRlXHJcbmNvbnN0IHBhZ2UgPSBwYXJhbXMuZ2V0KFwicGFnZVwiKTtcclxuaWYgKHBhZ2UpIHtcclxuICAgIGNvbnN0IHN1YmplY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNzdWJqZWN0XCIpO1xyXG4gICAgaWYgKHN1YmplY3RFbCkge1xyXG4gICAgICAgIHN1YmplY3RFbC52YWx1ZSA9IHBhZ2U7XHJcbiAgICAgICAgY29uc3Qgb3RoZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNvdGhlclwiKTtcclxuICAgICAgICBpZiAob3RoZXJJbnB1dCkge1xyXG4gICAgICAgICAgICBvdGhlcklucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyBDaGVjayBpZiB1c2VyIHNlbGVjdGVkIGEgd2Vic2l0ZSBwYWNrYWdlXHJcbmNvbnN0IHdlYnNpdGVQYWNrYWdlID0gcGFyYW1zLmdldChcInBhY2thZ2VcIik7XHJcbmlmICh3ZWJzaXRlUGFja2FnZSkge1xyXG4gICAgY29uc3Qgc3ViamVjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3N1YmplY3RcIik7XHJcbiAgICBpZiAoc3ViamVjdEVsKSB7XHJcbiAgICAgICAgc3ViamVjdEVsLnZhbHVlID0gd2Vic2l0ZVBhY2thZ2U7XHJcbiAgICB9XHJcbiAgICAvLyBDaGVjayBpZiB0eXBlIHBhcmFtIGhhcyBjb21lIHRocm91Z2ggdG9vXHJcbiAgICBjb25zdCBwYWNrYWdlVHlwZSA9IHBhcmFtcy5nZXQoXCJ0eXBlXCIpO1xyXG4gICAgY29uc3QgaGlkZGVuVHlwZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3BhY2thZ2UtdHlwZVwiKTtcclxuICAgIGlmIChwYWNrYWdlVHlwZSA9PT0gXCJsb3dcIiB8fFxyXG4gICAgICAgIHBhY2thZ2VUeXBlID09PSBcIm1pZFwiIHx8XHJcbiAgICAgICAgcGFja2FnZVR5cGUgPT09IFwiaGlnaFwiKSB7XHJcbiAgICAgICAgaWYgKGhpZGRlblR5cGVJbnB1dCkge1xyXG4gICAgICAgICAgICBoaWRkZW5UeXBlSW5wdXQudmFsdWUgPSBwYWNrYWdlVHlwZTtcclxuICAgICAgICAgICAgLy8gY2hlY2sgY2hlY2tib3hlcyBhc3NvY2lhdGVkIHdpdGggdHlwZVxyXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlcyA9IHBhY2thZ2VUeXBlc1twYWNrYWdlVHlwZV07XHJcbiAgICAgICAgICAgIHNlcnZpY2VzLmZvckVhY2goKHNlcnZpY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlcnZpY2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPWNoZWNrYm94XSMke3NlcnZpY2V9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGVja2JveCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3gpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHBhcmFtcy5lbnRyaWVzKCkpIHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7a2V5fWApO1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcIndhcm5pbmdcIik7XHJcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2tleX0gfiBwLndhcm5pbmdgKTtcclxuICAgICAgICBpZiAocCkge1xyXG4gICAgICAgICAgICBwLmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIE1hbnVhbGx5IGFkZCBpbnB1dCBwYXR0ZXJuc1xyXG5jb25zdCBwYXR0ZXJucyA9IHtcclxuICAgIHN0cmluZzogXCIuWy1fJ0EtWmEtesOALcOWw5gtw7bDuC3Dv1xcXFxzXStcIixcclxuICAgIGVtYWlsOiBcIlthLXpBLVowLTkuXyUrLV0rQFthLXpBLVowLTkuLV0rXFxcXC5bYS16QS1aXXsyLH0kXCIsXHJcbn07XHJcbmNvbnN0IHN0cmluZ0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtwYXR0ZXJuPXN0cmluZ11cIik7XHJcbnN0cmluZ0lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gaW5wdXQuc2V0QXR0cmlidXRlKFwicGF0dGVyblwiLCBwYXR0ZXJucy5zdHJpbmcpKTtcclxuY29uc3QgZW1haWxJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbcGF0dGVybj1lbWFpbF1cIik7XHJcbmVtYWlsSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwYXR0ZXJuXCIsIHBhdHRlcm5zLmVtYWlsKSk7XHJcbmNvbnN0IHZhbGlkYXRlQ2hlY2tib3hlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZV49c2VydmljZXNdXCIpO1xyXG4gICAgY29uc3QgY2hlY2tib3hlc0FycmF5ID0gQXJyYXkuZnJvbShjaGVja2JveGVzKTtcclxuICAgIGNvbnN0IG5vdENoZWNrZWRCb3hlcyA9IGNoZWNrYm94ZXNBcnJheS5maWx0ZXIoKGJveCkgPT4gIWJveC5jaGVja2VkKTtcclxuICAgIGlmIChub3RDaGVja2VkQm94ZXMubGVuZ3RoID09PSBjaGVja2JveGVzQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgbm90Q2hlY2tlZEJveGVzLmZvckVhY2goKGJveCkgPT4gKGJveC5yZXF1aXJlZCA9IHRydWUpKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBub3RDaGVja2VkQm94ZXMuZm9yRWFjaCgoYm94KSA9PiAoYm94LnJlcXVpcmVkID0gZmFsc2UpKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufTtcclxud2luZG93LnZhbGlkYXRlQ2hlY2tib3hlcyA9IHZhbGlkYXRlQ2hlY2tib3hlcztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9