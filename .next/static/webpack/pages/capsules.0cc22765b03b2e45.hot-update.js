"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/capsules",{

/***/ "./components/capsules/modal/layoutModal.tsx":
/*!***************************************************!*\
  !*** ./components/capsules/modal/layoutModal.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar LayoutModal = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), opct = ref[0], setOpct = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setOpct(1);\n    }, [\n        children\n    ]);\n    return(// <Transition\n    //   show={children ? true : false}\n    //   enter=\"transition-opacity duration-75\"\n    //   enterFrom=\"opacity-0\"\n    //   enterTo=\"opacity-100\"\n    //   leave=\"transition-opacity duration-150\"\n    //   leaveFrom=\"opacity-100\"\n    //   leaveTo=\"opacity-0\"\n    // >\n    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none   transition-opacity  duration-100 opacity-\".concat(opct),\n        __source: {\n            fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/capsules/modal/layoutModal.tsx\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"relative w-auto my-6 mx-auto max-w-7xl\",\n                __source: {\n                    fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/capsules/modal/layoutModal.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"inline-block w-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#1A2035] border-[1px] border-[#5F5F5F] shadow-xl rounded-lg font-source\",\n                    __source: {\n                        fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/capsules/modal/layoutModal.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: children\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"fixed inset-0 bg-black/40 backdrop-blur-xl\",\n                __source: {\n                    fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/capsules/modal/layoutModal.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(LayoutModal, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = LayoutModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LayoutModal);\nvar _c;\n$RefreshReg$(_c, \"LayoutModal\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcHN1bGVzL21vZGFsL2xheW91dE1vZGFsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzREOzs7QUFRNUQsR0FBSyxDQUFDRyxXQUFXLEdBQUcsUUFBUSxRQUFpQixDQUFDO1FBQXZCQyxRQUFRLFNBQVJBLFFBQVE7O0lBQzdCLEdBQUssQ0FBbUJGLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTNCRyxJQUFJLEdBQWFILEdBQVcsS0FBdEJJLE9BQU8sR0FBSUosR0FBVztJQUNuQ0QsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZkssT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDLEVBQUUsQ0FBQ0Y7UUFBQUEsUUFBUTtJQUFBLENBQUM7SUFFYixNQUFNLENBQ0osRUFBYztJQUNkLEVBQW1DO0lBQ25DLEVBQTJDO0lBQzNDLEVBQTBCO0lBQzFCLEVBQTBCO0lBQzFCLEVBQTRDO0lBQzVDLEVBQTRCO0lBQzVCLEVBQXdCO0lBQ3hCLEVBQUk7MEVBQ0hHLENBQUc7UUFDRkMsU0FBUyxFQUFHLENBQWlLLG1LQUFPLE9BQUxILElBQUk7Ozs7Ozs7O2lGQUVsTEUsQ0FBRztnQkFBQ0MsU0FBUyxFQUFHLENBQXNDOzs7Ozs7OytGQUNwREQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQTBLOzs7Ozs7OzhCQUN0TEosUUFBUTs7O2lGQUdWRyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBNEM7Ozs7Ozs7Ozs7QUFJbkUsQ0FBQztHQTVCS0wsV0FBVztLQUFYQSxXQUFXO0FBOEJqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcHN1bGVzL21vZGFsL2xheW91dE1vZGFsLnRzeD9iYzIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpYWxvZywgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEdvbGRCdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b24vZ29sZEJ1dHRvbidcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IGFueVxufVxuXG5jb25zdCBMYXlvdXRNb2RhbCA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtvcGN0LCBzZXRPcGN0XSA9IHVzZVN0YXRlKDApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0T3BjdCgxKVxuICB9LCBbY2hpbGRyZW5dKVxuXG4gIHJldHVybiAoXG4gICAgLy8gPFRyYW5zaXRpb25cbiAgICAvLyAgIHNob3c9e2NoaWxkcmVuID8gdHJ1ZSA6IGZhbHNlfVxuICAgIC8vICAgZW50ZXI9XCJ0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tNzVcIlxuICAgIC8vICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wXCJcbiAgICAvLyAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXG4gICAgLy8gICBsZWF2ZT1cInRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0xNTBcIlxuICAgIC8vICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxuICAgIC8vICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXG4gICAgLy8gPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4IG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktYXV0byBmaXhlZCBpbnNldC0wIHotNTAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSAgIHRyYW5zaXRpb24tb3BhY2l0eSAgZHVyYXRpb24tMTAwIG9wYWNpdHktJHtvcGN0fWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSB3LWF1dG8gbXktNiBteC1hdXRvIG1heC13LTd4bGB9ID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy1hdXRvIHAtNiBteS04IG92ZXJmbG93LWhpZGRlbiB0ZXh0LWxlZnQgYWxpZ24tbWlkZGxlIHRyYW5zaXRpb24tYWxsIHRyYW5zZm9ybSBiZy1bIzFBMjAzNV0gYm9yZGVyLVsxcHhdIGJvcmRlci1bIzVGNUY1Rl0gc2hhZG93LXhsIHJvdW5kZWQtbGcgZm9udC1zb3VyY2VcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjay80MCBiYWNrZHJvcC1ibHVyLXhsXCIgLz5cbiAgICA8L2Rpdj5cbiAgICAvLyA8L1RyYW5zaXRpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0TW9kYWwiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dE1vZGFsIiwiY2hpbGRyZW4iLCJvcGN0Iiwic2V0T3BjdCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/capsules/modal/layoutModal.tsx\n");

/***/ })

});