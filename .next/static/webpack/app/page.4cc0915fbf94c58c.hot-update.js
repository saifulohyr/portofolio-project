"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/contact.tsx":
/*!********************************!*\
  !*** ./components/contact.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-heading */ \"(app-client)/./components/section-heading.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/hooks */ \"(app-client)/./lib/hooks.ts\");\n/* harmony import */ var _actions_sendEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/actions/sendEmail */ \"(app-client)/./actions/sendEmail.ts\");\n/* harmony import */ var _submit_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submit-btn */ \"(app-client)/./components/submit-btn.tsx\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Contact() {\n    _s();\n    const { ref } = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useSectionInView)(\"Contact\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.section, {\n        id: \"contact\",\n        ref: ref,\n        className: \"mb-20 sm:mb-28 w-[min(100%,38rem)] text-center\",\n        initial: {\n            opacity: 0\n        },\n        whileInView: {\n            opacity: 1\n        },\n        transition: {\n            duration: 1\n        },\n        viewport: {\n            once: true\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: \"Contact me\"\n            }, void 0, false, {\n                fileName: \"E:\\\\porto\\\\portfolio-website\\\\components\\\\contact.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-700 -mt-6 dark:text-white/80\",\n                children: [\n                    \"Please contact me directly at\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"underline\",\n                        href: \"mailto:sa\",\n                        children: \"example@gmail.com\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\porto\\\\portfolio-website\\\\components\\\\contact.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    \"or through this form.\"\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\porto\\\\portfolio-website\\\\components\\\\contact.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"mt-10 flex flex-col dark:text-black\",\n                action: async (formData)=>{\n                    const { data, error } = await (0,_actions_sendEmail__WEBPACK_IMPORTED_MODULE_4__.sendEmail)(formData);\n                    if (error) {\n                        react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(error);\n                        return;\n                    }\n                    react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Email sent successfully!\");\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none\",\n                        name: \"senderEmail\",\n                        type: \"email\",\n                        required: true,\n                        maxLength: 500,\n                        placeholder: \"Your email\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\porto\\\\portfolio-website\\\\components\\\\contact.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none\",\n                        name: \"message\",\n                        placeholder: \"Your message\",\n                        required: true,\n                        maxLength: 5000\n                    }, void 0, false, {\n                        fileName: \"E:\\\\porto\\\\portfolio-website\\\\components\\\\contact.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_submit_btn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"E:\\\\porto\\\\portfolio-website\\\\components\\\\contact.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\porto\\\\portfolio-website\\\\components\\\\contact.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\porto\\\\portfolio-website\\\\components\\\\contact.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Contact, \"vuV2Oqy/m5Sj7a/N+PFePPf5wkY=\", false, function() {\n    return [\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useSectionInView\n    ];\n});\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9jb250YWN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFDcUI7QUFDUjtBQUNRO0FBQ0M7QUFDWDtBQUNEO0FBRXJCLFNBQVNPOztJQUN0QixNQUFNLEVBQUVDLEdBQUcsRUFBRSxHQUFHTCw0REFBZ0JBLENBQUM7SUFFakMscUJBQ0UsOERBQUNELGlEQUFNQSxDQUFDTyxPQUFPO1FBQ2JDLElBQUc7UUFDSEYsS0FBS0E7UUFDTEcsV0FBVTtRQUNWQyxTQUFTO1lBQ1BDLFNBQVM7UUFDWDtRQUNBQyxhQUFhO1lBQ1hELFNBQVM7UUFDWDtRQUNBRSxZQUFZO1lBQ1ZDLFVBQVU7UUFDWjtRQUNBQyxVQUFVO1lBQ1JDLE1BQU07UUFDUjs7MEJBRUEsOERBQUNqQix3REFBY0E7MEJBQUM7Ozs7OzswQkFFaEIsOERBQUNrQjtnQkFBRVIsV0FBVTs7b0JBQXlDO29CQUN0QjtrQ0FDOUIsOERBQUNTO3dCQUFFVCxXQUFVO3dCQUFZVSxNQUFLO2tDQUFZOzs7Ozs7b0JBRXJDO29CQUFJOzs7Ozs7OzBCQUlYLDhEQUFDQztnQkFDQ1gsV0FBVTtnQkFDVlksUUFBUSxPQUFPQztvQkFDYixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTXRCLDZEQUFTQSxDQUFDb0I7b0JBRXhDLElBQUlFLE9BQU87d0JBQ1RwQix1REFBS0EsQ0FBQ29CLEtBQUssQ0FBQ0E7d0JBQ1o7b0JBQ0Y7b0JBRUFwQix1REFBS0EsQ0FBQ3FCLE9BQU8sQ0FBQztnQkFDaEI7O2tDQUVBLDhEQUFDQzt3QkFDQ2pCLFdBQVU7d0JBQ1ZrQixNQUFLO3dCQUNMQyxNQUFLO3dCQUNMQyxRQUFRO3dCQUNSQyxXQUFXO3dCQUNYQyxhQUFZOzs7Ozs7a0NBRWQsOERBQUNDO3dCQUNDdkIsV0FBVTt3QkFDVmtCLE1BQUs7d0JBQ0xJLGFBQVk7d0JBQ1pGLFFBQVE7d0JBQ1JDLFdBQVc7Ozs7OztrQ0FFYiw4REFBQzNCLG1EQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEI7R0EvRHdCRTs7UUFDTkosd0RBQWdCQTs7O0tBRFZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udGFjdC50c3g/YWVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gXCIuL3NlY3Rpb24taGVhZGluZ1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTZWN0aW9uSW5WaWV3IH0gZnJvbSBcIkAvbGliL2hvb2tzXCI7XHJcbmltcG9ydCB7IHNlbmRFbWFpbCB9IGZyb20gXCJAL2FjdGlvbnMvc2VuZEVtYWlsXCI7XHJcbmltcG9ydCBTdWJtaXRCdG4gZnJvbSBcIi4vc3VibWl0LWJ0blwiO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcclxuICBjb25zdCB7IHJlZiB9ID0gdXNlU2VjdGlvbkluVmlldyhcIkNvbnRhY3RcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLnNlY3Rpb25cclxuICAgICAgaWQ9XCJjb250YWN0XCJcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIGNsYXNzTmFtZT1cIm1iLTIwIHNtOm1iLTI4IHctW21pbigxMDAlLDM4cmVtKV0gdGV4dC1jZW50ZXJcIlxyXG4gICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgfX1cclxuICAgICAgd2hpbGVJblZpZXc9e3tcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIH19XHJcbiAgICAgIHZpZXdwb3J0PXt7XHJcbiAgICAgICAgb25jZTogdHJ1ZSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPFNlY3Rpb25IZWFkaW5nPkNvbnRhY3QgbWU8L1NlY3Rpb25IZWFkaW5nPlxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCAtbXQtNiBkYXJrOnRleHQtd2hpdGUvODBcIj5cclxuICAgICAgICBQbGVhc2UgY29udGFjdCBtZSBkaXJlY3RseSBhdHtcIiBcIn1cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIiBocmVmPVwibWFpbHRvOnNhXCI+XHJcbiAgICAgICAgICBleGFtcGxlQGdtYWlsLmNvbVxyXG4gICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgb3IgdGhyb3VnaCB0aGlzIGZvcm0uXHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibXQtMTAgZmxleCBmbGV4LWNvbCBkYXJrOnRleHQtYmxhY2tcIlxyXG4gICAgICAgIGFjdGlvbj17YXN5bmMgKGZvcm1EYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzZW5kRW1haWwoZm9ybURhdGEpO1xyXG5cclxuICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiRW1haWwgc2VudCBzdWNjZXNzZnVsbHkhXCIpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTQgcHgtNCByb3VuZGVkLWxnIGJvcmRlckJsYWNrIGRhcms6Ymctd2hpdGUgZGFyazpiZy1vcGFjaXR5LTgwIGRhcms6Zm9jdXM6Ymctb3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1hbGwgZGFyazpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgbmFtZT1cInNlbmRlckVtYWlsXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgbWF4TGVuZ3RoPXs1MDB9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTUyIG15LTMgcm91bmRlZC1sZyBib3JkZXJCbGFjayBwLTQgZGFyazpiZy13aGl0ZSBkYXJrOmJnLW9wYWNpdHktODAgZGFyazpmb2N1czpiZy1vcGFjaXR5LTEwMCB0cmFuc2l0aW9uLWFsbCBkYXJrOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbWVzc2FnZVwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgbWF4TGVuZ3RoPXs1MDAwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFN1Ym1pdEJ0biAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L21vdGlvbi5zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2VjdGlvbkhlYWRpbmciLCJtb3Rpb24iLCJ1c2VTZWN0aW9uSW5WaWV3Iiwic2VuZEVtYWlsIiwiU3VibWl0QnRuIiwidG9hc3QiLCJDb250YWN0IiwicmVmIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInZpZXdwb3J0Iiwib25jZSIsInAiLCJhIiwiaHJlZiIsImZvcm0iLCJhY3Rpb24iLCJmb3JtRGF0YSIsImRhdGEiLCJlcnJvciIsInN1Y2Nlc3MiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/contact.tsx\n"));

/***/ })

});