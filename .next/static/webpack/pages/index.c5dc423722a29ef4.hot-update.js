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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image */ \"./components/image.tsx\");\n/* harmony import */ var _state_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/global */ \"./state/global.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _button_goldButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/goldButton */ \"./components/button/goldButton.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// import Avatar from '../../assets/header/Avatar.png'\n// import Wallet from '../../assets/header/wallet.svg'\n// import Copy from '../../assets/header/copy.svg'\n\n\n\nvar _s = $RefreshSig$();\nfunction Profile(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_state_global__WEBPACK_IMPORTED_MODULE_2__.GlobalContext), isConnected = ref.isConnected, setIsConnected = ref.setIsConnected;\n    return isConnected ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: 'flex justify-center' + props.className,\n        __source: {\n            fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n            lineNumber: 14,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"flex flex-col items-end mr-3 font-source\",\n                __source: {\n                    fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"font-semibold text-lg text-gold-gradient\",\n                        __source: {\n                            fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"0.682 EVM\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"flex text-xs text-[#C2C2C2]\",\n                        onClick: function() {\n                            return setIsConnected(false);\n                        },\n                        __source: {\n                            fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            __source: {\n                                fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"0x1231...daw3HEJ\"\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                className: \"w-12\",\n                src: Avatar,\n                alt: \"Avatar\",\n                __source: {\n                    fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"w-56\",\n        __source: {\n            fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n            lineNumber: 30,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_button_goldButton__WEBPACK_IMPORTED_MODULE_4__.GoldButton, {\n            className: \"hover:cursor-pointer text-sm\",\n            onClick: function() {\n                return setIsConnected(true);\n            },\n            __source: {\n                fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"w-4 mr-2 my-2\",\n                    src: Wallet,\n                    alt: \"Wallet\",\n                    __source: {\n                        fileName: \"/Users/user/Documents/dev/fl/Evermoon-Capsule/dev/components/header/Profile.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                \" CONNECT WALLET\"\n            ]\n        })\n    });\n};\n_s(Profile, \"EfkDuVrJl66Ln68a9y43jaT/LQw=\");\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9Qcm9maWxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRCO0FBRTVCLEVBQXNEO0FBQ3RELEVBQXNEO0FBQ3RELEVBQWtEO0FBQ0E7QUFDaEI7QUFDZTs7QUFFbEMsUUFBUSxDQUFDSSxPQUFPLENBQUNDLEtBQVUsRUFBRSxDQUFDOztJQUMzQyxHQUFLLENBQW1DSCxHQUF5QixHQUF6QkEsaURBQVUsQ0FBQ0Qsd0RBQWEsR0FBeERLLFdBQVcsR0FBcUJKLEdBQXlCLENBQXpESSxXQUFXLEVBQUVDLGNBQWMsR0FBS0wsR0FBeUIsQ0FBNUNLLGNBQWM7SUFFbkMsTUFBTSxDQUFDRCxXQUFXLHlFQUNmRSxDQUFHO1FBQUNDLFNBQVMsRUFBRSxDQUFxQix1QkFBR0osS0FBSyxDQUFDSSxTQUFTOzs7Ozs7OztrRkFDcERELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUEwQzs7Ozs7Ozs7eUZBQ3RERCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBMEM7Ozs7Ozs7a0NBQUMsQ0FFMUQ7O3lGQUNDRCxDQUFHO3dCQUNGQyxTQUFTLEVBQUMsQ0FBNkI7d0JBQ3ZDQyxPQUFPLEVBQUUsUUFBUTs0QkFBRkgsTUFBTSxDQUFOQSxjQUFjLENBQUMsS0FBSzs7Ozs7Ozs7dUdBR2xDQyxDQUFHOzs7Ozs7O3NDQUFDLENBQWdCOzs7OztpRkFHeEJSLDhDQUFLO2dCQUFDUyxTQUFTLEVBQUMsQ0FBTTtnQkFBQ0UsR0FBRyxFQUFFQyxNQUFNO2dCQUFFQyxHQUFHLEVBQUMsQ0FBUTs7Ozs7Ozs7OzhFQUdsREwsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBTTs7Ozs7Ozt3RkFDbEJOLDBEQUFVO1lBQ1RNLFNBQVMsRUFBQyxDQUE4QjtZQUN4Q0MsT0FBTyxFQUFFLFFBQVE7Z0JBQUZILE1BQU0sQ0FBTkEsY0FBYyxDQUFDLElBQUk7Ozs7Ozs7OztxRkFFakNQLDhDQUFLO29CQUFDUyxTQUFTLEVBQUMsQ0FBZTtvQkFBQ0UsR0FBRyxFQUFFRyxNQUFNO29CQUFFRCxHQUFHLEVBQUMsQ0FBUTs7Ozs7Ozs7Z0JBQUcsQ0FFL0Q7Ozs7QUFHTixDQUFDO0dBOUJ1QlQsT0FBTztLQUFQQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyL1Byb2ZpbGUudHN4P2M3ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJy4uL2ltYWdlJ1xuaW1wb3J0IE1hcmtldHBsYWNlQm94IGZyb20gJy4uLy4uL2Fzc2V0cy9tYXJrZXRwbGFjZS1ib3guc3ZnJ1xuLy8gaW1wb3J0IEF2YXRhciBmcm9tICcuLi8uLi9hc3NldHMvaGVhZGVyL0F2YXRhci5wbmcnXG4vLyBpbXBvcnQgV2FsbGV0IGZyb20gJy4uLy4uL2Fzc2V0cy9oZWFkZXIvd2FsbGV0LnN2Zydcbi8vIGltcG9ydCBDb3B5IGZyb20gJy4uLy4uL2Fzc2V0cy9oZWFkZXIvY29weS5zdmcnXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RhdGUvZ2xvYmFsJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR29sZEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbi9nb2xkQnV0dG9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgeyBpc0Nvbm5lY3RlZCwgc2V0SXNDb25uZWN0ZWQgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCkhXG5cbiAgcmV0dXJuIGlzQ29ubmVjdGVkID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBqdXN0aWZ5LWNlbnRlcicgKyBwcm9wcy5jbGFzc05hbWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBtci0zIGZvbnQtc291cmNlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnIHRleHQtZ29sZC1ncmFkaWVudFwiPlxuICAgICAgICAgIDAuNjgyIEVWTVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdGV4dC14cyB0ZXh0LVsjQzJDMkMyXVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNDb25uZWN0ZWQoZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgey8qIDxJbWFnZSBjbGFzc05hbWU9XCJ3LTQgbXItMVwiIHNyYz17Q29weX0gYWx0PVwiQXZhdGFyXCIgLz4gKi99XG4gICAgICAgICAgPGRpdj4weDEyMzEuLi5kYXczSEVKPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwidy0xMlwiIHNyYz17QXZhdGFyfSBhbHQ9XCJBdmF0YXJcIiAvPlxuICAgIDwvZGl2PlxuICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy01NlwiPlxuICAgICAgPEdvbGRCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6Y3Vyc29yLXBvaW50ZXIgdGV4dC1zbVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQ29ubmVjdGVkKHRydWUpfVxuICAgICAgPlxuICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwidy00IG1yLTIgbXktMlwiIHNyYz17V2FsbGV0fSBhbHQ9XCJXYWxsZXRcIiAvPiBDT05ORUNUXG4gICAgICAgIFdBTExFVFxuICAgICAgPC9Hb2xkQnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJHbG9iYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIkdvbGRCdXR0b24iLCJQcm9maWxlIiwicHJvcHMiLCJpc0Nvbm5lY3RlZCIsInNldElzQ29ubmVjdGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNyYyIsIkF2YXRhciIsImFsdCIsIldhbGxldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/Profile.tsx\n");

/***/ })

});