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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/logo.png */ \"./assets/logo.png\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n/* harmony import */ var _assets_ethCurrency_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/ethCurrency.png */ \"./assets/ethCurrency.png\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"p-4 w-screen flex justify-between items-center flex-wrap\",\n    headerLogo: \"flex w-1/4 items-center justify-start\",\n    nav: \"flex justify-center items-center\",\n    navItemsContainer: \"flex bg-gray-900 rounded-2xl\",\n    navItem: \"px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-2xl mx-auto\",\n    activeNavItem: \"bg-[#20242A]\",\n    buttonsContainer: \"flex w-1/4 justify-end items-center\",\n    button: \"flex items-center bg-gray-900 rounded-xl mx-2 text-[0.9rem] font-semibold cursor-pointer\",\n    buttonPadding: \"p-2\",\n    buttonTextContainer: \"h-8 flex items-center\",\n    buttonIconContainer: \"flex items-center justify-center w-8 h-8\",\n    buttonAccent: \"bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-xl flex items-center justify-center text-[#4F90EA]\"\n};\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Transfer'), selectedNav = ref[0], setSelectedNav = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.headerLogo,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    alt: \"logo\",\n                    height: 80,\n                    width: 80\n                }, void 0, false, {\n                    fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.nav,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.navItemsContainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'Transfer' && style.activeNavItem),\n                                onClick: function() {\n                                    return setSelectedNav('Transfer');\n                                },\n                                children: [\n                                    \"Transfer \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        class: \"fas fa-envelope-open-dollar\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 28\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'History' && style.activeNavItem),\n                                onClick: function() {\n                                    return setSelectedNav('History');\n                                },\n                                children: \"History\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.buttonsContainer,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: style.buttonIconContainer,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                        alt: \"eth\",\n                                        height: 20,\n                                        width: 20\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"hidden sm:inline\",\n                                    children: \"Etherium\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonAccent, \" \").concat(style.buttonPadding),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"hidden sm:inline\",\n                                    children: \"Connect Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, _this),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    class: \"fas fa-wallet\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 68\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, _this));\n};\n_s(Header, \"aKnY2SphZcG3JlljBTqtf7KON3k=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNCLE9BQXBCUixLQUFLLENBQUNTLGFBQWE7OEdBQ25ETyxDQUFHOzRCQUFDQyxTQUFTLEVBQUcsR0FBd0JqQixNQUFtQixDQUF6Q0EsS0FBSyxDQUFDWSxZQUFZLEVBQUMsQ0FBQyxJQUFzQixPQUFwQlosS0FBSyxDQUFDUyxhQUFhOzs0R0FDekRnQixDQUFDO29DQUFDUixTQUFTLEVBQUMsQ0FBa0I7OENBQUMsQ0FBYzs7Ozs7O2dDQUFJLENBQUM7NEdBQUNNLENBQUM7b0NBQUNDLEtBQUssRUFBQyxDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0zRixDQUFDO0dBekNLWCxNQUFNO0tBQU5BLE1BQU07QUEyQ1osK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBsb2dvIGZyb20gJy4uL2Fzc2V0cy9sb2dvLnBuZydcclxuaW1wb3J0IGV0aCBmcm9tICcuLi9hc3NldHMvZXRoLnBuZydcclxuaW1wb3J0IGV0aEN1cnJlbmN5IGZyb20gJy4uL2Fzc2V0cy9ldGhDdXJyZW5jeS5wbmcnXHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIHdyYXBwZXI6IGBwLTQgdy1zY3JlZW4gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGZsZXgtd3JhcGAsXHJcbiAgICBoZWFkZXJMb2dvOiBgZmxleCB3LTEvNCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydGAsXHJcbiAgICBuYXY6IGBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcmAsXHJcbiAgICBuYXZJdGVtc0NvbnRhaW5lcjogYGZsZXggYmctZ3JheS05MDAgcm91bmRlZC0yeGxgLFxyXG4gICAgbmF2SXRlbTogYHB4LTQgcHktMiBtLTEgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtWzAuOXJlbV0gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC0yeGwgbXgtYXV0b2AsXHJcbiAgICBhY3RpdmVOYXZJdGVtOiBgYmctWyMyMDI0MkFdYCxcclxuICAgIGJ1dHRvbnNDb250YWluZXI6IGBmbGV4IHctMS80IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlcmAsXHJcbiAgICBidXR0b246IGBmbGV4IGl0ZW1zLWNlbnRlciBiZy1ncmF5LTkwMCByb3VuZGVkLXhsIG14LTIgdGV4dC1bMC45cmVtXSBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyYCxcclxuICAgIGJ1dHRvblBhZGRpbmc6IGBwLTJgLFxyXG4gICAgYnV0dG9uVGV4dENvbnRhaW5lcjogYGgtOCBmbGV4IGl0ZW1zLWNlbnRlcmAsXHJcbiAgICBidXR0b25JY29uQ29udGFpbmVyOiBgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy04IGgtOGAsXHJcbiAgICBidXR0b25BY2NlbnQ6IGBiZy1bIzE3MkE0Ml0gYm9yZGVyIGJvcmRlci1bIzE2MzI1Nl0gaG92ZXI6Ym9yZGVyLVsjMjM0MTY5XSBoLWZ1bGwgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsjNEY5MEVBXWAsXHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzZWxlY3RlZE5hdiwgc2V0U2VsZWN0ZWROYXZdID0gdXNlU3RhdGUoJ1RyYW5zZmVyJylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkZXJMb2dvfT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17bG9nb30gYWx0PSdsb2dvJyBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubmF2SXRlbXNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLm5hdkl0ZW19ICR7c2VsZWN0ZWROYXYgPT09ICdUcmFuc2ZlcicgJiYgXHJcbiAgICAgICAgICAgICAgICBzdHlsZS5hY3RpdmVOYXZJdGVtfWB9IFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWROYXYoJ1RyYW5zZmVyJyl9PlxyXG4gICAgICAgICAgICAgICAgICBUcmFuc2ZlciA8aSBjbGFzcz1cImZhcyBmYS1lbnZlbG9wZS1vcGVuLWRvbGxhclwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5uYXZJdGVtfSAke3NlbGVjdGVkTmF2ID09PSAnSGlzdG9yeScgJiYgXHJcbiAgICAgICAgICAgICAgICBzdHlsZS5hY3RpdmVOYXZJdGVtfWB9IFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWROYXYoJ0hpc3RvcnknKX0+XHJcbiAgICAgICAgICAgICAgICAgIEhpc3RvcnlcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbn0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkljb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtldGh9IGFsdD0nZXRoJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naGlkZGVuIHNtOmlubGluZSc+RXRoZXJpdW08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbn0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b25BY2NlbnR9ICR7c3R5bGUuYnV0dG9uUGFkZGluZ31gfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naGlkZGVuIHNtOmlubGluZSc+Q29ubmVjdCBXYWxsZXQ8L3A+IDxpIGNsYXNzPVwiZmFzIGZhLXdhbGxldFwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJsb2dvIiwiZXRoIiwiZXRoQ3VycmVuY3kiLCJzdHlsZSIsIndyYXBwZXIiLCJoZWFkZXJMb2dvIiwibmF2IiwibmF2SXRlbXNDb250YWluZXIiLCJuYXZJdGVtIiwiYWN0aXZlTmF2SXRlbSIsImJ1dHRvbnNDb250YWluZXIiLCJidXR0b24iLCJidXR0b25QYWRkaW5nIiwiYnV0dG9uVGV4dENvbnRhaW5lciIsImJ1dHRvbkljb25Db250YWluZXIiLCJidXR0b25BY2NlbnQiLCJIZWFkZXIiLCJzZWxlY3RlZE5hdiIsInNldFNlbGVjdGVkTmF2IiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJvbkNsaWNrIiwiaSIsImNsYXNzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});