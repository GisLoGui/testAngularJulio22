/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/file-loader/dist/cjs.js?name=angular-material-pagination.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/index.scss":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=angular-material-pagination.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/index.scss ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"angular-material-pagination.css\";\n\n//# sourceURL=webpack:///./src/index.scss?./node_modules/file-loader/dist/cjs.js?name=angular-material-pagination.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar angular_1 = __importDefault(__webpack_require__(/*! angular */ \"angular\"));\r\nvar angular_material_1 = __importDefault(__webpack_require__(/*! angular-material */ \"angular-material\"));\r\nvar module = angular_1.default.module(\"ngPagination\", [\r\n    angular_material_1.default\r\n])\r\n    .directive(\"pagination\", [\r\n    '$mdDialog',\r\n    function ($mdDialog) { return ({\r\n        restrict: 'E',\r\n        scope: {\r\n            page: '=ngModel',\r\n            limit: \"=\",\r\n            total: \"=\"\r\n        },\r\n        template: \"Showing {{offset+1}} - {{total_shown()}} of {{total}} \\n                            <md-button ng-disabled=\\\"!prevAvailable()\\\" ng-click=\\\"prev()\\\" class=\\\"md-icon-button\\\">\\n                                <md-tooltip>Previous Page</md-tooltip>\\n                                <i class=\\\"fa fa-chevron-left\\\"></i>\\n                            </md-button>\\n                            <md-button ng-disabled=\\\"total_pages <= 1\\\" ng-click=\\\"jump($event)\\\" class=\\\"md-icon-button\\\">\\n                                {{page}}\\n                            </md-button>\\n                            <md-button ng-disabled=\\\"!nextAvailable()\\\" ng-click=\\\"next()\\\" class=\\\"md-icon-button\\\">\\n                                <md-tooltip>Next Page</md-tooltip>\\n                                <i class=\\\"fa fa-chevron-right\\\"></i>\\n                            </md-button>\",\r\n        require: '^ngModel',\r\n        link: function ($scope, element, attrs, ngModel) {\r\n            $scope.$watchGroup([\"limit\", \"total\"], function () {\r\n                $scope.total_pages = Math.ceil($scope.total / $scope.limit);\r\n            });\r\n            $scope.$watchGroup(['page', 'limit'], function () {\r\n                if (!$scope.page || isNaN($scope.page)) {\r\n                    $scope.page = 1;\r\n                }\r\n                $scope.offset = $scope.limit * ($scope.page - 1);\r\n            });\r\n            $scope.total_shown = function () {\r\n                var count = $scope.offset + $scope.limit;\r\n                if (count > $scope.total) {\r\n                    return $scope.offset + ($scope.total % $scope.limit);\r\n                }\r\n                else {\r\n                    return count;\r\n                }\r\n            };\r\n            $scope.nextAvailable = function () { return $scope.page < $scope.total_pages; };\r\n            $scope.prevAvailable = function () { return $scope.page > 1; };\r\n            $scope.prev = function () {\r\n                ngModel.$setViewValue($scope.page - 1);\r\n            };\r\n            $scope.next = function () {\r\n                ngModel.$setViewValue($scope.page + 1);\r\n            };\r\n            $scope.jump = function (e) {\r\n                // @ts-ignore\r\n                var dialog = $mdDialog.prompt({\r\n                    title: \"Page Number\",\r\n                    textContent: \"Enter the page number you want to jump to\",\r\n                    targetEvent: e,\r\n                    ok: \"Jump\",\r\n                    cancel: \"Cancel\"\r\n                });\r\n                $mdDialog.show(dialog).then(function (page) {\r\n                    ngModel.$setViewValue(page);\r\n                });\r\n            };\r\n            ngModel.$parsers.push(function (value) {\r\n                if (value > $scope.total_pages) {\r\n                    return $scope.total_pages;\r\n                }\r\n                else if (value < 1) {\r\n                    return 1;\r\n                }\r\n                else {\r\n                    return value;\r\n                }\r\n            });\r\n        }\r\n    }); }\r\n]);\r\nexports.default = module.name;\r\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!************************************************************************************************************************************!*\
  !*** multi ./src/index.js file-loader?name=angular-material-pagination.css!extract-loader!css-loader!sass-loader!./src/index.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! F:\\htdocs\\angular-material-pagination\\src\\index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! file-loader?name=angular-material-pagination.css!extract-loader!css-loader!sass-loader!F:\\htdocs\\angular-material-pagination\\src\\index.scss */\"./node_modules/file-loader/dist/cjs.js?name=angular-material-pagination.css!./node_modules/extract-loader/lib/extractLoader.js!./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/index.scss\");\n\n\n//# sourceURL=webpack:///./src/index.scss?multi_./src/index.js_file-loader?name=angular-material-pagination.css!extract-loader!css-loader!sass-loader");

/***/ }),

/***/ "angular":
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = angular;\n\n//# sourceURL=webpack:///external_%22angular%22?");

/***/ }),

/***/ "angular-material":
/*!*******************************!*\
  !*** external "'ngMaterial'" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = 'ngMaterial';\n\n//# sourceURL=webpack:///external_%22'ngMaterial'%22?");

/***/ })

/******/ });