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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/logo.png */ \"./assets/logo.png\");\n/* harmony import */ var _assets_eth_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/eth.png */ \"./assets/eth.png\");\n/* harmony import */ var _assets_ethCurrency_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/ethCurrency.png */ \"./assets/ethCurrency.png\");\n/* harmony import */ var react_icons_fa___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa/ */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"p-4 w-screen flex justify-between items-center flex-wrap\",\n    headerLogo: \"flex w-1/4 items-center justify-start\",\n    nav: \"flex justify-center items-center\",\n    navItemsContainer: \"flex bg-gray-900 rounded-2xl mx-auto\",\n    navItem: \"px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-2xl\",\n    activeNavItem: \"bg-[#20242A]\",\n    buttonsContainer: \"flex w-1/4 justify-end items-center\",\n    button: \"flex items-center bg-gray-900 rounded-xl mx-2 text-[0.9rem] font-semibold cursor-pointer\",\n    buttonPadding: \"p-2\",\n    buttonTextContainer: \"h-8 flex items-center\",\n    buttonIconContainer: \"flex items-center justify-center w-8 h-8\",\n    buttonAccent: \"bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-xl flex items-center justify-center text-[#4F90EA]\"\n};\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Transfer'), selectedNav = ref[0], setSelectedNav = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.headerLogo,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    alt: \"logo\",\n                    height: 80,\n                    width: 80\n                }, void 0, false, {\n                    fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                lineNumber: 29,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(style.nav, \" justify-between\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.navItemsContainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'Transfer' && style.activeNavItem),\n                                onClick: function() {\n                                    return setSelectedNav('Transfer');\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"hidden sm:inline pr-1\",\n                                        children: \"Transfer\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 19\n                                    }, _this),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiSendPlaneFill, {\n                                        className: \"w-4 h-4\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 75\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(style.navItem, \" \").concat(selectedNav === 'History' && style.activeNavItem),\n                                onClick: function() {\n                                    return setSelectedNav('History');\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"hidden sm:inline pr-1\",\n                                        children: \"History\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 19\n                                    }, _this),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa___WEBPACK_IMPORTED_MODULE_7__.FaHistory, {\n                                        className: \"w-4 h-4\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 74\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.buttonsContainer,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.button, \" \").concat(style.buttonPadding),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: style.buttonIconContainer,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _assets_eth_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                        alt: \"eth\",\n                                        height: 20,\n                                        width: 20\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"hidden sm:inline\",\n                                    children: \"Etherium\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.button, \" \").concat(style.buttonPadding, \" w-full\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(style.buttonAccent, \" \").concat(style.buttonPadding),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"hidden sm:inline pr-1\",\n                                    children: \"Connect Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, _this),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa___WEBPACK_IMPORTED_MODULE_7__.FaWallet, {\n                                    className: \"w-4 h-4\"\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 73\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\components\\\\Header.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, _this));\n};\n_s(Header, \"aKnY2SphZcG3JlljBTqtf7KON3k=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sRUFBRSxFQUFFO3dDQUFFQyxLQUFLLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7NEdBRWpERyxDQUFDO29DQUFDUCxTQUFTLEVBQUMsQ0FBa0I7OENBQUMsQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBSTNDRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUcsR0FBa0JqQixNQUFtQixDQUFuQ0EsS0FBSyxDQUFDUSxNQUFNLEVBQUMsQ0FBQyxJQUFzQixNQUFPLENBQTNCUixLQUFLLENBQUNTLGFBQWEsRUFBQyxDQUFPOzhHQUMzRE8sQ0FBRzs0QkFBQ0MsU0FBUyxFQUFHLEdBQXdCakIsTUFBbUIsQ0FBekNBLEtBQUssQ0FBQ1ksWUFBWSxFQUFDLENBQUMsSUFBc0IsT0FBcEJaLEtBQUssQ0FBQ1MsYUFBYTs7NEdBQ3pEZSxDQUFDO29DQUFDUCxTQUFTLEVBQUMsQ0FBdUI7OENBQUMsQ0FBYzs7Ozs7O2dDQUFJLENBQUM7NEdBQUNwQixxREFBUTtvQ0FBQ29CLFNBQVMsRUFBQyxDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRyxDQUFDO0dBekNLSixNQUFNO0tBQU5BLE1BQU07QUEyQ1osK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBsb2dvIGZyb20gJy4uL2Fzc2V0cy9sb2dvLnBuZydcclxuaW1wb3J0IGV0aCBmcm9tICcuLi9hc3NldHMvZXRoLnBuZydcclxuaW1wb3J0IGV0aEN1cnJlbmN5IGZyb20gJy4uL2Fzc2V0cy9ldGhDdXJyZW5jeS5wbmcnXHJcbmltcG9ydCB7IEZhV2FsbGV0LCBGYUhpc3RvcnkgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmEvXCI7XHJcbmltcG9ydCB7IFJpU2VuZFBsYW5lRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgICB3cmFwcGVyOiBgcC00IHctc2NyZWVuIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBmbGV4LXdyYXBgLFxyXG4gICAgaGVhZGVyTG9nbzogYGZsZXggdy0xLzQgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRgLFxyXG4gICAgbmF2OiBgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJgLFxyXG4gICAgbmF2SXRlbXNDb250YWluZXI6IGBmbGV4IGJnLWdyYXktOTAwIHJvdW5kZWQtMnhsIG14LWF1dG9gLFxyXG4gICAgbmF2SXRlbTogYHB4LTQgcHktMiBtLTEgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtWzAuOXJlbV0gY3Vyc29yLXBvaW50ZXIgcm91bmRlZC0yeGxgLFxyXG4gICAgYWN0aXZlTmF2SXRlbTogYGJnLVsjMjAyNDJBXWAsXHJcbiAgICBidXR0b25zQ29udGFpbmVyOiBgZmxleCB3LTEvNCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXJgLFxyXG4gICAgYnV0dG9uOiBgZmxleCBpdGVtcy1jZW50ZXIgYmctZ3JheS05MDAgcm91bmRlZC14bCBteC0yIHRleHQtWzAuOXJlbV0gZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlcmAsXHJcbiAgICBidXR0b25QYWRkaW5nOiBgcC0yYCxcclxuICAgIGJ1dHRvblRleHRDb250YWluZXI6IGBoLTggZmxleCBpdGVtcy1jZW50ZXJgLFxyXG4gICAgYnV0dG9uSWNvbkNvbnRhaW5lcjogYGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctOCBoLThgLFxyXG4gICAgYnV0dG9uQWNjZW50OiBgYmctWyMxNzJBNDJdIGJvcmRlciBib3JkZXItWyMxNjMyNTZdIGhvdmVyOmJvcmRlci1bIzIzNDE2OV0gaC1mdWxsIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1bIzRGOTBFQV1gLFxyXG59XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWROYXYsIHNldFNlbGVjdGVkTmF2XSA9IHVzZVN0YXRlKCdUcmFuc2ZlcicpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUud3JhcHBlcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVhZGVyTG9nb30+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IGFsdD0nbG9nbycgaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUubmF2fSBqdXN0aWZ5LWJldHdlZW5gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdkl0ZW1zQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5uYXZJdGVtfSAke3NlbGVjdGVkTmF2ID09PSAnVHJhbnNmZXInICYmIFxyXG4gICAgICAgICAgICAgICAgc3R5bGUuYWN0aXZlTmF2SXRlbX1gfSBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkTmF2KCdUcmFuc2ZlcicpfT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoaWRkZW4gc206aW5saW5lIHByLTEnPlRyYW5zZmVyPC9zcGFuPiA8UmlTZW5kUGxhbmVGaWxsIGNsYXNzTmFtZT0ndy00IGgtNCcgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5uYXZJdGVtfSAke3NlbGVjdGVkTmF2ID09PSAnSGlzdG9yeScgJiYgXHJcbiAgICAgICAgICAgICAgICBzdHlsZS5hY3RpdmVOYXZJdGVtfWB9IFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWROYXYoJ0hpc3RvcnknKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGlkZGVuIHNtOmlubGluZSBwci0xJz5IaXN0b3J5PC9zcGFuPiA8RmFIaXN0b3J5IGNsYXNzTmFtZT0ndy00IGgtNCcgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbn0gJHtzdHlsZS5idXR0b25QYWRkaW5nfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkljb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtldGh9IGFsdD0nZXRoJyBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naGlkZGVuIHNtOmlubGluZSc+RXRoZXJpdW08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbn0gJHtzdHlsZS5idXR0b25QYWRkaW5nfSB3LWZ1bGxgfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9uQWNjZW50fSAke3N0eWxlLmJ1dHRvblBhZGRpbmd9YH0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2hpZGRlbiBzbTppbmxpbmUgcHItMSc+Q29ubmVjdCBXYWxsZXQ8L3A+IDxGYVdhbGxldCBjbGFzc05hbWU9J3ctNCBoLTQnIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwibG9nbyIsImV0aCIsImV0aEN1cnJlbmN5IiwiRmFXYWxsZXQiLCJGYUhpc3RvcnkiLCJSaVNlbmRQbGFuZUZpbGwiLCJzdHlsZSIsIndyYXBwZXIiLCJoZWFkZXJMb2dvIiwibmF2IiwibmF2SXRlbXNDb250YWluZXIiLCJuYXZJdGVtIiwiYWN0aXZlTmF2SXRlbSIsImJ1dHRvbnNDb250YWluZXIiLCJidXR0b24iLCJidXR0b25QYWRkaW5nIiwiYnV0dG9uVGV4dENvbnRhaW5lciIsImJ1dHRvbkljb25Db250YWluZXIiLCJidXR0b25BY2NlbnQiLCJIZWFkZXIiLCJzZWxlY3RlZE5hdiIsInNldFNlbGVjdGVkTmF2IiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJvbkNsaWNrIiwic3BhbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});