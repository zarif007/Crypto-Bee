/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/TransactionContexst.js":
/*!****************************************!*\
  !*** ./context/TransactionContexst.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TransactionContext\": () => (/* binding */ TransactionContext),\n/* harmony export */   \"TransactionProvider\": () => (/* binding */ TransactionProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst TransactionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nlet eth;\nif (false) {}\nconst TransactionProvider = ({ children  })=>{\n    const { 0: currentAccount , 1: setCurrentAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    const connectWallet = async (metamask = eth)=>{\n        try {\n            if (!metamask) return alert('Install MM');\n            const accounts = await metamask.request({\n                method: 'eth_requestAccounts'\n            });\n            setCurrentAccount(accounts[0]);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const checkIfWalletIsConnected = async (metamask = eth)=>{\n        try {\n            if (!metamask) return alert('Install MM');\n            const accounts = await metamask.request({\n                method: 'eth_requestAccounts'\n            });\n            if (accounts.length) {\n                setCurrentAccount(accounts[0]);\n                console.log(currentAccount);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TransactionContext.Provider, {\n        value: {\n            currentAccount,\n            connectWallet\n        },\n        children: [\n            \" \",\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\context\\\\TransactionContexst.js\",\n        lineNumber: 43,\n        columnNumber: 12\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4c3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRDtBQUUzQyxLQUFLLENBQUNHLGtCQUFrQixpQkFBR0gsMERBQW1CO0FBRXJELEdBQUcsQ0FBQ0ssR0FBRztBQUVQLEVBQUUsRUFBRSxLQUE2QixFQUFFLEVBRWxDO0FBRU0sS0FBSyxDQUFDRyxtQkFBbUIsSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUNsRCxLQUFLLE1BQUVDLGNBQWMsTUFBRUMsaUJBQWlCLE1BQUlULCtDQUFRO0lBRXBERCxnREFBUyxLQUFNLENBQUM7UUFDWlcsd0JBQXdCO0lBQzVCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxLQUFLLENBQUNDLGFBQWEsVUFBVUMsUUFBUSxHQUFHVCxHQUFHLEdBQUssQ0FBQztRQUM3QyxHQUFHLENBQUMsQ0FBQztZQUNELEVBQUUsR0FBRVMsUUFBUSxFQUFFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQVk7WUFDdkMsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDRixRQUFRLENBQUNHLE9BQU8sQ0FBQyxDQUFDQztnQkFBQUEsTUFBTSxFQUFFLENBQXFCO1lBQUEsQ0FBQztZQUV2RVAsaUJBQWlCLENBQUNLLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxLQUFLLEVBQUVHLEtBQUssRUFBRSxDQUFDO1lBQ2JDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDQSxLQUFLO1FBQ3ZCLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDUCx3QkFBd0IsVUFBVUUsUUFBUSxHQUFHVCxHQUFHLEdBQUssQ0FBQztRQUN4RCxHQUFHLENBQUMsQ0FBQztZQUNELEVBQUUsR0FBRVMsUUFBUSxFQUFFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQVk7WUFDdkMsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDRixRQUFRLENBQUNHLE9BQU8sQ0FBQyxDQUFDQztnQkFBQUEsTUFBTSxFQUFFLENBQXFCO1lBQUEsQ0FBQztZQUV2RSxFQUFFLEVBQUNGLFFBQVEsQ0FBQ0ssTUFBTSxFQUFFLENBQUM7Z0JBQ2pCVixpQkFBaUIsQ0FBQ0ssUUFBUSxDQUFDLENBQUM7Z0JBQzVCSSxPQUFPLENBQUNFLEdBQUcsQ0FBQ1osY0FBYztZQUM5QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLEtBQUssRUFBRVMsS0FBSyxFQUFFLENBQUM7WUFDYkMsT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUs7UUFDdkIsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLDZFQUFFaEIsa0JBQWtCLENBQUNvQixRQUFRO1FBQUNDLEtBQUssRUFBSSxDQUFDO1lBQzFDZCxjQUFjO1lBQ2RHLGFBQWE7UUFDakIsQ0FBQzs7WUFBRSxDQUFDO1lBQUVKLFFBQVE7Ozs7Ozs7QUFFbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NiX2NsaWVudC8uL2NvbnRleHQvVHJhbnNhY3Rpb25Db250ZXhzdC5qcz9lOWMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcblxyXG5sZXQgZXRoXHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBldGggPSB3aW5kb3cuZXRoZXJldW1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudEFjY291bnQsIHNldEN1cnJlbnRBY2NvdW50XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCgpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKG1ldGFtYXNrID0gZXRoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYoIW1ldGFtYXNrKSByZXR1cm4gYWxlcnQoJ0luc3RhbGwgTU0nKVxyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IG1ldGFtYXNrLnJlcXVlc3Qoe21ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnfSlcclxuXHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrSWZXYWxsZXRJc0Nvbm5lY3RlZCA9IGFzeW5jIChtZXRhbWFzayA9IGV0aCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmKCFtZXRhbWFzaykgcmV0dXJuIGFsZXJ0KCdJbnN0YWxsIE1NJylcclxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBtZXRhbWFzay5yZXF1ZXN0KHttZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJ30pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihhY2NvdW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnRzWzBdKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEFjY291bnQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPFRyYW5zYWN0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZSA9IHt7XHJcbiAgICAgICAgY3VycmVudEFjY291bnQsXHJcbiAgICAgICAgY29ubmVjdFdhbGxldCxcclxuICAgIH19PiB7IGNoaWxkcmVuIH1cclxuICAgIDwvVHJhbnNhY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRyYW5zYWN0aW9uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJldGgiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIlRyYW5zYWN0aW9uUHJvdmlkZXIiLCJjaGlsZHJlbiIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQiLCJjb25uZWN0V2FsbGV0IiwibWV0YW1hc2siLCJhbGVydCIsImFjY291bnRzIiwicmVxdWVzdCIsIm1ldGhvZCIsImVycm9yIiwiY29uc29sZSIsImxlbmd0aCIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/TransactionContexst.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_TransactionContexst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/TransactionContexst */ \"./context/TransactionContexst.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_TransactionContexst__WEBPACK_IMPORTED_MODULE_1__.TransactionProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"G:\\\\0001 Project\\\\project\\\\CryptoBee\\\\cb_client\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0U7QUFDdEM7U0FFckJDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0hILDZFQUFtQjs4RkFDakJFLFNBQVM7ZUFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2JfY2xpZW50Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zYWN0aW9uUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L1RyYW5zYWN0aW9uQ29udGV4c3QnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFRyYW5zYWN0aW9uUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9UcmFuc2FjdGlvblByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiVHJhbnNhY3Rpb25Qcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();