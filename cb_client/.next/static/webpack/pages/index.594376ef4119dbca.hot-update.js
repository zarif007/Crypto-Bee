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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/logo.png */ \"./assets/logo.png\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n/* harmony import */ var _assets_ethCurrency_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/ethCurrency.png */ \"./assets/ethCurrency.png\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"p-4 w-screen flex justify-between items-center flex-wrap\",\n    headerLogo: \"flex w-1/4 items-center justify-start\",\n    nav: \"flex justify-between items-center flex-wrap\",\n    navItemsContainer: \"flex bg-gray-900 rounded-2xl\",\n    navItem: \"px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-2xl\",\n    activeNavItem: \"bg-[#20242A]\",\n    buttonsContainer: \"flex w-1/4 justify-end items-center\",\n    button: \"flex items-center bg-gray-900 rounded-xl mx-2 text-[0.9rem] font-semibold cursor-pointer\",\n    buttonPadding: \"p-2\",\n    buttonTextContainer: \"h-8 flex items-center\",\n    buttonIconContainer: \"flex items-center justify-center w-8 h-8\",\n    buttonAccent: \"bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-xl flex items-center justify-center text-[#4F90EA]\"\n};\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Transfer'), selectedNav = ref[0], setSelectedNav = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.headerLogo,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    alt: \"logo\",\n                    height: 80,\n                    width: 80\n                }, void 0, false, {\n                    fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.nav,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.navItemsContainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'Transfer' && style.activeNavItem),\n                                onClick: function() {\n                                    return setSelectedNav('Transfer');\n                                },\n                                children: \"Transfer\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'History' && style.activeNavItem),\n                                onClick: function() {\n                                    return setSelectedNav('History');\n                                },\n                                children: \"History\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.buttonsContainer,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: style.buttonIconContainer,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                        alt: \"eth\",\n                                        height: 20,\n                                        width: 20\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"hidden\",\n                                    children: \"Etherium\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonAccent, \" \").concat(style.buttonPadding),\n                            children: [\n                                \"Connect Wallet \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fas fa-wallet p-2\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 32\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, _this));\n};\n_s(Header, \"aKnY2SphZcG3JlljBTqtf7KON3k=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsU0FBUyxFQUFHLEdBQXdCakIsTUFBbUIsQ0FBekNBLEtBQUssQ0FBQ1ksWUFBWSxFQUFDLENBQUMsSUFBc0IsT0FBcEJaLEtBQUssQ0FBQ1MsYUFBYTs7Z0NBQUksQ0FDL0M7NEdBQUNlLENBQUM7b0NBQUNQLFNBQVMsRUFBQyxDQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0QsQ0FBQztHQXpDS0osTUFBTTtLQUFOQSxNQUFNO0FBMkNaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuLi9hc3NldHMvbG9nby5wbmcnXHJcbmltcG9ydCBldGggZnJvbSAnLi4vYXNzZXRzL2V0aC5wbmcnXHJcbmltcG9ydCBldGhDdXJyZW5jeSBmcm9tICcuLi9hc3NldHMvZXRoQ3VycmVuY3kucG5nJ1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgICB3cmFwcGVyOiBgcC00IHctc2NyZWVuIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBmbGV4LXdyYXBgLFxyXG4gICAgaGVhZGVyTG9nbzogYGZsZXggdy0xLzQgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRgLFxyXG4gICAgbmF2OiBgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGZsZXgtd3JhcGAsXHJcbiAgICBuYXZJdGVtc0NvbnRhaW5lcjogYGZsZXggYmctZ3JheS05MDAgcm91bmRlZC0yeGxgLFxyXG4gICAgbmF2SXRlbTogYHB4LTQgcHktMiBtLTEgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtWzAuOXJlbV0gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC0yeGxgLFxyXG4gICAgYWN0aXZlTmF2SXRlbTogYGJnLVsjMjAyNDJBXWAsXHJcbiAgICBidXR0b25zQ29udGFpbmVyOiBgZmxleCB3LTEvNCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXJgLFxyXG4gICAgYnV0dG9uOiBgZmxleCBpdGVtcy1jZW50ZXIgYmctZ3JheS05MDAgcm91bmRlZC14bCBteC0yIHRleHQtWzAuOXJlbV0gZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlcmAsXHJcbiAgICBidXR0b25QYWRkaW5nOiBgcC0yYCxcclxuICAgIGJ1dHRvblRleHRDb250YWluZXI6IGBoLTggZmxleCBpdGVtcy1jZW50ZXJgLFxyXG4gICAgYnV0dG9uSWNvbkNvbnRhaW5lcjogYGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctOCBoLThgLFxyXG4gICAgYnV0dG9uQWNjZW50OiBgYmctWyMxNzJBNDJdIGJvcmRlciBib3JkZXItWyMxNjMyNTZdIGhvdmVyOmJvcmRlci1bIzIzNDE2OV0gaC1mdWxsIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1bIzRGOTBFQV1gLFxyXG59XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWROYXYsIHNldFNlbGVjdGVkTmF2XSA9IHVzZVN0YXRlKCdUcmFuc2ZlcicpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud3JhcHBlcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVhZGVyTG9nb30+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IGFsdD0nbG9nbycgaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdkl0ZW1zQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5uYXZJdGVtfSAke3NlbGVjdGVkTmF2ID09PSAnVHJhbnNmZXInICYmIFxyXG4gICAgICAgICAgICAgICAgc3R5bGUuYWN0aXZlTmF2SXRlbX1gfSBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkTmF2KCdUcmFuc2ZlcicpfT5cclxuICAgICAgICAgICAgICAgICAgVHJhbnNmZXJcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5uYXZJdGVtfSAke3NlbGVjdGVkTmF2ID09PSAnSGlzdG9yeScgJiYgXHJcbiAgICAgICAgICAgICAgICBzdHlsZS5hY3RpdmVOYXZJdGVtfWB9IFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWROYXYoJ0hpc3RvcnknKX0+XHJcbiAgICAgICAgICAgICAgICAgIEhpc3RvcnlcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbn0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkljb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtldGh9IGFsdD0nZXRoJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGlkZGVuJz5FdGhlcml1bTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9ufSAke3N0eWxlLmJ1dHRvblBhZGRpbmd9YH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbkFjY2VudH0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9PlxyXG4gICAgICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXQgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdhbGxldCBwLTJcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwibG9nbyIsImV0aCIsImV0aEN1cnJlbmN5Iiwic3R5bGUiLCJ3cmFwcGVyIiwiaGVhZGVyTG9nbyIsIm5hdiIsIm5hdkl0ZW1zQ29udGFpbmVyIiwibmF2SXRlbSIsImFjdGl2ZU5hdkl0ZW0iLCJidXR0b25zQ29udGFpbmVyIiwiYnV0dG9uIiwiYnV0dG9uUGFkZGluZyIsImJ1dHRvblRleHRDb250YWluZXIiLCJidXR0b25JY29uQ29udGFpbmVyIiwiYnV0dG9uQWNjZW50IiwiSGVhZGVyIiwic2VsZWN0ZWROYXYiLCJzZXRTZWxlY3RlZE5hdiIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwib25DbGljayIsInNwYW4iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});