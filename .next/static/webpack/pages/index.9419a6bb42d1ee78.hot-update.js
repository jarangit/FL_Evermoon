"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/header/Profile.tsx":
/*!***************************************!*\
  !*** ./components/header/Profile.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _state_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/global */ \"./state/global.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _button_goldButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/goldButton */ \"./components/button/goldButton.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// import Avatar from '../../assets/header/Avatar.png'\n// import Wallet from '../../assets/header/wallet.svg'\n// import Copy from '../../assets/header/copy.svg'\n\n\n\nvar _s = $RefreshSig$();\nfunction Profile(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_state_global__WEBPACK_IMPORTED_MODULE_1__.GlobalContext), isConnected = ref.isConnected, setIsConnected = ref.setIsConnected;\n    return isConnected ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: 'flex justify-center' + props.className,\n        __source: {\n            fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n            lineNumber: 14,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"flex flex-col items-end mr-3 font-source\",\n            __source: {\n                fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"font-semibold text-lg text-gold-gradient\",\n                    __source: {\n                        fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"0.682 EVM\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"flex text-xs text-[#C2C2C2]\",\n                    onClick: function() {\n                        return setIsConnected(false);\n                    },\n                    __source: {\n                        fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"0x1231...daw3HEJ\"\n                    })\n                })\n            ]\n        })\n    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"w-56\",\n        __source: {\n            fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n            lineNumber: 30,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_goldButton__WEBPACK_IMPORTED_MODULE_3__.GoldButton, {\n            className: \"hover:cursor-pointer text-sm\",\n            onClick: function() {\n                return setIsConnected(true);\n            },\n            __source: {\n                fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            },\n            __self: this,\n            children: \"WALLET\"\n        })\n    });\n};\n_s(Profile, \"EfkDuVrJl66Ln68a9y43jaT/LQw=\");\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9Qcm9maWxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxFQUFzRDtBQUN0RCxFQUFzRDtBQUN0RCxFQUFrRDtBQUNBO0FBQ2hCO0FBQ2U7O0FBRWxDLFFBQVEsQ0FBQ0csT0FBTyxDQUFDQyxLQUFVLEVBQUUsQ0FBQzs7SUFDM0MsR0FBSyxDQUFtQ0gsR0FBeUIsR0FBekJBLGlEQUFVLENBQUNELHdEQUFhLEdBQXhESyxXQUFXLEdBQXFCSixHQUF5QixDQUF6REksV0FBVyxFQUFFQyxjQUFjLEdBQUtMLEdBQXlCLENBQTVDSyxjQUFjO0lBRW5DLE1BQU0sQ0FBQ0QsV0FBVyx3RUFDZkUsQ0FBRztRQUFDQyxTQUFTLEVBQUUsQ0FBcUIsdUJBQUdKLEtBQUssQ0FBQ0ksU0FBUzs7Ozs7Ozt3RkFDcERELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQTBDOzs7Ozs7OztxRkFDdERELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUEwQzs7Ozs7Ozs4QkFBQyxDQUUxRDs7cUZBQ0NELENBQUc7b0JBQ0ZDLFNBQVMsRUFBQyxDQUE2QjtvQkFDdkNDLE9BQU8sRUFBRSxRQUFRO3dCQUFGSCxNQUFNLENBQU5BLGNBQWMsQ0FBQyxLQUFLOzs7Ozs7OzttR0FHbENDLENBQUc7Ozs7Ozs7a0NBQUMsQ0FBZ0I7Ozs7OzhFQU0xQkEsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBTTs7Ozs7Ozt1RkFDbEJOLDBEQUFVO1lBQ1RNLFNBQVMsRUFBQyxDQUE4QjtZQUN4Q0MsT0FBTyxFQUFFLFFBQVE7Z0JBQUZILE1BQU0sQ0FBTkEsY0FBYyxDQUFDLElBQUk7Ozs7Ozs7O3NCQUUyQyxDQUUvRTs7O0FBR04sQ0FBQztHQTlCdUJILE9BQU87S0FBUEEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci9Qcm9maWxlLnRzeD9jN2Q1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICcuLi9pbWFnZSdcbmltcG9ydCBNYXJrZXRwbGFjZUJveCBmcm9tICcuLi8uLi9hc3NldHMvbWFya2V0cGxhY2UtYm94LnN2Zydcbi8vIGltcG9ydCBBdmF0YXIgZnJvbSAnLi4vLi4vYXNzZXRzL2hlYWRlci9BdmF0YXIucG5nJ1xuLy8gaW1wb3J0IFdhbGxldCBmcm9tICcuLi8uLi9hc3NldHMvaGVhZGVyL3dhbGxldC5zdmcnXG4vLyBpbXBvcnQgQ29weSBmcm9tICcuLi8uLi9hc3NldHMvaGVhZGVyL2NvcHkuc3ZnJ1xuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0YXRlL2dsb2JhbCdcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdvbGRCdXR0b24gfSBmcm9tICcuLi9idXR0b24vZ29sZEJ1dHRvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZShwcm9wczogYW55KSB7XG4gIGNvbnN0IHsgaXNDb25uZWN0ZWQsIHNldElzQ29ubmVjdGVkIH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpIVxuXG4gIHJldHVybiBpc0Nvbm5lY3RlZCA/IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXgganVzdGlmeS1jZW50ZXInICsgcHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQgbXItMyBmb250LXNvdXJjZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1sZyB0ZXh0LWdvbGQtZ3JhZGllbnRcIj5cbiAgICAgICAgICAwLjY4MiBFVk1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHRleHQteHMgdGV4dC1bI0MyQzJDMl1cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQ29ubmVjdGVkKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiA8SW1hZ2UgY2xhc3NOYW1lPVwidy00IG1yLTFcIiBzcmM9e0NvcHl9IGFsdD1cIkF2YXRhclwiIC8+ICovfVxuICAgICAgICAgIDxkaXY+MHgxMjMxLi4uZGF3M0hFSjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxJbWFnZSBjbGFzc05hbWU9XCJ3LTEyXCIgc3JjPXtBdmF0YXJ9IGFsdD1cIkF2YXRhclwiIC8+ICovfVxuICAgIDwvZGl2PlxuICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy01NlwiPlxuICAgICAgPEdvbGRCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6Y3Vyc29yLXBvaW50ZXIgdGV4dC1zbVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQ29ubmVjdGVkKHRydWUpfVxuICAgICAgPlxuICAgICAgICB7LyogPEltYWdlIGNsYXNzTmFtZT1cInctNCBtci0yIG15LTJcIiBzcmM9e1dhbGxldH0gYWx0PVwiV2FsbGV0XCIgLz4gQ09OTkVDVCAqL31cbiAgICAgICAgV0FMTEVUXG4gICAgICA8L0dvbGRCdXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJHbG9iYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIkdvbGRCdXR0b24iLCJQcm9maWxlIiwicHJvcHMiLCJpc0Nvbm5lY3RlZCIsInNldElzQ29ubmVjdGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/Profile.tsx\n");

/***/ })

});